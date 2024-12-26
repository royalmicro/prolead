/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface AuthState {
  isAuthenticated: boolean;
  user: { email: string; name?: string } | null;
  error: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools((set) => ({
    isAuthenticated: false,
    user: null,
    error: null,
    loading: false,

    login: async (email, password) => {
      set({ loading: true, error: null });
      try {
        // Replace with actual API call
        const response: any = await fakeApiCall({ email, password });
        set({ user: response.user, isAuthenticated: true, loading: false });
         
      } catch (err: any) {
        set({ error: err.message, loading: false });
      }
    },

    signup: async (email, password, name) => {
      set({ loading: true, error: null });
      try {
         
        const response: any = await fakeApiCall({ email, password, name });
        set({ user: response.user, isAuthenticated: true, loading: false });
      } catch (err: any) {
        set({ error: err.message, loading: false });
      }
    },

    logout: () => {
      set({ isAuthenticated: false, user: null });
    },
  }))
);

// Mock API Call (Replace with your actual API)
const fakeApiCall = async (data: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email === "test@example.com" && data.password === "password") {
        resolve({ user: { email: data.email, name: "Test User" } });
      } else {
        reject(new Error("Invalid credentials"));
      }
    }, 1000);
  });
};
