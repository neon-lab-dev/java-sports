import axios from "axios";
import API from ".";

export const getInstagramPosts = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(API.instagramPosts)
      .then((res) => {
        const posts = res?.data?.data;
        //sort by latest
        const sortedPosts = posts.sort((a, b) => {
          return new Date(b.timestamp) - new Date(a.timestamp);
        });
        resolve(sortedPosts);
      })
      .catch((err) => {
        reject(
          err.response.data.message || "Something went wrong, please try again"
        );
      });
  });
};
