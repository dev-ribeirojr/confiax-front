export interface UseUserStoreProps {
  user: UserModel | null;
  updateUser: (user: UserModel | null) => void;
  logOut: () => void;
}
