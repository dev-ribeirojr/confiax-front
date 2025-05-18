export interface UseUsersStoreProps {
  users: UserModel[];
  updateNextPage: (users: UserModel[]) => void;
  updateUsers: (users: UserModel[]) => void;
  removeUser: (id: string) => void;
}
