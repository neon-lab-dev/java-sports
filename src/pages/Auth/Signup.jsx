import { signup } from "@/api/user";
import {
  EMAIL_REGEX,
  PASSWORD_REGEX,
  PHONE_REGEX,
} from "@/assets/constants/regex";
import AppFormErrorLine from "@/components/reusable/AppFormErrorLine";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import eyeClosed from "@/assets/icons/eye-closed.svg";
import eyeOpen from "@/assets/icons/eye.svg";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState({
    password: "password",
    confirmPassword: "password",
  });
  const { isPending, mutate } = useMutation({
    mutationFn: (data) => signup(data),
    onError: (error) => {
      toast.error(error);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      navigate("/otp-verification", {
        state: { email: data.email },
        replace: true,
      });
    },
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

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
          {...register("full_name", {
            validate: (value) => value.length > 3,
          })}
        />
        {errors.full_name && (
          <AppFormErrorLine message="Full name is not valid" />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-700 font-Lato">
          Email
        </label>
        <input
          className="p-2 border-none rounded-xl"
          type="Email"
          placeholder="Email"
          {...register("email", {
            validate: (value) => EMAIL_REGEX.test(value),
          })}
        />
        {errors.email && <AppFormErrorLine message="Email is not valid" />}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-sm font-700 font-Lato">
          Mobile No
        </label>
        <input
          className="p-2 border-none rounded-xl"
          type="text"
          placeholder="mobile number"
          {...register("phoneNo", {
            validate: (value) => PHONE_REGEX.test(value),
          })}
        />
        {errors.phoneNo && (
          <AppFormErrorLine message="Phone number is not valid" />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-sm font-700 font-Lato">
          Date of Birth
        </label>
        <input
          className="p-2 border-none rounded-xl"
          type="date"
          //user can only select date before today
          max={new Date().toISOString().split("T")[0]}
          {...register("dob", {
            required: true,
          })}
        />
        {errors.dob && (
          <AppFormErrorLine message="Please select your date of birth" />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="" className="text-sm font-700 font-Lato ">
          Password
        </label>
        <div className="relative w-full">
          <input
            className="p-2 border-none rounded-xl w-full"
            type={passwordType.password}
            placeholder="Password"
            {...register("password", {
              validate: (value) => PASSWORD_REGEX.test(value),
            })}
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4"
            onClick={() =>
              setPasswordType((prev) => ({
                ...prev,
                password: prev.password === "password" ? "text" : "password",
              }))
            }
          >
            <img
              src={passwordType.password === "password" ? eyeClosed : eyeOpen}
            />
          </button>
        </div>
        {errors.password && <AppFormErrorLine message="Password is too weak" />}
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="confirm-password"
          className="text-sm font-700 font-Lato w-full"
        >
          Confirm Password
        </label>
        <div className="w-full relative">
          <input
            className="p-2 border-none rounded-xl w-full"
            type={passwordType.confirmPassword}
            placeholder="Confirm Password"
            {...register("confirm_password", {
              validate: (value) => value === watch("password"),
            })}
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4"
            onClick={() =>
              setPasswordType((prev) => ({
                ...prev,
                confirmPassword:
                  prev.confirmPassword === "password" ? "text" : "password",
              }))
            }
          >
            <img
              src={
                passwordType.confirmPassword === "password"
                  ? eyeClosed
                  : eyeOpen
              }
            />
          </button>
        </div>
        {errors.confirm_password && (
          <AppFormErrorLine message="Passwords do not match" />
        )}
      </div>

      <span className="text-center text-[10px]">
        By clicking on sign-up, you agree to java sports{" "}
        <Link to="/terms-and-conditions" className="text-red-500 underline">
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
