import { axiosApi } from "@/lib";

export async function getUsers(page?: number, limit?: number) {
  const params = new URLSearchParams();

  if (page) {
    params.append("page", page.toString());
  }

  if (limit) {
    params.append("limit", limit.toString());
  }

  const users = await axiosApi.get<PaginationResponseProps<UserModel[]>>(
    `/users?${params.toString()}`
  );

  return users.data;
}
