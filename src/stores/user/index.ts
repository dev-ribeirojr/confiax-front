import { create } from "zustand";
import type { UseUserStoreProps } from "@/stores/user/interfaces";

export const useUserStore = create<UseUserStoreProps>((set) => ({
  user: null,
  updateUser: (user) => set((state) => ({ ...state, user })),
  logOut: () => set(() => ({ user: null })),
}));
