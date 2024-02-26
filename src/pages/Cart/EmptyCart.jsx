import { Link } from "react-router-dom";
import emptyCartImg from "@/assets/icons/empty-carts.svg";
const EmptyCart = () => {
  return (
    <div className="bg-white">
      <div className="wrapper">
        <div className="flex flex-col items-center justify-center gap-4 my-28 w-full h-[300px] px-12">
          <img src={emptyCartImg} className="h-36" />
          <h2 className="font-Jakarta text-[32px] font-500">
            Your cart is empty
          </h2>
          <Link
            to="/checkout"
            className="rounded text-center px-3 py-2  sm:p-3 w-full mt-6 xl:mt-0 text-base sm:text-lg block uppercase font-600 min-w-40 bg-primary text-white  disabled:opacity-45 lg:max-w-60"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};
export default EmptyCart;
