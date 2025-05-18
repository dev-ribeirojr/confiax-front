import type { UseUsersStoreProps } from "@/stores/users/interfaces";
import { create } from "zustand";

export const useUsersStore = create<UseUsersStoreProps>((set) => ({
  users: [],
  removeUser: (id: string) =>
    set((state) => {
      const filterUsers = state.users.filter((item) => item.id !== id);

      return { ...state, users: filterUsers };
    }),
  updateUsers: (users: UserModel[]) =>
    set(() => ({
      users,
    })),
  updateNextPage: (users: UserModel[]) =>
    set((state) => ({
      users: [...state.users, ...users],
    })),
}));
