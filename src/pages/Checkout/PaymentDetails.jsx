import API from "@/api";
import { handleCheckout, handleGetApiKey } from "@/api/orders";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const PaymentDetails = ({
  totalAmount,
  totalItems,
  finalAmount,
  discountAmount,
  deliveryAddress,
  orderItems,
}) => {
  const { user } = useSelector((state) => state.user);
  const [isProcessing, setIsProcessing] = useState(false);
  const flex =
    "flex justify-between text-base sm:text-lg gap-6 min-w-max w-full";

  const checkoutHandler = async () => {
    if (isProcessing) return toast.error("Processing your request");
    setIsProcessing(true);
    try {
      //store the order details in local storage
      localStorage.removeItem("orderDetails");
      setLocalStorage("orderDetails", {
        deliveryAddress: {
          ...user[deliveryAddress],
          phoneNo: user.phoneNo,
          pinCode: user[deliveryAddress]?.pin_code,
        },
        orderItems: orderItems,
      });

      //proceed to payment
      const key = await handleGetApiKey();
      const res = await handleCheckout(finalAmount);
      const options = {
        key: key,
        amount: res.order.amount,
        currency: "INR",
        name: "Java Sports",
        description: "",
        image: "java-sports.svg",
        order_id: res.order.id,
        callback_url: API.paymentVerification,
        prefill: {
          name: user.full_name,
          email: user.email,
          contact: user.phoneNo,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#121212",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="shadow-md border border-gray-200 border-opacity-40 sticky xl:top-4 rounded-md px-4 py-5 sm:p-6 bg-white h-fit flex flex-col gap-3 text-gray-700 sm:min-w-96 min-h-80 justify-center">
      <span className="uppercase text-xl font-600 text-black">
        Price Details
      </span>
      <hr />
      <div className={flex}>
        <span>Price ({totalItems} items)</span>
        <span>₹{totalAmount}</span>
      </div>
      <div className={flex}>
        <span>Discount</span>
        <span className="text-green-400 text-[17px]"> - ₹{discountAmount}</span>
      </div>
      <div className={flex}>
        <span>Delivery Charges</span>
        <span className="text-green-400 text-[17px]">Free</span>
      </div>
      <hr />
      <div className={flex + " font-700"}>
        <span>Total Amount</span>
        <span>₹{finalAmount}</span>
      </div>
      <hr />
      <span className="text-sm text-grey-dark">
        You will save ₹{discountAmount} on this order
      </span>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col xs:flex-row">
          <input
            className="border rounded-t-md xs:rounded-l-md xs:rounded-tr-none py-2 flex-grow px-3 focus:outline-grey/2 text-gray-500 sm:text-lg"
            type="text"
            placeholder="Enter the Coupon code"
            id="coupon"
          />
          <button className="bg-grey/1 font-500 px-6 py-1">Apply</button>
        </div>
        <button
          onClick={checkoutHandler}
          className="bg-red-500 text-lg py-2 text-white rounded-[5px] font-500"
        >
          {isProcessing ? "Processing..." : "Proceed to Pay"}
        </button>
      </div>
    </div>
  );
};
export default PaymentDetails;
