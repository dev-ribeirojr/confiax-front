import { create } from "zustand";
import type { UseUserStoreProps } from "@/stores/user.store.ts/interfaces";

export const useUserStore = create<UseUserStoreProps>((set) => ({
  user: null,
  updateUser: (user) => set((state) => ({ ...state, user })),
  logOut: () => set(() => ({ user: null })),
}));
