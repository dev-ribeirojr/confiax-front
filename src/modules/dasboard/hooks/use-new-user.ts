import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

import type { AxiosError } from "axios";

import {
  newUserSchema,
  type NewUSerSchemaProps,
} from "@/modules/dasboard/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUser } from "@/services/models/user";

export function useNewUser() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<NewUSerSchemaProps>({
    resolver: zodResolver(newUserSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      roles: [],
    },
  });

  async function onSubmit(params: NewUSerSchemaProps) {
    try {
      setIsLoading(true);
      await createUser(params);

      form.reset();
      toast.success("usuário cadastrado com sucesso");
    } catch (error) {
      const _error = error as AxiosError<ResponseError>;

      let description: string;

      switch (_error.response?.data.message) {
        case "user_already_exist":
          description = "O e-mail fornecido jé se encontra em uso";
          break;
        default:
          description =
            "Não foi possível cadastrar o usuário, tente novamente!";
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
