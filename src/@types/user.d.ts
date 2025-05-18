declare interface UserModel {
  id: string;
  name: string;
  email: string;
  roles: RoleModel[];
  createdAt: Date;
  updatedAt: Date;
}
