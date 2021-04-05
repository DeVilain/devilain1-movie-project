import axios from "axios";
import queryString from "query-string";
import { accessToken } from "../config/settings";

// create instance
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },

  // handle params to prevent null or undefined params
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    // console.log the logger for every request
    console.log(
      `${config.method.toUpperCase()} request sent to 
       ${config.baseURL + config.url} at ${new Date().toLocaleString()}`
    );
    /*    if (localStorage.getItem(accessToken)) {
      config.headers["Authorization"] = `Bearer ${JSON.parse(
        localStorage.getItem(accessToken)
      )}`;
    } */
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosClient;
