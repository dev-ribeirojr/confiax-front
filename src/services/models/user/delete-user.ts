import { axiosApi } from "@/lib";

export async function deleteUser(id: string) {
  await axiosApi.delete(`users/${id}`);
}
