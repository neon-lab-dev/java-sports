import { PASSWORD_REGEX } from "@/assets/constants/regex";
import { useState } from "react";
import { useForm } from "react-hook-form";
import eyeIcon from "@/assets/icons/eye.svg";
import eyeClosedIcon from "@/assets/icons/eye-closed.svg";
import toast from "react-hot-toast";
import AppFormErrorLine from "@/components/reusable/AppFormErrorLine";
import { useMutation } from "@tanstack/react-query";
import { updateUserPassword } from "@/api/user";

const PasswordReset = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    mutate(data);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => updateUserPassword(data),
    onError: (error) => {
      toast.error(error);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      reset();
    },
  });

  const [inputType, setInputType] = useState({
    oldPassword: "password",
    newPassword: "password",
    confirmPassword: "password",
  });

  return (
    <form
      className="flex flex-col gap-4 max-w-xl wrapper lg:m-0 lg:w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <span className="font-500 text-2xl sm:text-3xl">Password Reset</span>
      <div className="flex flex-col gap-1">
        <label htmlFor="newPassword" className="font-600 text-lg">
          Old password
        </label>
        <div className="relative">
          <input
            type={inputType.oldPassword}
            placeholder="Enter old password here"
            className="bg-grey/2 px-4 py-3 sm:px-6 sm:py-4 w-full"
            {...register("oldPassword", {
              required: true,
              minLength: 1,
            })}
          />
          <img
            src={inputType.oldPassword === "text" ? eyeIcon : eyeClosedIcon}
            alt="Show password"
            className="absolute right-2 w-5 h-5 cursor-pointer top-1/2 transform -translate-y-1/2 opacity-60"
            onClick={() =>
              setInputType((prev) => ({
                ...prev,
                oldPassword: prev.oldPassword === "text" ? "password" : "text",
              }))
            }
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="newPassword" className="font-600 text-lg">
          New password
        </label>
        <div className="relative">
          <input
            type={inputType.newPassword}
            placeholder="Enter new password here"
            className="bg-grey/2 px-4 py-3 sm:px-6 sm:py-4 w-full"
            {...register("newPassword", {
              required: true,
              minLength: 8,
              validate: (value) =>
                PASSWORD_REGEX.test(value) ||
                "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
            })}
          />
          <img
            src={inputType.newPassword === "text" ? eyeIcon : eyeClosedIcon}
            alt="Show password"
            className="absolute right-2 w-5 h-5 cursor-pointer top-1/2 transform -translate-y-1/2 opacity-60"
            onClick={() =>
              setInputType((prev) => ({
                ...prev,
                newPassword: prev.newPassword === "text" ? "password" : "text",
              }))
            }
          />
        </div>

        {errors.newPassword && errors.newPassword.type === "minLength" && (
          <AppFormErrorLine message="Password must be at least 8 characters long" />
        )}
        {errors.newPassword && (
          <AppFormErrorLine message={errors.newPassword.message} />
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="confirmPassword" className="font-600 text-lg">
          Confirm new password
        </label>
        <div className="relative">
          <input
            type={inputType.confirmPassword}
            placeholder="Enter new password here"
            className="bg-grey/2 px-4 py-3 sm:px-6 sm:py-4 w-full"
            {...register("confirmPassword", {
              required: true,
              validate: (value) => value === watch("newPassword"),
            })}
          />
          <img
            src={
              inputType.confirmPassword === "text" ? eyeIcon : eyeClosedIcon
            }
            alt="Show password"
            className="absolute right-2 w-5 h-5 cursor-pointer top-1/2 transform -translate-y-1/2 opacity-60"
            onClick={() =>
              setInputType((prev) => ({
                ...prev,
                confirmPassword:
                  prev.confirmPassword === "text" ? "password" : "text",
              }))
            }
          />
        </div>
        {errors.confirmPassword &&
          errors.confirmPassword.type === "validate" && (
            <AppFormErrorLine message="Passwords do not match" />
          )}
      </div>
      <button
        type="submit"
        className="rounded-lg px-4 py-2.5 bg-blue w-32 sm:w-48 self-end text-white"
      >
        {isPending ? "Updating..." : "Update Password"}
      </button>
    </form>
  );
};
export default PasswordReset;
