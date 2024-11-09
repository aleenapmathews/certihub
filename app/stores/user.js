import { create } from "zustand";

export const userStore = create((set) => ({
  isLoggedIn: false,
  setUserLogin: () => set({ isLoggedIn: true }),
  setUserLogout: () => set({ isLoggedIn: false }),

  user_id: -1,
  setUserId: (userId) => set({ user_id: userId }),
  
  user_name: "",
  setUserName: (userName) => set({ user_name: userName }),
}));
