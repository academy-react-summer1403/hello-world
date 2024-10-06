import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const authStore = (set) => ({
  tokenAuth: "",
  setTokenAuth: (tk) => {
    set((state) => ({
      tokenAuth: tk,
    }));
  },
  logout: () => {
    set(() => ({ tokenAuth: null }));
    localStorage.removeItem("auth")
  }
});

const useAuthStore = create(
  devtools(
    persist(authStore, {
      name: "auth",
    })
  )
);

export { useAuthStore };
