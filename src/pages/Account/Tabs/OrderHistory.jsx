import ORDER_HISTORY from "@/assets/mockData/orderHistory";
import { PDFDownloadLink } from "@react-pdf/renderer";
import InvoicePDF from "../InvoicePDF";

const OrderHistory = () => {
  return (
    <div className="flex flex-col gap-8 sm:gap-12 wrapper lg:w-full lg:m-0 max-w-5xl">
      {ORDER_HISTORY.map((order, i) => {
        return <OrderItem key={i} order={order} i={i} />;
      })}
    </div>
  );
};
export default OrderHistory;

const OrderItem = ({ order, i }) => {
  return (
    <div
      id={`product-${order.orderId}`}
      key={order.id}
      className={`flex gap-3 w-full flex-col ${i !== ORDER_HISTORY.length - 1 ? "border-b-2 border-grey-light pb-6" : ""}`}
    >
      <div className="flex flex-col xs:flex-row justify-between items-start w-full">
        <div className="flex flex-col">
          <Text text="Date" subText={order.date} />
          <Text text="Order ID" subText={"#" + order.orderId} />
        </div>
        <Text text="Order Status" subText={order.orderStatus} />
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 shadow p-3 rounded-md">
        <div className="h-60 bg-grey/2 rounded-lg p-2 lg:h-64 object-contain object-center max-w-64 sm:max-w-none md:w-96 lg:max-w-72 xl:max-w-none sm:w-64 lg:w-[400px]">
          <img src={order.img} alt={order.product} className="w-full h-full" />
        </div>
        <div className="flex flex-col gap-4 sm:justify-between xl:p-6 w-full">
          <div className="flex flex-col gap-1">
            <Text text="Product" subText={order.product} />
            <Text text="Quantity" subText={order.quantity} />
            <Text
              text="Price"
              subText={order.price.currency + order.price.amount}
            />
          </div>
          <div className="flex flex-col sm:flex-col xl:flex-row xs:flex-row gap-2 xl:justify-between w-full">
            <button className="rounded-lg px-4 py-2 w-max bg-blue text-white">
              <PDFDownloadLink
                document={<InvoicePDF data={JSON.stringify(order, null, 2)} />}
                fileName={`invoice-${order.id}.pdf`}
              >
                {({ loading }) => (loading ? "Preparing..." : "Download Invoice")}
              </PDFDownloadLink>
            </button>
            <button className="rounded-lg px-3 py-1.5 w-max min-w-40 bg-primary text-white ">
              Reorder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

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
