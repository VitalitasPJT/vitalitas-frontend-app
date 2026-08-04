//testando o ci actions do git

import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 10000,
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("@token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      console.log("🔄 Token expirado! Tentando renovar...");

      const refreshToken = await AsyncStorage.getItem("@refreshToken");
      const accessToken = await AsyncStorage.getItem("@token");

      if (!refreshToken) {
        await AsyncStorage.multiRemove(["@token", "@refreshToken", "@user", "@rememberMe"]);
        return Promise.reject(error);
      }

      try {
        const { data } = await axios.post(
          `${process.env.EXPO_PUBLIC_API_URL}/usuario/refresh`,
          { AccessToken: accessToken, RefreshToken: refreshToken }
        );

        await AsyncStorage.setItem("@token", data.AccessToken);
        await AsyncStorage.setItem("@refreshToken", data.RefreshToken);

        originalRequest.headers.Authorization = `Bearer ${data.AccessToken}`;
        return api(originalRequest);
      } catch (refreshError: any) {
        console.log("❌ Falha ao renovar token:", refreshError?.response?.data ?? refreshError?.message);
        await AsyncStorage.multiRemove(["@token", "@refreshToken", "@user", "@rememberMe"]);
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;