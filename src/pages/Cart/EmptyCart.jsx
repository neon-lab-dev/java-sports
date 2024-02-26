import { Link } from "react-router-dom";
import emptyCartImg from "@/assets/icons/empty-carts.svg";
const EmptyCart = () => {
  return (
    <div className="bg-white">
      <div className="wrapper">
        <div className="flex flex-col items-center justify-center gap-4 w-full h-[400px]">
          <img src={emptyCartImg} className="h-36" />
          <h2 className="font-Jakarta font-500 text-2xl xs:text-2xl">
            Your cart is empty
          </h2>
          <Link
            to="/"
            className="rounded text-center px-3 py-2 sm:p-3 w-full text-base sm:text-lg block uppercase font-600 min-w-40 bg-primary text-white lg:mt-4 xs:max-w-60"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};
export default EmptyCart;
