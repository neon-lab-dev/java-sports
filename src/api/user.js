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

export const logout = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(API.logout, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data.message || "Logout failed, please try again");
      });
  });
};

export const signup = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(API.register, data, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response.data.message || "Signup failed, please try again");
      });
  });
};

export const sendOtp = (otp) => {
  return new Promise((resolve, reject) => {
    axios
      .post(API.verify, otp, {
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
          err.response.data.message ||
            "Otp verification failed, please try again"
        );
      });
  });
};

export const updateUserAddress = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .put(API.updateUserAddress, data, {
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
          err.response.data.message || "Address update failed, please try again"
        );
      });
  });
};

export const updateUserPassword = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .put(API.updatePassword, data, {
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
          err.response.data.message ||
            "Password update failed, please try again"
        );
      });
  });
};

export const updateUserDetails = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .put(API.updateUser, data, {
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
          err.response.data.message || "Details update failed, please try again"
        );
      });
  });
};
