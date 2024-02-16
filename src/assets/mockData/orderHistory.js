import batImg from "@assets/images/bats-img.svg";

const ORDER_HISTORY = [
  {
    id: 1,
    date: "15-02-2024", //dd-mm-yyyy
    orderStatus: "Delivered",
    orderId: "123456",
    quantity: 2,
    product: "Elite Series Kashmiri Willow Cricket Bat",
    price: {
      currency: "₹",
      amount: 149.99,
    },
    img: batImg,
  },
  {
    id: 1,
    date: "12-1-2024",
    orderStatus: "Delivered",
    orderId: "123456",
    quantity: 2,
    product: "Elite Series Kashmiri Willow Cricket Bat",
    price: {
      currency: "₹",
      amount: 149.99,
    },
    img: batImg,
  },
];

export default ORDER_HISTORY;
