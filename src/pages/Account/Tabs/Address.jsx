import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import checkboxUnchecked from "@/assets/icons/checkbox-unchecked.svg";
import checkboxChecked from "@/assets/icons/checkbox-checked.svg";
import toast from "react-hot-toast";
import AppFormErrorLine from "@/components/reusable/AppFormErrorLine";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUser, updateUserAddress } from "@/api/user";
import { useSelector } from "react-redux";
import noAddress from "@/assets/images/no-address.jpg";
import { useState } from "react";

const Address = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const queryClient = useQueryClient();
  const { user } = useSelector((state) => state.user);
  const { mutate, isPending } = useMutation({
    mutationFn: (data) => updateUserAddress(data),
    onError: (error) => {
      toast.error(error);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      setSearchParams({ tab: "addresses", isEditing: "false" });
      setEditKey(null);
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      reset();
    },
  });
  const [editKey, setEditKey] = useState(null);

  const onSubmit = (data) => {
    let key = editKey;
    if (!key) {
      if (!user.primaryaddress) key = "primaryaddress";
      else if (!user.secondaryaddress) key = "secondaryaddress";
      else if (!user.thirdaddress) key = "thirdaddress";
    }

    mutate({ [key]: data });
  };

  const onReset = () => {
    setSearchParams({ tab: "addresses", isEditing: "false" });
    reset();
  };

  const handleEditAddress = (id) => {
    const formData = user[id];
    setEditKey(id);
    reset();
    //set form data
    Object.keys(formData).forEach((key) => {
      setValue(key, formData[key]);
    });
    setSearchParams({ tab: "addresses", isEditing: "true" });
    //todo focus on top of the form and scroll to it
  };

  return (
    <div className="flex flex-col gap-3 max-w-2xl wrapper lg:m-0 lg:w-full">
      {user.primaryaddress && (
        <AddressCard
          address={user.primaryaddress}
          searchParams={searchParams}
          handleEditAddress={() => handleEditAddress("primaryaddress")}
          title="Shipping Address 1"
        />
      )}
      {user.secondaryaddress && (
        <AddressCard
          address={user.secondaryaddress}
          searchParams={searchParams}
          handleEditAddress={() => handleEditAddress("secondaryaddress")}
          title="Shipping Address 2"
        />
      )}
      {user.thirdaddress && (
        <AddressCard
          address={user.thirdaddress}
          searchParams={searchParams}
          handleEditAddress={() => handleEditAddress("thirdaddress")}
          title="Shipping Address 3"
        />
      )}
      {!(user.primaryaddress || user.secondaryaddress || user.thirdaddress) && (
        <div className="flex flex-col items-center justify-center gap-4 w-full h-full">
          <img src={noAddress} className="h-36" />
          <h2 className="font-Jakarta font-500 text-2xl xs:text-2xl">
            You have not added any addresses yet!
          </h2>
        </div>
      )}
      {searchParams.get("isEditing") != "true" ? (
        <>
          {
            //disable add new address button if user has 3 addresses
            !(
              user.primaryaddress &&
              user.secondaryaddress &&
              user.thirdaddress
            ) && (
              <button
                type="submit"
                className="rounded-lg px-4 py-2.5 bg-blue w-max text-white"
                onClick={() =>
                  setSearchParams({ tab: "addresses", isEditing: "true" })
                }
              >
                Add a new address
              </button>
            )
          }
        </>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 mt-8"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="landmark" className="font-600 text-lg">
              Landmark*
            </label>
            <input
              type="text"
              placeholder="Near Sony World Signal"
              className="bg-grey/2 px-4 py-3"
              {...register("landmark", {
                required: true,
                validate: (value) =>
                  value.trim().length > 4 || "Please enter a valid landmark",
              })}
            />
            {errors.landmark && (
              <AppFormErrorLine message={errors.landmark.message} />
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="addressLine2" className="font-600 text-lg">
              Address*
            </label>
            <input
              type="text"
              placeholder="123, MG Road"
              className="bg-grey/2 px-4 py-3"
              {...register("address", {
                required: true,
                validate: (value) =>
                  value.trim().length > 4 || "Please enter a valid address",
              })}
            />
            {errors.address && (
              <AppFormErrorLine message={errors.address.message} />
            )}
          </div>
          <div className="flex justify-between flex-col md:flex-row gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="sate" className="font-600 text-lg">
                State*
              </label>
              <input
                type="text"
                placeholder="Karnataka"
                className="bg-grey/2 px-4 py-3"
                {...register("state", {
                  required: true,
                  validate: (value) =>
                    value.trim().length > 4 || "Please enter a valid state",
                })}
              />
              {errors.state && (
                <AppFormErrorLine message={errors.state.message} />
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="city" className="font-600 text-lg">
                Town/City*
              </label>
              <input
                type="text"
                placeholder="Bengaluru"
                className="bg-grey/2 px-4 py-3"
                {...register("city", {
                  required: true,
                  validate: (value) =>
                    value.trim().length > 4 || "Please enter a valid city",
                })}
              />
              {errors.city && (
                <AppFormErrorLine message={errors.city.message} />
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="pin_code" className="font-600 text-lg">
                Pincode/ZIP*
              </label>
              <input
                type="text"
                placeholder="560001"
                className="bg-grey/2 px-4 py-3"
                {...register("pin_code", {
                  required: true,
                  validate: (value) =>
                    value.trim().length > 4 || "Please enter a valid pincode",
                })}
              />
              {errors.pincode && (
                <AppFormErrorLine message={errors.pincode.message} />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="rounded-lg px-4 py-2 w-max bg-blue text-white mt-2"
          >
            {isPending ? "Updating..." : "Update the Address"}
          </button>
          <button
            type="reset"
            onClick={onReset}
            className="rounded-lg px-3 py-1.5 w-max min-w-40 bg-white border-grey-light border-2 mt-4"
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};
export default Address;

const AddressCard = ({ address, searchParams, handleEditAddress, title }) => {
  return (
    <div className="flex flex-col gap-0 card-shadow p-4 rounded-lg">
      <div className="flex gap-8 justify-between text-base sm:text-base 2xl:text-lg mb-3">
        <span className="font-Lato font-600">{title}</span>
        <button
          onClick={() => handleEditAddress()}
          className="font-Lato font-600 text-blue disabled:opacity-40"
          disabled={searchParams.get("isEditing") === "true"}
        >
          Edit
        </button>
      </div>
      <span>{address.landmark}</span>
      <span>{address.address}</span>
      <span>{address.city}</span>
      <span>{address.state}</span>
      <span>{address.pin_code}</span>
    </div>
  );
};
