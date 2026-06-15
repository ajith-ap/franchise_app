import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://139.59.0.133",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;