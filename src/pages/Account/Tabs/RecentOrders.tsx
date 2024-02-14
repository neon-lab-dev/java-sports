import USER from "@/assets/mockData/user";
import { Link } from "react-router-dom";

const RecentOrders = () => {
  return (
    <div className="flex flex-col gap-6 wrapper lg:w-full lg:m-0">
      {USER.recentOrders.map((order, i) => (
        <OrderCard key={i} order={order} i={i} />
      ))}
    </div>
  );
};
export default RecentOrders;

const OrderCard = ({ order, i }) => {
  const btnClass = "px-6 py-3 border-2 border-neutral-black rounded-2xl";
  return (
    <div
      className={`flex flex-col gap-3 ${i === 0 ? "" : "border-t border-grey-light pt-4"}`}
    >
      {/* order details */}
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-2">
          <div>
            Date : <span className="text-grey-dark">{order.date}</span>
          </div>
          <div>
            Order Id : <span className="text-grey-dark">{order.orderId}</span>
          </div>
        </div>
        <div>
          Order Status : <span className="text-grey-dark">{order.status}</span>
        </div>
      </div>
      {/* order cards */}
      <div className="shadow border-grey-light border rounded-xl px-3 py-3 flex flex-col gap-3">
        <div
          style={{
            height: "200px",
            width: "174px",
          }}
          className="bg-grey/1 rounded-xl"
        >
          <img src={order.img} alt={order.product} className=" w-full h-full" />
        </div>
        <div>
          Product: <span className="text-grey-dark">{order.product}</span>
        </div>
        <div>
          Quantity: <span className="text-grey-dark">{order.quantity}</span>
        </div>
        <div>
          Total Price: <span className="text-grey-dark">{order.total}</span>
        </div>
        <div className="flex flex-col gap-0">
          <div className="flex gap-8 text-base sm:text-base 2xl:text-lg mb-3">
            <span className="font-Lato font-600">
              {USER.shippingAddresses[0].title}
            </span>
            <Link to="#" className="font-Lato font-600 text-blue">
              Edit
            </Link>
          </div>
          {Object.keys(USER.shippingAddresses[0]).map((key, i) => {
            if (key === "title" || key === "img") return null;
            return (
              <span key={i} className="text-grey-dark">
                {USER.shippingAddresses[0][key]}
              </span>
            );
          })}
        </div>
        <button className={btnClass}>Cancel</button>
      </div>
    </div>
  );
};
