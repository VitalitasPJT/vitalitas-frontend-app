import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5152/vitalitas",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
