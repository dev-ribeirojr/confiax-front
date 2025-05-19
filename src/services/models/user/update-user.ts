import { axiosApi } from "@/lib";

interface UpdateUserProps {
  id: string;
  name?: string;
  password?: string;
  roles?: string[];
}

export async function updateUser({
  id,
  name,
  password,
  roles,
}: UpdateUserProps) {
  const data: Record<string, any> = {};

  if (!!name) data.name = name;

  if (!!password) data.password = password;

  if (roles?.length) data.roles = roles;

  const response = await axiosApi.patch(`users/${id}`, data);

  return response.data;
}
