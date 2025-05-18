import { axiosApi } from "@/lib";

export async function getMe() {
  const response = await axiosApi<UserModel>("users/me");

  return response.data;
}
