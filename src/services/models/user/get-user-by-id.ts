import { axiosApi } from "@/lib";

export async function getUserById(id: string) {
  const response = await axiosApi.get<UserModel>(`users/${id}`);

  return response.data;
}
