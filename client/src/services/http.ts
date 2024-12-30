import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const AuthService = {
  login: async (email: string, password: string) => {
    const response = await apiClient.post("/auth/login", { email, password });
    return response.data;
  },
  signup: async (email: string, password: string, name: string) => {
    const response = await apiClient.post("/auth/register", {
      email,
      password,
      name,
    });
    return response.data;
  },
};
