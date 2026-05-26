import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://64.227.160.212:8080",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;