import axios from "axios";
import queryString from "query-string";

const baseURL = "http://127.0.0.1:5001/api/v1/";

const privateClient = axios.create({
  baseURL,
  paramsSerializer: { encode: (params) => queryString.stringify(params) },
});

privateClient.interceptors.request(async (config) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("actkn")}`,
    },
  };
});

privateClient.interceptors.request(async (config) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("actkn")}`,
    },
  };
});
