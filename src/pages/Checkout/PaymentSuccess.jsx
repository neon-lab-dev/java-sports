import { Link, useNavigate, useSearchParams } from "react-router-dom";
import NotFound from "../NotFound";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createOrder } from "@/api/orders";
import { useSelector } from "react-redux";
import { getLocalStorage } from "@/utils/localStorage";
import { useEffect } from "react";
import toast from "react-hot-toast";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  if (!searchParams.get("reference")) return <NotFound />;
  // Redirect to 404 if no reference is found
  return <PaymentSuccessChild />;
};

const PaymentSuccessChild = () => {
  const [searchParams] = useSearchParams();
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

  const { isLoading, data, isSuccess } = useQuery({
    queryFn: () => createOrder(orderData),
    queryKey: ["createOrder", searchParams.get("reference")],
    //request only once when the component mounts
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (isSuccess) {
      localStorage.removeItem("cartItems");
      toast.success(data.message);
      navigate("/account?tab=recent-orders", { replace: true });
    }
  }, [data, isSuccess, navigate]);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="bg-white py-10">
      <section className="wrapper flex items-center justify-center">
        <Link
          to="/"
          className="text-white font-500 hover:underline bg-primary/2 px-3 py-2 rounded-md"
        >
          Continue Shopping
        </Link>
      </section>
    </div>
  );
};
export default PaymentSuccess;
