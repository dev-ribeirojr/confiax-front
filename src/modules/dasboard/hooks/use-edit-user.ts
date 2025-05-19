import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

import {
  editUserSchema,
  type EditUserSchemaProps,
} from "@/modules/dasboard/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { getUserById, updateUser } from "@/services/models/user";

export function useEditUser() {
  const [isLoading, setIsLoading] = useState(false);

  const [currentRolesIds, setCurrentRolesIds] = useState<string[]>([]);

  const router = useNavigate();

  const { id } = useParams();

  const form = useForm<EditUserSchemaProps>({
    resolver: zodResolver(editUserSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      roles: [],
    },
  });

  const currentRolesId = useRef<string[]>([]);

  async function onSubmit({ name, password, roles }: EditUserSchemaProps) {
    try {
      setIsLoading(true);

      await updateUser({ id: id!, name, password, roles });

      toast.success("Usuário editado com sucesso");

      form.reset();

      router("/");
    } catch (error) {
      toast.error("Não foi possível atualizar esse usuário");
    } finally {
      setIsLoading(false);
    }
  }

  async function getUserDetails() {
    if (!id) {
      toast.error("Usuário inválido");
      return;
    }
    try {
      const response = await getUserById(id);

      setCurrentRolesIds(response.roles.map((role) => role.id));

      form.setValue("email", response.email);

      form.setValue("name", response.name);

      form.setValue("roles", currentRolesId.current);
    } catch (error) {
      toast.error("Não foi possível carregar dados do usuário");
      router("/");
    }
  }

  useEffect(() => {
    getUserDetails();
  }, []);

  return {
    form,
    isLoading,
    currentRolesIds,
    onSubmit,
  };
}
