import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

export const userStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      setUserLogin: () => set({ isLoggedIn: true }),
      setUserLogout: () => set({ isLoggedIn: false }),
    
      user_id: -1,
      setUserId: (userId) => set({ user_id: userId }),
      
      user_name: "",
      setUserName: (userName) => set({ user_name: userName }),
    }),
    {
      name: 'user-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  )


);
