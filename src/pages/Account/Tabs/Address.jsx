import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import checkboxUnchecked from "@/assets/icons/checkbox-unchecked.svg";
import checkboxChecked from "@/assets/icons/checkbox-checked.svg";
import toast from "react-hot-toast";
import SHIPPING_ADDRESSES from "@/assets/mockData/shippingAddress";
import AppFormErrorLine from "@/components/reusable/AppFormErrorLine";

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
  const onSubmit = (data) => {
    toast.success("Address registered successfully");
    setSearchParams({ tab: "addresses", isEditing: "false" });
    reset();
  };

  const onReset = () => {
    setSearchParams({ tab: "addresses", isEditing: "false" });
    reset();
  };

  const handleEditAddress = (id) => {
    const formData = SHIPPING_ADDRESSES.find((address) => address.id === id);
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
      {SHIPPING_ADDRESSES.map((address, i) => (
        <div key={i} className="flex flex-col gap-0 shadow p-4 rounded-lg">
          <div className="flex gap-8 justify-between text-base sm:text-base 2xl:text-lg mb-3">
            <span className="font-Lato font-600">{address.title}</span>
            <button
              onClick={() => handleEditAddress(address.id)}
              className="font-Lato font-600 text-blue disabled:opacity-40"
              disabled={searchParams.get("isEditing") === "true"}
            >
              Edit
            </button>
          </div>
          {Object.keys(address).map((key, i) => {
            if (["title", "img", "id"].includes(key)) return null;
            return <span key={i}>{address[key]}</span>;
          })}
        </div>
      ))}
      {searchParams.get("isEditing") != "true" ? (
        <button
          type="submit"
          className="rounded-lg px-4 py-2.5 bg-blue w-max text-white"
          onClick={() =>
            setSearchParams({ tab: "addresses", isEditing: "true" })
          }
        >
          Add a new address
        </button>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 mt-8"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="addressLine1" className="font-600 text-lg">
              Address Line 1*
            </label>
            <input
              type="text"
              placeholder="123, MG Road"
              className="bg-grey/2 px-4 py-3"
              {...register("addressLine1", {
                required: true,
                validate: (value) =>
                  value.trim().length > 4 || "Please enter a valid address",
              })}
            />
            {errors.addressLine1 && (
              <AppFormErrorLine message={errors.addressLine1.message} />
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="addressLine2" className="font-600 text-lg">
              Address Line 2*
            </label>
            <input
              type="text"
              placeholder="Apt 4B"
              className="bg-grey/2 px-4 py-3"
              {...register("addressLine2", {
                required: true,
                validate: (value) =>
                  value.trim().length > 4 || "Please enter a valid address",
              })}
            />
            {errors.addressLine2 && (
              <AppFormErrorLine message={errors.addressLine2.message} />
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
              <label htmlFor="pincode" className="font-600 text-lg">
                Pincode/ZIP*
              </label>
              <input
                type="text"
                placeholder="560001"
                className="bg-grey/2 px-4 py-3"
                {...register("pincode", {
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
          <div className="flex flex-col gap-1">
            <label htmlFor="landmark" className="font-600 text-lg">
              Landmark*
            </label>
            <input
              type="text"
              placeholder="Apt 4B"
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
          <button
            type="button"
            onClick={() => {
              setValue("isPrimary", !getValues("isPrimary"));
            }}
            className="flex gap-3 items-center cursor-pointer"
          >
            <img
              src={watch("isPrimary") ? checkboxChecked : checkboxUnchecked}
              alt="checked"
              className="w-4"
            />
            Set as primary address
          </button>
          <button
            type="submit"
            className="rounded-lg px-4 py-2 w-max bg-blue text-white"
          >
            Update the Address
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
