// @ts-nocheck
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setIsAuthenticating } from "@/redux/slices/userSlice";
import { login } from "@/api/user";
import { useForm } from "react-hook-form";
import { EMAIL_REGEX, PASSWORD_REGEX } from "@/assets/constants/regex";
import AppFormErrorLine from "@/components/reusable/AppFormErrorLine";
import eyeClosed from "@/assets/icons/eye-closed.svg";
import eyeOpen from "@/assets/icons/eye.svg";

const Login = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const [passwordType, setPasswordType] = useState("password");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationKey: ["user"],
    mutationFn: ({ email, password }) => login({ email, password }),
    onError: (error) => {
      toast.error(error);
    },
    onSuccess: () => {
      dispatch(setIsAuthenticating(true));
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/account");
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 p-14 bg-grey/1 max-sm:mx-5 max-sm:p-8 "
    >
      <h1 className="text-4xl font-700">Login</h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="user" className="text-sm font-700 font-Lato ">
          Email
        </label>
        <input
          className="p-2 border-none rounded-xl"
          type="text"
          placeholder="Enter your email"
          id="user"
          {...register("email", {
            validate: (value) => EMAIL_REGEX.test(value),
          })}
        />
        {errors.email && (
          <AppFormErrorLine message="Please enter a valid email" />
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-sm font-700 font-Lato ">
          Password
        </label>
        <div className="w-full relative">
          <input
            className="p-2 border-none rounded-xl w-full"
            type={passwordType}
            placeholder="Enter Password"
            id="password"
            {...register("password", {
              required: true,
            })}
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4"
            onClick={() =>
              setPasswordType((prev) =>
                prev === "password" ? "text" : "password"
              )
            }
          >
            <img src={passwordType === "password" ? eyeClosed : eyeOpen} />
          </button>
        </div>
        {errors.password && (
          <AppFormErrorLine
            //short message saying password should contain 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character
            message="Password is required"
          />
        )}
        <Link
          to="/forgot-password"
          className="text-xs text-right text-red-500 underline mt-3"
        >
          Forget your Password ?
        </Link>
      </div>
      <button className="p-3 text-white bg-black font-700 rounded-3xl font-Lato ">
        {isPending ? "Loading..." : "Login"}
      </button>
      <span className="text-sm text-center ">
        Don&apos;t Have an account ?
        <Link to="/signup" className="text-red-500 underline">
          {" "}
          Create an Account
        </Link>
      </span>
    </form>
  );
};
export default Login;
