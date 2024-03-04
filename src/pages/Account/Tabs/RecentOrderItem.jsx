import Text from "../Text";

const RecentOrderItem = ({ order, isLastItem }) => {
  return (
    <div
      id={`product-${order._id}`}
      key={order._id}
      className={`flex gap-3 w-full flex-col ${!isLastItem ? "border-b-2 border-grey-light pb-6" : ""}`}
    >
      <div className="flex flex-col xs:flex-row justify-between items-start w-full">
        <div className="flex flex-col">
          <Text
            text="Date"
            subText={new Date(order.createdAt).toLocaleDateString()}
          />
          <Text text="Order ID" subText={"#" + order._id} />
        </div>
        <Text text="Order Status" subText={order.orderStatus} />
      </div>
      <div className="flex flex-col gap-3 card-shadow rounded-md p-3 px-4">
        <div className="flex gap-6 overflow-x-scroll overflow-hidden pb-3 max-w-full">
          {order.orderItems &&
            order.orderItems.map((item, i) => {
              return (
                <div key={item._id} className="flex flex-col">
                  <div className="h-52 w-48 bg-grey/2 rounded-lg p-2 object-contain object-center sm:max-w-none">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <Text text="Product" subText={item?.name} />
                    <Text text="Quantity" subText={item?.quantity} />
                    <Text text="Price" subText={"₹" + item?.price} />
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex flex-col sm:flex-col xl:flex-row xs:flex-row gap-2 xl:justify-end w-full">
          <button
            // onClick={() => handleCancelOrder(order.orderId)}
            className="rounded-lg px-6 py-1.5 w-max bg-primary bg-white border-2 border-grey-light self-end "
          >
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentOrderItem;
