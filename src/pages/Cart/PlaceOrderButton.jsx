import { Link } from "react-router-dom";

const PlaceOrderButton = () => {
  return (
    <Link
      to="/checkout"
      className="rounded text-center px-3 py-2  sm:p-3 w-full h-full mt-6 xl:mt-0 text-base sm:text-lg block uppercase font-600 min-w-40 bg-primary text-white xl:w-96 xl:ml-auto disabled:opacity-45 lg:max-w-none"
    >
      Place Order
    </Link>
  );
};
export default PlaceOrderButton;
