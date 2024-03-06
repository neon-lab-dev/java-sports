import { sendOtp, signup } from "@/api/user";
import { OTP_TIMER } from "@/assets/constants/timer";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Otp = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [timer, setTimer] = useState(OTP_TIMER);
  const { register, handleSubmit } = useForm();
  const { state } = useLocation();
  const { isPending, mutate } = useMutation({
    mutationFn: (data) => sendOtp(data),
    onError: (error) => {
      toast.error(error);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      navigate("/account");
    },
  });

  const onSubmit = (data) => {
    mutate({
      email: state?.user?.email || "",
      otp: data.otp,
    });
  };

  const { isPending: isOtpSendingAgain, mutate: mutateRegister } = useMutation({
    mutationFn: (data) => signup(data),
    onError: (error) => {
      toast.error(error);
    },
    onSuccess: (data) => {
      toast.success(data.message);
    },
  });

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(interval);
        }
        return prev - 1;
      });
    }, 1 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 p-14 bg-grey/1 max-sm:mx-5 max-sm:p-8"
    >
      <h1 className="text-4xl font-700">Otp verification</h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="otp" className="text-sm font-700 font-Lato ">
          Enter OTP
        </label>
        <input
          className="p-2 border-none rounded-xl"
          type="text"
          placeholder="Otp"
          {...register("otp")}
        />
      </div>
      <button className="p-3 text-white bg-black font-700 rounded-3xl font-Lato mx-14">
        {isPending ? "Verifying..." : "Verify"}
      </button>
      {timer > 1 ? (
        <span className="text-sm text-center ">
          You can request the OTP in {timer} seconds
        </span>
      ) : (
        <span className="text-sm text-center ">
          Didn't receive the OTP?{" "}
          <button
            type="button"
            onClick={() => {
              if (!state?.user) {
                toast.error("Please register first");
                return;
              }
              mutateRegister(state?.user);
            }}
            disabled={timer > 1}
            className="text-red-500 underline"
          >
            {isOtpSendingAgain ? "Sending..." : "Send Again"}
          </button>
        </span>
      )}
    </form>
  );
};
export default Otp;
