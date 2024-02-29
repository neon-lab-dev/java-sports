import { EMAIL_REGEX, PHONE_REGEX } from "@/assets/constants/regex";
import AppFormErrorLine from "@/components/reusable/AppFormErrorLine";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import avatar from "@/assets/images/avatar.jpg";
import { getUser, updateUserDetails } from "@/api/user";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const AccountDetails = () => {
  const { user } = useSelector((state) => state.user);
  const [searchParam, setSearchParam] = useSearchParams();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const toggleIsEditing = (isEditing) => {
    setSearchParam({ tab: "account-details", isEditing: isEditing });
    setValue("full_name", user.full_name);
    setValue("email", user.email);
    setValue("phoneNo", user.phoneNo);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: (data) => updateUserDetails(data),
    onError: (error) => {
      toast.error(error);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      setSearchParam({ tab: "account-details", isEditing: "false" });
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      reset();
    },
  });

  const onSubmit = (data) => {
    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }

    if (selectedAvatar) {
      formData.append("file", selectedAvatar);
    }
    mutate(formData);
  };

  useEffect(() => {
    console.log(selectedAvatar);
  }, [selectedAvatar]);

  const onReset = () => {
    setSearchParam({ tab: "account-details", isEditing: "false" });
  };

  return (
    <div className="flex flex-col gap-6 wrapper lg:w-auto lg:m-0 max-w-4xl">
      <div className=" card-shadow rounded-md p-4 sm:pr-12">
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
              src={user?.avatar?.url || avatar}
              className="w-9 sm:w-14 rounded-full aspect-square"
            />
            <span className="text-2xl font-Lato md:text-4xl font-500">
              {user.full_name}
            </span>
          </div>
          <span className="font-400">
            Email: <span className="text-grey-dark">{user.email}</span>
          </span>
          <span className="font-400">
            Phone: <span className="text-grey-dark">{user.phoneNo}</span>
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
              {...register("full_name", { required: false, minLength: 4 })}
            />
            {errors.name && errors.name.type === "minLength" && (
              <AppFormErrorLine message="Name must be at least 3 characters long" />
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
              {...register("phoneNo", {
                //valid only for Indian phone numbers with country code
                required: false,
                validate: (value) => PHONE_REGEX.test(value) || "Invalid phone",
              })}
            />
            {errors.phone && (
              <AppFormErrorLine message={errors.phone.message} />
            )}
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
                required: false,
                validate: (value) => EMAIL_REGEX.test(value) || "Invalid email",
              })}
            />
            {errors.email && (
              <AppFormErrorLine message={errors.email.message} />
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="image" className="font-600 text-lg">
              Upload Pic*
            </label>
            <input
              type="file"
              accept="image/*"
              className="bg-grey/2 px-4 py-3"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setSelectedAvatar(file);
                  };
                  reader.readAsDataURL(file);
                } else {
                  setSelectedAvatar(null);
                }
              }}
            />
            {errors.image && (
              <AppFormErrorLine message="Please upload an image" />
            )}
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
              {isPending ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
export default AccountDetails;
