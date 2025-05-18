import { getCookies } from "@/lib/cookies";
import axios from "axios";

export const axiosApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosApi.interceptors.request.use(async (config) => {
  const token = await getCookies("auth");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
