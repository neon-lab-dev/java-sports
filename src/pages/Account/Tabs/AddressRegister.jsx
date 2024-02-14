import USER from "@/assets/mockData/user";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import checkboxUnchecked from "@/assets/icons/checkbox-unchecked.svg";
import checkboxChecked from "@/assets/icons/checkbox-checked.svg";
import toast from "react-hot-toast";
import SHIPPING_ADDRESSES from "@/assets/mockData/shippingAddress";

const AddressRegister = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { register, handleSubmit, getValues, setValue, watch, reset } =
    useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Address registered successfully");
    setSearchParams({ tab: "address-register", isEditing: "false" });
    reset();
  };

  const onReset = () => {
    toast.success("Address registration cancelled");
    setSearchParams({ tab: "address-register", isEditing: "false" });
  };

  const handleEditAddress = (id) => {
    const formData = SHIPPING_ADDRESSES.find((address) => address.id === id);
    reset(formData);
    //set form data
    Object.keys(formData).forEach((key) => {
      setValue(key, formData[key]);
    });
    setSearchParams({ tab: "address-register", isEditing: "true" });
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
              className="font-Lato font-600 text-blue"
            >
              Edit
            </button>
          </div>
          {Object.keys(address).map((key, i) => {
            if (key === "title" || key === "img") return null;
            return <span key={i}>{USER.shippingAddresses[0][key]}</span>;
          })}
          <div className="flex mt-4 sm:mt-6 sm:gap-6 flex-col sm:flex-row">
            <span>Phone: {USER.phone}</span>
            <span>Email: {USER.email}</span>
          </div>
        </div>
      ))}
      {searchParams.get("isEditing") != "true" ? (
        <button
          type="submit"
          className="rounded-lg px-4 py-2.5 bg-blue w-max text-white"
          onClick={() =>
            setSearchParams({ tab: "address-register", isEditing: "true" })
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
            <label htmlFor="name" className="font-600 text-lg">
              Full Name*
            </label>
            <input
              type="text"
              placeholder="Kabir Sah"
              className="bg-grey/2 px-4 py-3"
              {...register("name", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="font-600 text-lg">
              Phone
            </label>
            <input
              type="tel"
              placeholder=" +1 (555) 123-4567"
              className="bg-grey/2 px-4 py-3"
              {...register("phone", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-600 text-lg">
              Email*
            </label>
            <input
              type="email"
              placeholder="someone@gmail.com"
              className="bg-grey/2 px-4 py-3"
              {...register("email", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="addressLine1" className="font-600 text-lg">
              Address Line 1*
            </label>
            <input
              type="text"
              placeholder="123 Main Street"
              className="bg-grey/2 px-4 py-3"
              {...register("addressLine1", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="addressLine2" className="font-600 text-lg">
              Address Line 2*
            </label>
            <input
              type="text"
              placeholder="Apt 4B"
              className="bg-grey/2 px-4 py-3"
              {...register("addressLine2", { required: true })}
            />
          </div>
          <div className="flex justify-between flex-col md:flex-row">
            <div className="flex flex-col gap-1">
              <label htmlFor="sate" className="font-600 text-lg">
                State*
              </label>
              <input
                type="text"
                placeholder="Cityville, State 54321"
                className="bg-grey/2 px-4 py-3"
                {...register("state", { required: true })}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="city" className="font-600 text-lg">
                Town/City*
              </label>
              <input
                type="text"
                placeholder="Cityville, State 54321"
                className="bg-grey/2 px-4 py-3"
                {...register("city", { required: true })}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="pincode" className="font-600 text-lg">
                Pincode/ZIP*
              </label>
              <input
                type="text"
                placeholder="Cityville, State 54321"
                className="bg-grey/2 px-4 py-3"
                {...register("pincode", { required: true })}
              />
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
              {...register("landmark", { required: true })}
            />
          </div>
          <button
            type="button"
            onClick={() => {
              console.log(getValues("isPrimary"));
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
export default AddressRegister;
