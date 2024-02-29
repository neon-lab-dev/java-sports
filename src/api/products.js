import axios from "axios";
import API from ".";

export const getTopRatedBats = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API.getAllProducts}?page=1&sub_category=Bat`, {
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

export const getAProduct = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API.getAProduct}/${id}`, {
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

export const writeAReview = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`${API.review}`, data, {
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
