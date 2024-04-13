import { calculatePercentage } from "@/utils/calculatePercentage";
import { getPriceAfterDiscount } from "@/utils/getPriceAfterDiscount";

const OrderItem = ({ item, response }) => {
  const { data, isLoading, isError } = response;

  if (isLoading) return null;
  if (isError) return null;

  return (
    <div className="flex flex-col sm:flex-row gap-6 border p-3 rounded-md w-full">
      <div className="h-full flex items-center justify-center bg-grey/1 rounded-lg p-2 object-contain object-center w-fit group">
        <img
          src={data.product.images[0].url}
          alt={data.product.name}
          className="w-52 object-contain object-center"
        />
      </div>
      <div className="flex flex-col gap-4 relative">
        <h1 className="text-xl font-[600]">{data.product.name}</h1>
        <div className="flex flex-col gap-1 text-base sm:text-lg">
          <span className="text-primary text-xs sm:text-sm font-500">
            Special Price{" "}
          </span>
          <div className="flex gap-3 items-center">
            <span className="text-neutral-black text-xl font-500">
              ₹
              {getPriceAfterDiscount(
                data.product.baseprice,
                data.product.discountedpercent
              )}
            </span>
            <span className="text-[#999999] line-through">
              ₹{data.product.baseprice}
            </span>
            <span className="text-[#00B553] font-500">
              {data.product.discountedpercent ?? 0}% off
            </span>
          </div>
        </div>
        <hr />
        <div className="flex gap-2 sm:gap-6">
          <div className="font-[600] text-lg flex flex-col gap-2">
            <span>Quantity</span>
            <div className="flex gap-3 flex-wrap">
              <span className="px-4 py-1 border-2 border-[#E4E4E4] rounded-md font-500 text-black">
                {item.quantity}
              </span>
            </div>
          </div>
          {item.size && (
            <>
              <hr className="h-[80%] w-[1.5px] bg-grey-light opacity-50 self-end hidden md:block" />
              <div className="flex flex-col gap-1 sm:gap-2">
                <span className="font-500 text-neutral-black text-lg">
                  Size
                </span>
                <div className="flex gap-3 flex-wrap">
                  <span className="px-4 py-1 border-2 border-[#E4E4E4] rounded-md font-500 text-black">
                    {item.size}
                  </span>
                </div>
              </div>
            </>
          )}
          {item.color && (
            <>
              <hr className="h-[80%] w-[1.5px] bg-grey-light opacity-50 self-end hidden md:block" />
              <hr className=" bg-grey-light opacity-50 md:hidden" />
              <div className="font-[600] text-lg flex flex-col gap-2">
                <span>Color</span>
                <div className="flex gap-3">
                  <span
                    className="w-8 h-8 rounded-full border-[#E4E4E4] border-[2.5px]"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
