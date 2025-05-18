import { axiosApi } from "@/lib";

interface SignInProps {
  email: string;
  password: string;
}

interface ResponseProps {
  access_token: string;
}

export async function signIn(params: SignInProps) {
  const response = await axiosApi.post<ResponseProps>("auth/sign-in", params);
  return response.data;
}
