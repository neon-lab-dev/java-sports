import SHIPPING_ADDRESSES from "@/assets/mockData/shippingAddress";
import USER from "@/assets/mockData/user";

const RecentOrders = () => {
  const address = SHIPPING_ADDRESSES[0]; 

  return (
    <div className="flex flex-col gap-8 sm:gap-12 wrapper lg:w-full lg:m-0 max-w-5xl">
      {USER.recentOrders.map((order, i) => {
        return (
          <div
            key={order.id}
            className={`flex gap-3 w-full flex-col ${i !== USER.recentOrders.length - 1 ? "border-b-2 border-grey-light pb-6" : ""}`}
          >
            <div className="flex flex-col xs:flex-row justify-between items-start w-full">
              <div className="flex flex-col">
                <Text text="Date" subText={order.date} />
                <Text text="Order ID" subText={"#" + order.orderId} />
              </div>
              <Text text="Order Status" subText={order.status} />
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 shadow p-3 sm:p-5 rounded-lg">
              <div className="h-60  bg-grey/2 rounded-lg p-2 max-w-64 sm:w-64 lg:max-w-none lg:w-[400px] md:h-72">
                <img
                  src={order.img}
                  alt={order.product}
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col gap-4 sm:justify-between w-full">
                <div className="flex flex-col gap-1">
                  <Text text="Product" subText={order.product} />
                  <Text text="Quantity" subText={order.quantity} />
                  <Text
                    text="Total Price"
                    subText={order.total.currency + order.total.amount}
                  />
                  <div className="flex flex-col gap-0 rounded-lg mt-6">
                    <div className="flex gap-8 text-base sm:text-base mb-2">
                      <span className="font-Lato font-600">
                        {address.title}
                      </span>
                      <button className="font-Lato font-600 text-blue">
                        Edit
                      </button>
                    </div>
                    {Object.keys(address).map((key, i) => {
                      if (key === "title" || key === "img") return null;
                      return (
                        <span className="text-xs text-grey/6" key={i}>
                          {USER.shippingAddresses[0][key]}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <button className="rounded-lg px-6 py-1.5 w-max bg-primary bg-white border-2 border-grey-light self-end ">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default RecentOrders;

const Text = ({ text, subText }) => {
  return (
    <span className="font-600 text-lg sm:text-xl">
      {text}:{" "}
      <span className="text-grey/6 font-400 text-base sm:text-lg">
        {subText}
      </span>
    </span>
  );
};
