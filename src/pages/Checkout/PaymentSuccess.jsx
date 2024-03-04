import { Link, useNavigate, useSearchParams } from "react-router-dom";
import NotFound from "../NotFound";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createOrder } from "@/api/orders";
import { useDispatch, useSelector } from "react-redux";
import { getLocalStorage } from "@/utils/localStorage";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { updateCartItemsCount } from "@/redux/slices/userSlice";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  if (!searchParams.get("reference")) return <NotFound />;
  // Redirect to 404 if no reference is found

  // If there are no items in the cart, show a message
  if (getLocalStorage("cartItems", []).length === 0) {
    return (
      <div className="bg-white py-10 h-80">
        <section className="wrapper flex items-center justify-center flex-col gap-4 h-full">
          <h1 className="text-2xl font-600 text-black">
            You have no items in your cart.
          </h1>
          <Link
            to="/"
            className="text-white font-500 hover:underline bg-primary/2 px-3 py-2 rounded-md"
          >
            Continue Shopping
          </Link>
        </section>
      </div>
    );
  }
  return <PaymentSuccessChild />;
};

const PaymentSuccessChild = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const orderData = {
    shippingInfo: getLocalStorage("deliveryAddress", {
      ...user.primaryaddress,
      pinCode: user.primaryaddress.pin_code.toString(),
      phoneNo: user.phoneNo.toString(),
    }), //get the delivery address from local storage or user's primary address
    orderItems: getLocalStorage("cartItems", []),
    itemsPrice: getLocalStorage("cartItems", [])
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toString(), //the total price of all items without coupn discount
    totalPrice: getLocalStorage("cartItems", [])
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toString(), //with coupn discount
    discount: "0",
    razorpay_payment_id: searchParams.get("reference"),
  };

  const { isLoading, data, isSuccess, isError, error } = useQuery({
    queryFn: () => createOrder(orderData),
    queryKey: ["createOrder", searchParams.get("reference")],
    //request only once when the component mounts
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (isSuccess) {
      localStorage.removeItem("cartItems");
      localStorage.removeItem("deliveryAddress");
      toast.success(data.message);
      navigate("/account?tab=recent-orders", { replace: true });
      dispatch(updateCartItemsCount());
    }
    if (isError) {
      toast.error(error);
    }
  }, [data, dispatch, error, isError, isSuccess, navigate]);

  return (
    <div className="bg-white py-10 h-80">
      <section className="wrapper flex items-center justify-center flex-col gap-4 h-full">
        {isLoading ? (
          <>
            <p className="text-gray-500 text-lg">Processing your payment...</p>
            <p className="text-lg">
              Do not refresh the page or go back, you will be redirected to your
              account page once the payment/order is processed.
            </p>
          </>
        ) : !isError ? (
          <>
            <h1 className="text-2xl font-600 text-black">
              Payment Successful!
            </h1>
            <Link
              to="/"
              className="text-white font-500 hover:underline bg-primary/2 px-3 py-2 rounded-md"
            >
              Continue Shopping
            </Link>
          </>
        ) : (
          <p className="text-red-500 text-lg">
            Order creation failed. Please try again or contact support.
          </p>
        )}
      </section>
    </div>
  );
};
export default PaymentSuccess;
