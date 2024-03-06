import { sendOtp } from "@/api/user";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
const Otp = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect");
  const { register, handleSubmit } = useForm();
  const { isPending, mutate } = useMutation({
    mutationFn: (otp) => sendOtp(otp),
    onError: (error) => {
      toast.error(error);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      navigate(`/login${redirect ? `?redirect=${redirect}` : ""}`);
    },
  });
  return (
    <form
      onSubmit={handleSubmit((data) => mutate(data))}
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
      <span className="text-sm text-center ">
        Don&apos;t received ?
        <Link to="/otp-verification" className="text-red-500 underline">
          Send again
        </Link>
      </span>
    </form>
  );
};
export default Otp;
