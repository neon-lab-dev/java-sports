import { PDFDownloadLink } from "@react-pdf/renderer";
import Text from "../Text";
import InvoicePDF from "../InvoicePDF";
import { useDispatch, useSelector } from "react-redux";
import { useQueries } from "@tanstack/react-query";
import { getAProduct } from "@/api/products";
import Swal from "sweetalert2";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";
import { useNavigate } from "react-router-dom";
import { updateCartItemsCount } from "@/redux/slices/userSlice";
import toast from "react-hot-toast";
import ReactGA from "react-ga";

const OrderItem = ({ order, isLastItem }) => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const res = useQueries({
    queries: order.orderItems.map((item) => {
      return {
        queryKey: ["product", item.product],
        queryFn: () => getAProduct(item.product),
      };
    }),
  });

  const handleReorder = () => {
    Swal.fire({
      title: "Reorder?",
      text: "Do you want to add all the items to the cart or reorder the items directly?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Add to cart!",
      cancelButtonText: "Reorder",
      showCloseButton: true,
    }).then((result) => {
      //if any of the product is not fetched successfully
      if (!res.every((item) => item.isSuccess)) {
        return toast.error("An error occurred while adding to cart");
      }
      if (result.isConfirmed) {
        const oldItems = getLocalStorage("cartItems", []);
        //remove the product from old items if it exists in order items
        const newItems = oldItems.filter((item) => {
          return !order.orderItems.some(
            (orderItem) => orderItem.product === item.product
          );
        });
        //add the new items to the cart

        ReactGA.event({
          category: "Cart Items",
          action: `Added ${order.orderItems.length} items to cart from order with id ${order._id}`,
        });

        const items = [
          ...newItems,
          ...order.orderItems.map((item, i) => {
            return {
              basePrice: res[i].data?.product?.baseprice,
              color: item.color,
              id: item.product,
              image: item.image,
              name: item.name,
              price: res[i].data?.product?.discountedprice,
              product: item.product,
              quantity: item.quantity,
              size: item.size,
            };
          }),
        ];
        setLocalStorage("cartItems", items);
        dispatch(updateCartItemsCount());
        Swal.fire({
          title: "Added to cart!",
          text: "All the items have been added to the cart!",
          icon: "success",
          showCloseButton: true,
          confirmButtonText: "Go to cart",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/cart");
          }
        });
      } else if (
        result.isDismissed &&
        result.dismiss === Swal.DismissReason.cancel
      ) {
        //navigate to checkout page with the order items
        navigate("/checkout", {
          state: {
            orderItems: order.orderItems.map((item, i) => {
              return {
                basePrice: res[i].data?.product?.baseprice,
                color: item.color,
                id: item.product,
                image: item.image,
                name: item.name,
                price: res[i].data?.product?.discountedprice,
                product: item.product,
                quantity: item.quantity,
                size: item.size,
              };
            }),
            from: "reorder",
          },
        });
        ReactGA.event({
          category: "Cart Items",
          action: `Reordered ${order.orderItems.length} items from order with id ${order._id}`,
        });
      }
    });
  };

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
            order.orderItems.map((item) => {
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
            onClick={() => {
              ReactGA.event({
                category: "Invoice",
                action: `Downloaded invoice for order with id ${order._id}`,
              });
            }}
            className="rounded-lg px-4 py-2 w-max bg-blue text-white"
          >
            <PDFDownloadLink
              document={<InvoicePDF data={order} user={user} />}
              fileName={`invoice-${order._id}.pdf`}
            >
              {({ loading }) => (loading ? "Preparing..." : "Download Invoice")}
            </PDFDownloadLink>
          </button>
          <button
            onClick={handleReorder}
            className="rounded-lg px-3 py-1.5 w-max min-w-40 bg-primary text-white "
          >
            Reorder
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
