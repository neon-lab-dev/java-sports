// @ts-nocheck
import call from "@/assets/icons/Call.svg";
import clock from "@assets/icons/Clock.svg";
import email from "@/assets/icons/Email.svg";
import loaction from "@/assets/icons/Location on.svg";
import { useForm } from "react-hook-form";
import AppFormErrorLine from "@/components/reusable/AppFormErrorLine";
import { EMAIL_REGEX, PHONE_REGEX } from "@/assets/constants/regex";
import { useMutation } from "@tanstack/react-query";
import { contactUsApi } from "@/api/contact";
import Swal from "sweetalert2";

const contactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { isPending, mutate } = useMutation({
    mutationFn: contactUsApi,
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
      });
    },
    onSuccess: (data) => {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: data.message,
      });
      reset();
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <div className=" bg-white">
      <div className="flex justify-center p-6">
        <span className="text-4xl font-600">Contact US</span>
      </div>
      <div className="flex justify-center max-sm:flex-col p-10 max-sm:p-3">
        <div className="flex  flex-col bg-black gap-10 p-10">
          <span className="text-white text-2xl">Corprate Office</span>
          <div className="flex flex-col gap-20">
            <div className="flex">
              <img src={call} alt="call" />
              <div className="flex flex-col">
                <span className="text-white">+91 933 421 9079</span>
                <span className="text-white">+91 870 009 8127</span>
              </div>
            </div>
            <div className="flex">
              <img src={clock} alt="clock" />
              <span className="text-white">10am to 10pm, all days</span>
            </div>
            <div className="flex">
              <img src={email} alt="email" />
              <span className="text-white">service.javasports@gmail.com</span>
            </div>
            <div className="flex">
              <img src={loaction} alt="location" />
              <p className="text-white text-[12px]">
                Java Sports Pvt Ltd Ground & First Floor, Chak Bairiya,
                Karanpur, Illahibagh, <br />
                Near Illahibagh Petrol Pump, Patna Gaya Road Patna - 800007
                Bihar
              </p>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" bg-grey/1 py-8 px-16 max-sm:px-4 flex flex-col gap-5"
        >
          <span className="text-3xl font-500 ">Write to us</span>
          <div className="flex flex-col gap-2">
            <label htmlFor="user" className="text-sm font-700 font-Lato ">
              Name
            </label>
            <input
              className="p-2 border-none rounded-xl"
              type="text"
              placeholder="Enter Name"
              {...register("full_name", { required: true })}
            />
            {errors.full_name && (
              <AppFormErrorLine message="Name is required" />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="user" className="text-sm font-700 font-Lato ">
              Email
            </label>
            <input
              className=" pr-[200px] max-sm:pr-1 p-2 border-none rounded-xl"
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: true || "Email is required",
                validate: (value) => EMAIL_REGEX.test(value) || "Invalid email",
              })}
            />
            {errors.email && (
              <AppFormErrorLine message={errors.email.message} />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="user" className="text-sm font-700 font-Lato ">
              Phone
            </label>
            <input
              className="p-2  border-none rounded-xl"
              type="text"
              placeholder="Enter your phone number"
              {...register("phoneNo", {
                required: true || "Phone number is required",
                validate: (value) =>
                  PHONE_REGEX.test(value) || "Enter a valid indian number",
              })}
            />
            {errors.phoneNo && (
              <AppFormErrorLine message={errors.phoneNo.message} />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="user" className="text-sm font-700 font-Lato ">
              Message
            </label>
            <input
              className="p-2  border-none rounded-xl pb-40 "
              type="text"
              placeholder="Write your message here"
              {...register("message", { required: true })}
            />
          </div>
          {errors.message && <AppFormErrorLine message="Message is required" />}
          <div className="flex justify-center">
            <button className="bg-black text-white px-16 py-2 rounded-3xl">
              {isPending ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center">
        <span className="text-4xl font-700 p-6"> View On Map </span>
      </div>
      <div className="flex justify-center p-10">
        <div className="max-lg:hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.4767009195157!2d85.15455507485021!3d25.589071215717933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed589d3565c8c7%3A0xf197d8a4b0688b5d!2s90%20Feet%20Rd%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1708607935356!5m2!1sen!2sin"
            height="500"
            width="1000"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="JavaSport"
          />
        </div>
        <div className="lg:hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.4767009195157!2d85.15455507485021!3d25.589071215717933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed589d3565c8c7%3A0xf197d8a4b0688b5d!2s90%20Feet%20Rd%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1708607935356!5m2!1sen!2sin"
            height="300"
            width="300"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="JavaSport"
          />
        </div>
      </div>
    </div>
  );
};
{
  /* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.4767009195157!2d85.15455507485021!3d25.589071215717933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed589d3565c8c7%3A0xf197d8a4b0688b5d!2s90%20Feet%20Rd%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1708607935356!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */
}

export default contactUs;
