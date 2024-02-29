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
