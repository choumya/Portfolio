import axios from "axios";

const api = axios.create({
  baseURL: "https://portfolio-api-qtyh.onrender.com",
});

export default api;
