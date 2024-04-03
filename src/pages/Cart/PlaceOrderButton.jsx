import { getLocalStorage } from "@/utils/localStorage";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ReactGA from "react-ga";

const PlaceOrderButton = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handlePlaceOrder = () => {
    ReactGA.event({
      category: "Cart",
      action: "Clicked on Place Order",
    });
    if (isAuthenticated) {
      navigate("/checkout", {
        state: {
          orderItems: getLocalStorage("cartItems", []),
          from: "cart",
        },
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please login to place an order!",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login?redirect=/checkout");
        }
      });
    }
  };
  return (
    <button
      onClick={handlePlaceOrder}
      className="rounded text-center px-3 py-2  sm:p-3 w-full h-full mt-6 xl:mt-0 text-base sm:text-lg block uppercase font-600 min-w-40 bg-primary text-white  disabled:opacity-45 lg:max-w-none"
    >
      Place Order
    </button>
  );
};
export default PlaceOrderButton;
