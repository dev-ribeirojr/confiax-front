import { axiosApi } from "@/lib";

interface CreateUSerProps {
  email: string;
  name: string;
  password: string;
  roles?: string[];
}

export async function createUser(params: CreateUSerProps) {
  const response = await axiosApi.post("users", params);

  return response.data;
}
