import axios from "axios";
import API from ".";

export const getAllMyOrders = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(API.myOrders, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(
          err.response.data.message || "Something went wrong, please try again"
        );
      });
  });
};

export const cancelOrder = (orderId) => {
  return new Promise((resolve, reject) => {
    axios
      .put(
        `${API.cancelOrder}/${orderId}`,
        {},
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(
          err.response.data.message || "Something went wrong, please try again"
        );
      });
  });
};

export const handleGetApiKey = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(API.getPaymentKey, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        resolve(res.data.key);
      })
      .catch((err) => {
        reject(
          err.response.data.message || "Something went wrong, please try again"
        );
      });
  });
};

export const handleCheckout = (totalAmount) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        API.checkout,
        { amount: totalAmount },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(
          err.response.data.message || "Something went wrong, please try again"
        );
      });
  });
};

export const createOrder = (orderData) => {
  return new Promise((resolve, reject) => {
    axios
      .post(API.newOrder, orderData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(
          err.response.data.message || "Something went wrong, please try again"
        );
      });
  });
};

export const applyCoupon = (couponCode) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API.applyDiscount}/?code=${couponCode}`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(
          err.response.data.message || "Something went wrong, please try again"
        );
      });
  });
};
