import { useState } from "react";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { zodResolver } from "@hookform/resolvers/zod";

import { signInSchema, type SignInDto } from "@/modules/auth/schemas";
import { signIn } from "@/services/models/auth";
import { setCookies } from "@/lib";
import { getMe } from "@/services/models/user";
import { useUserStore } from "@/stores";

export function useSignIn() {
  const form = useForm<SignInDto>({
    resolver: zodResolver(signInSchema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const { updateUser } = useUserStore();

  async function onSubmit(params: SignInDto) {
    setIsLoading(true);
    try {
      const response = await signIn(params);

      setCookies("auth", response.access_token);

      const responseMe = await getMe();

      updateUser(responseMe);

      form.reset();

      navigate("/");
    } catch (error) {
      let description: string;
      const _error = error as AxiosError<ResponseError>;

      switch (_error?.response?.data?.message) {
        case "invalid_credentials":
          description = "Credenciais inválidas";
          break;
        case "user_not_found":
          description = "Credenciais inválidas";
          break;
        case "not_have_permission":
          description =
            "Para prosseguir é necessário ter as permições necessárias";
          break;
        default:
          description =
            "ops, ocorreu um erro interno, entre em contato com suporte!";
      }

      toast.error(description);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    form,
    isLoading,
    onSubmit,
  };
}
