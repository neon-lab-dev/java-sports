import axios from "axios";
import API from ".";
import { paramToWord } from "@/utils/paramUtils";

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

export const getFilteredProducts = ({ type, categoryType }) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${API.getAllProducts}?${categoryType}=${
          type === "wicketkeeping" ? "WicketKeeping" : paramToWord(type)
        }`,
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

export const addToWishlist = (productId) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        API.addToWishlist,
        {
          id: productId,
        },
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

export const removeFromWishlist = (productId) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(`${API.removeFromWishlist}?id=${productId}`, {
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
