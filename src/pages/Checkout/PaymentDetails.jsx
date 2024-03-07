import API from "@/api";
import { applyCoupon, handleCheckout, handleGetApiKey } from "@/api/orders";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MoonLoader, PulseLoader, SyncLoader } from "react-spinners";
import Swal from "sweetalert2";

const PaymentDetails = ({
  totalAmount,
  totalItems,
  finalAmount,
  discountAmount,
  deliveryAddress,
  orderItems,
  isSomeItemOutOfStock,
}) => {
  const navigate = useNavigate();
  const [coupon, setCoupon] = useState({
    code: "",
    isCouponApplied: false,
  });
  const [searchParams] = useSearchParams();
  const { user } = useSelector((state) => state.user);
  const [isProcessing, setIsProcessing] = useState(false);
  const flex =
    "flex justify-between text-base sm:text-lg gap-6 min-w-max w-full";

  const { mutate, isPending, data } = useMutation({
    mutationFn: (coupon) => applyCoupon(coupon),
    onError: (error) => {
      toast.error(error);
    },
    onSuccess: (data) => {
      setCoupon((prev) => ({ ...prev, isCouponApplied: true }));
      toast.success("Coupon Applied Successfully, you saved ₹" + data.discount);
    },
  });

  const checkoutHandler = async () => {
    if (isProcessing) return toast.error("Processing your request");
    if (isSomeItemOutOfStock)
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Some items are out of stock! Please remove them and try again",
        confirmButtonText: "Go to Cart",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/cart");
        }
      });
    if (!(user.primaryaddress || user.secondaryaddress || user.thirdaddress)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please add a delivery address",
        confirmButtonText: "Add Address",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/account?tab=addresses");
        }
      });
    }
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
        isBuyNow: searchParams.get("buyNow") === "true",
        coupon: {
          isCouponApplied: coupon.isCouponApplied,
          code: coupon.code,
          discount: data?.discount || 0,
        },
      });

      //proceed to payment
      const key = await handleGetApiKey();
      const res = await handleCheckout(
        finalAmount - (coupon.isCouponApplied ? data.discount : 0)
      );
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
        modal: {
          ondismiss: function () {
            localStorage.removeItem("orderDetails");
            setIsProcessing(false);
            toast.error("Payment Cancelled");
          },
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
      {coupon.isCouponApplied && (
        <div className={flex}>
          <span>Coupon</span>
          <span className="text-green-400 text-[17px]">
            {" "}
            - ₹{data.discount}
          </span>
        </div>
      )}
      <div className={flex}>
        <span>Delivery Charges</span>
        <span className="text-green-400 text-[17px]">Free</span>
      </div>
      <hr />
      <div className={flex + " font-700"}>
        <span>Total Amount</span>
        <span>
          ₹{coupon.isCouponApplied ? finalAmount - data.discount : finalAmount}
        </span>
      </div>
      <hr />
      <span className="text-sm text-grey-dark">
        You will save ₹{" "}
        {discountAmount + (coupon.isCouponApplied ? data.discount : 0)} on this
        order
      </span>
      <div className="flex flex-col gap-2">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (coupon.code.trim() === "") return;
            mutate(coupon.code.trim());
          }}
          className="flex flex-col xs:flex-row"
        >
          <input
            className="border rounded-t-md xs:rounded-l-md xs:rounded-tr-none py-2 flex-grow px-3 focus:outline-grey/2 text-gray-500 sm:text-lg"
            type="text"
            placeholder="Enter the Coupon code"
            value={coupon.code}
            onChange={(e) =>
              setCoupon({ ...coupon, code: e.target.value.toUpperCase() })
            }
            disabled={coupon.isCouponApplied || isPending}
          />
          <button
            disabled={
              coupon.isCouponApplied || isPending || coupon.code.trim() === ""
            }
            className="bg-grey/1 font-500 px-6 py-1"
          >
            {coupon.isCouponApplied ? (
              "Applied"
            ) : isPending ? (
              <PulseLoader size={8} color="#121212" />
            ) : (
              "Apply"
            )}
          </button>
        </form>
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
