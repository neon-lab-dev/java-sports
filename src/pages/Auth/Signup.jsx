import { signup } from "@/api/user";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const { isPending, mutate } = useMutation({
    mutationFn: (data) => signup(data),
    onError: (error) => {
      toast.error(error);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      navigate("/otp-verification");
    },
  });
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => mutate(data))}
      className="flex flex-col gap-4 p-14 bg-grey/1 max-sm:mx-5 max-sm:p-8"
    >
      <h1 className="text-3xl text-center font-900">Create Your Account</h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="user-name" className="text-sm font-700 font-Lato ">
          Full Name
        </label>
        <input
          className="p-2 border-none rounded-xl"
          type="text"
          placeholder="Full name"
          {...register("full_name")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-700 font-Lato">
          Email
        </label>
        <input
          className="p-2 border-none rounded-xl"
          type="Email"
          placeholder="Email"
          {...register("email")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-sm font-700 font-Lato">
          Mobile No
        </label>
        <input
          className="p-2 border-none rounded-xl"
          type="text"
          placeholder="mobile number"
          {...register("phoneNo")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-sm font-700 font-Lato">
          Date of Birth
        </label>
        <input
          className="p-2 border-none rounded-xl"
          type="date"
          {...register("dob")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="text-sm font-700 font-Lato ">
          Password
        </label>
        <input
          className="p-2 border-none rounded-xl"
          type="password"
          placeholder="Password"
          {...register("password")}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="confirm-password"
          className="text-sm font-700 font-Lato"
        >
          Confirm Password
        </label>
        <input
          className="p-3 border-none rounded-xl"
          type="password"
          placeholder="Confirm Password"
          {...register("confirm_password")}
        />
      </div>

      <span className="text-center text-[10px]">
        By clicking on sign-up, you agree to java sports{" "}
        <Link to="/forgot-password" className="text-red-500 underline">
          Terms and Conditions of Use.
        </Link>
      </span>
      <button className="p-2 text-white bg-black rounded-3xl">
        {isPending ? "Loading..." : "Create Account"}
      </button>
      <span className="text-sm text-center ">
        Have an account?{" "}
        <Link to="/login" className="text-red-500 underline">
          Log in
        </Link>
      </span>
    </form>
  );
};
export default Signup;
