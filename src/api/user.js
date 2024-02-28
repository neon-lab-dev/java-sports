// @ts-nocheck
import axios from "axios";
import API from ".";

export const getUser = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(API.user, {
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

export const login = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        API.login,
        { email, password },
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
        reject(err.response.data.message || "Login failed, please try again");
      });
  });
};
