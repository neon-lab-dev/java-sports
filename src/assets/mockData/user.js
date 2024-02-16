// @ts-ignore
import userImg from "@assets/images/user.svg";
import batImg from "@assets/images/bats-img.svg";
const USER = {
  name: "Kabir Sah",
  email: "someone@gmail.com",
  phone: "+919876123786",
  img: userImg,
  recentOrders: [
    {
      orderId: "123456",
      date: "15-02-2024",
      total: {
        amount: 5000,
        currency: "₹",
      },
      status: "Ordered",
      quantity: 1,
      img: batImg,
      product: "Elite Series Kashmiri Willow Cricket Bat",
    },
    {
      orderId: "163543",
      date: "12-12-2024",
      total: {
        amount: 5000,
        currency: "₹",
      },
      status: "Ordered",
      quantity: 1,
      img: batImg,
      product: "Elite Series Kashmiri Willow Cricket Bat",
    },
  ],
  shippingAddresses: [
    {
      title: "Default Shipping Address",
      name: "Kabir Sah",
      addressLine1: "123 Main Street",
      addressLine2: "Apt 4B",
      city: "Cityville",
      state: "State 54321",
      country: "United States",
      isDefault: true,
    },
    {
      title: "Shipping Address 1",
      name: "Kabir Sah",
      addressLine1: "123 Main Street",
      addressLine2: "Apt 4B",
      city: "Cityville",
      state: "State 54321",
      country: "United States",
      isDefault: false,
    },
    {
      title: "Shipping Address 2",
      name: "Kabir Sah",
      addressLine1: "123 Main Street",
      addressLine2: "Apt 4B",
      city: "Cityville",
      state: "State 54321",
      country: "United States",
      isDefault: false,
    },
  ],
};

export default USER;
