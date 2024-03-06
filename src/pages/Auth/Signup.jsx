// @ts-nocheck
import { signup } from "@/api/user";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const AppFormErrorLine = ({ message }) => {
  return <span className="text-primary text-xs md:text-[10px] w-[200px]">{message}</span>;
};

const Signup = () => {

  const [inputType, setInputType] = useState({
    newPassword: "password",
    confirmNewPassword: "password",
  });


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

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-14 bg-grey/1 max-sm:mx-5 max-sm:p-8">
    <h1 className="text-3xl text-center font-900">Create Your Account</h1>
    <div className="flex flex-col gap-2">
      <label htmlFor="user-name" className="text-sm font-700 font-Lato">
        Full Name
      </label>
      <input
        className="p-2 border-none rounded-xl"
        type="text"
        placeholder="Full name"
        id="user_name"
        {...register("name", { required: true, minLength: 4 })}
      />
      {errors.name && errors.name.type === "minLength" && (
        <AppFormErrorLine message="Name must be at least 3 characters long" />
      )}
    </div>
    <div className="flex flex-col gap-2">
      <label htmlFor="email" className="text-sm font-700 font-Lato">
        Email
      </label>
      <input
        className="p-2 border-none rounded-xl"
        type="email"
        placeholder="Email"
        id="email"
        {...register("email", {
          required: true,
          validate: (value) => EMAIL_REGEX.test(value) || "Invalid email",
        })} />
      {errors.email && <AppFormErrorLine message={errors.email.message} />}

    </div>
    <div className="flex flex-col gap-2">
      <label htmlFor="phone" className="text-sm font-700 font-Lato">
        Mobile No
      </label>
      <input
        className="p-2 border-none rounded-xl"
        type="text"
        placeholder="Mobile number"
        id="phone"
        {...register("phone", {
          //valid only for Indian phone numbers with country code
          required: true,
          validate: (value) => PHONE_REGEX.test(value) || "Invalid phone",
        })} />
      {errors.phone && <AppFormErrorLine message={errors.phone.message} />}
    </div>
    <div className="flex flex-col gap-2">
      <label htmlFor="phone" className="text-sm font-700 font-Lato">
        Date of Birth
      </label>
      <input
        className="p-2 border-none rounded-xl"
        type="date"
        id="dob"
        {...register("dob", { required: true })}
      />
      {errors.dob && <span className="text-red-500">Date of birth is required</span>}
    </div>
    <div className="flex flex-col gap-2">
      <label htmlFor="password " className="text-sm font-700 font-Lato">Password</label>
      <div className="relative bg-white rounded-xl ">
        <input
          type={inputType.newPassword}
          id="password"
          placeholder="Enter new password here"
          className="p-2 border-none rounded-xl w-full"
          {...register("newPassword", {
            required: true,
            minLength: 8,
            validate: (value) =>
              PASSWORD_REGEX.test(value) ||
              "Password must contain at least one uppercase letter, one lowercaseletter, one number, and one special character",
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
      <label htmlFor="confirmNewPassword" className="text-sm font-700 font-Lato">
        Confirm new password
      </label>
      <div className="relative bg-white rounded-xl">
        <input
          type={inputType.confirmNewPassword}
          placeholder="Enter new password here"
          className=" p-2 border-none rounded-xl w-full"
          {...register("confirmNewPassword", {
            required: true,
            validate: (value) => value === watch("newPassword"),
          })}
        />
        <img
          src={
            inputType.confirmNewPassword === "text" ? eyeIcon : eyeClosedIcon
          }
          alt="Show password"
          className="absolute right-2 w-5 h-5 cursor-pointer top-1/2 transform -translate-y-1/2 opacity-60"
          onClick={() =>
            setInputType((prev) => ({
              ...prev,
              confirmNewPassword:
                prev.confirmNewPassword === "text" ? "password" : "text",
            }))
          }
        />
      </div>
      {errors.confirmNewPassword &&
        errors.confirmNewPassword.type === "validate" && (
          <AppFormErrorLine message="Passwords do not match" />
        )}
    </div>
    <span className="text-center text-[10px]">
      By clicking on sign-up, you agree to java sports{" "}
      <Link to="/terms-and-conditions" className="text-red-500 ">
        Terms and Conditions of Use.
      </Link>
    </span>
    <button className="p-2 text-white bg-black rounded-3xl" type="submit">
      Create account
    </button>
    <span className="text-sm text-center ">
      Have an account?{" "}
      <Link to="/login" className="text-red-500">
        Log in
      </Link>
    </span>
  </form>

  );
};
export default Signup;
