import axios from "axios";

/**
 * CRA proxy handles http://localhost:8080
 * So we DO NOT put baseURL here
 */
const api = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export default api;
