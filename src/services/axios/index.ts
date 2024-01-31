import axios, { AxiosError } from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] =
      `Bearer ${process.env.NEXT_PUBLIC_JWT_TOKEN}`;

    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

export default axiosInstance;
