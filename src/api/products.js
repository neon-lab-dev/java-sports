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

// const getType = (type) => {
//   if (type === "wicketkeeping") return "WicketKeeping";
//   if (type === "inner-thighpad") return "Inner ThighPad";
//   if (type === "sunglass") return "SunGlass";
//   if (type === "on-field") return "On-Field";
//   if (type === "athletic-supporter") return " Athletic Supporter";
//   if (type === "caps-&-hats") return "Caps & Hats";
//   if (type === "wristband") return "WristBand";
//   return paramToWord(type);
// };

export const getFilteredProducts = ({
  category,
  categoryType,
  mainCategoryLabel,
  priceRange,
}) => {
  const url = `${API.getAllProducts}?${
    categoryType && categoryType.toLowerCase() === "all"
      ? mainCategoryLabel
      : mainCategoryLabel === "category"
        ? "sub_category"
        : "sub_category2"
  }=${
    categoryType && categoryType.toLowerCase() === "all"
      ? category
      : categoryType
    }&discountedprice[gte]=${priceRange}`;
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
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

export const getHelmets = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API.getAllProducts}?category=Helmets`, {
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

export const getAccessories = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API.getAllProducts}?sub_category=Accessories`, {
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

export const searchAProduct = (query) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API.getAllProducts}?keyword=${encodeURI(query)}`, {
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
