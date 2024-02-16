import { EMAIL_REGEX, PHONE_REGEX } from "@/assets/constants/regex";
import USER from "@/assets/mockData/user";
import { useForm } from "react-hook-form";
import toast, { ErrorIcon } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import ErrorLine from "./ErrorLine";

const AccountDetails = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const toggleIsEditing = (isEditing) => {
    setSearchParam({ tab: "account-details", isEditing: isEditing });
    Object.keys(USER).forEach((key) => {
      setValue(key, USER[key]);
    });
  };

  const onSubmit = (data) => {
    setSearchParam({ tab: "account-details", isEditing: "false" });
    reset();
    toast.success("Changes saved successfully");
  };

  const onReset = () => {
    setSearchParam({ tab: "account-details", isEditing: "false" });
  };

  return (
    <div className="flex flex-col gap-6 wrapper lg:w-auto lg:m-0 max-w-4xl">
      <div className=" shadow rounded-md p-4 sm:pr-12">
        <div className="flex gap-8 text-base sm:text-base 2xl:text-lg w-full justify-between">
          <span className="font-Lato font-600">Account Details</span>
          <button
            onClick={() => toggleIsEditing("true")}
            disabled={searchParam.get("isEditing") === "true"}
            className="font-Lato font-600 text-blue disabled:opacity-60"
          >
            Edit
          </button>
        </div>
        <div className="flex flex-col py-5">
          <div className="flex items-center justify-start gap-4 mb-3">
            <img
              src={USER.img}
              alt={USER.name}
              className="w-9 sm:w-14 rounded-full aspect-square"
            />
            <span className="text-2xl font-Lato md:text-4xl font-500">
              {USER.name}
            </span>
          </div>
          <span className="font-400">
            Email: <span className="text-grey-dark">{USER.email}</span>
          </span>
          <span className="font-400">
            Phone: <span className="text-grey-dark">{USER.phone}</span>
          </span>
        </div>
      </div>
      {searchParam.get("isEditing") === "true" && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-600 text-lg">
              Full Name*
            </label>
            <input
              type="text"
              placeholder="Kabir Sah"
              className="bg-grey/2 px-4 py-3"
              {...register("name", { required: true, minLength: 4 })}
            />
            {errors.name && errors.name.type === "minLength" && (
              <ErrorLine message="Name must be at least 3 characters long" />
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="font-600 text-lg">
              Phone*
            </label>
            <input
              type="tel"
              placeholder="+91 9876123786"
              className="bg-grey/2 px-4 py-3"
              {...register("phone", {
                //valid only for Indian phone numbers with country code
                required: true,
                validate: (value) => PHONE_REGEX.test(value) || "Invalid phone",
              })}
            />
            {errors.phone && <ErrorLine message={errors.phone.message} />}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-600 text-lg">
              Email*
            </label>
            <input
              type="email"
              placeholder="someone@gmail.com"
              className="bg-grey/2 px-4 py-3"
              {...register("email", {
                required: true,
                validate: (value) => EMAIL_REGEX.test(value) || "Invalid email",
              })}
            />
            {errors.email && <ErrorLine message={errors.email.message} />}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="image" className="font-600 text-lg">
              Upload Pic*
            </label>
            <input
              type="file"
              accept="image/*"
              className="bg-grey/2 px-4 py-3"
              {...register("image", { required: true })}
            />
            {errors.image && <ErrorLine message="Please upload an image" />}
          </div>
          <div className="flex gap-4 justify-center items-center sm:col-span-2 mt-4">
            <button
              type="reset"
              onClick={onReset}
              className="rounded px-3 py-1.5 w-max bg-white border-grey-light border-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded px-4 py-2 w-max bg-blue text-white"
            >
              Save changes
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
export default AccountDetails;
