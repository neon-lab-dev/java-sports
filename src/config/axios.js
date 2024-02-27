import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  headers: {
    common: {
      "Content-Type": "application/json",
    },
  },
});

export { axiosInstance };
