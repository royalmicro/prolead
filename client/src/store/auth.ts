/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthService } from '@/services/http';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface AuthState {
  isAuthenticated: boolean;
  user: { email: string; name?: string } | null;
  token: string | null;
  error: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools((set) => ({
    isAuthenticated: false,
    token: null,
    user: null,
    error: null,
    loading: false,

    login: async (email, password) => {
      set({ loading: true, error: null });
      try {
        const response = await AuthService.login(email, password);
        const { access_token } = response;
        set({
          token: access_token,
          isAuthenticated: true,
          loading: false,
        });
      } catch (err: any) {
        set({
          error: err.response?.data?.message || 'Login failed',
          loading: false,
        });
      }
    },

    signup: async (email, password, name) => {
      set({ loading: true, error: null });
      try {
        const response = await AuthService.signup(email, password, name);
        set({
          user: response.user,
          isAuthenticated: false,
          loading: false,
        });
      } catch (err: any) {
        set({
          error: err.response?.data?.message || 'Signup failed',
          loading: false,
        });
      }
    },

    logout: () => {
      set({ isAuthenticated: false, user: null, token: null });
    },
  }))
);
