import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 my-28 w-full">
      <h2 className="font-Jakarta text-[32px] font-500">Your cart is empty</h2>
      <Link
        to="/"
        className="text-center rounded px-12 py-3 text-lg  min-w-40 bg-blue-400 text-white xl:w-96 disabled:opacity-45 max-w-72 "
      >
        Continue Shopping
      </Link>
    </div>
  );
};
export default EmptyCart;
