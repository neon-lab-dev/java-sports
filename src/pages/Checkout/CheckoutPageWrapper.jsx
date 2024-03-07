import { Navigate, useLocation } from "react-router-dom";
import Checkout from ".";

const CheckoutPageWrapper = () => {
  const { state } = useLocation();
  if (!state) {
    return <Navigate to="/cart" />;
  }
  return <Checkout />;
};
export default CheckoutPageWrapper;
