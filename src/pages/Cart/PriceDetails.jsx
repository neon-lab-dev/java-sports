import PlaceOrderButton from "./PlaceOrderButton";

const PriceDetails = ({
  totalAmount,
  totalItems,
  finalAmount,
  discountAmount,
}) => {
  const flex =
    "flex justify-between text-base sm:text-lg gap-6 min-w-max w-full";
  return (
    <div className="shadow-md border border-gray-200 border-opacity-40 sticky xl:top-4 rounded-md px-4 py-5 sm:p-6 bg-white h-fit flex  flex-col gap-3 text-gray-700 sm:min-w-96 min-h-80 justify-center">
      <span className="uppercase text-xl font-600 text-black">
        Price Details
      </span>
      <hr />
      <div className={flex}>
        <span>Price ({totalItems} items)</span>
        <span>₹{totalAmount.toFixed(2)}</span>
      </div>
      <div className={flex}>
        <span>Discount</span>
        <span className="text-green-400 text-[17px]"> - ₹{discountAmount.toFixed(2)}</span>
      </div>
      <div className={flex}>
        <span>Delivery Charges</span>
        <span className="text-green-400 text-[17px]">Free</span>
      </div>
      <hr />
      <div className={flex + " font-700"}>
        <span>Total Amount</span>
        <span>₹{finalAmount.toFixed(2)}</span>
      </div>
      <hr />
      <span className="text-sm text-grey-dark">
        You will save ₹{discountAmount.toFixed(2)} on this order
      </span>
      <div className="">
        <PlaceOrderButton />
      </div>
    </div>
  );
};
export default PriceDetails;
