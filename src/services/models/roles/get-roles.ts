import { axiosApi } from "@/lib";

export async function getRoles() {
  const response = await axiosApi.get<RoleModel[]>("roles");

  return response.data;
}
