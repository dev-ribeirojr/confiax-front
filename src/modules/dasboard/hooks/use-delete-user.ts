import { deleteUser } from "@/services/models/user";
import { useUsersStore } from "@/stores";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

export function useDeleteUser() {
  const { removeUser } = useUsersStore();

  const [isOpen, setIsOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const userId = useRef<string | null>(null);

  function openDialogDeleteUser(id: string) {
    userId.current = id;

    setIsOpen(true);
  }

  function closeDialogDeleteUser() {
    userId.current = null;

    setIsOpen(false);
  }

  async function onSubmit() {
    if (!userId.current) return;

    try {
      setIsLoading(true);

      await deleteUser(userId.current);

      removeUser(userId.current);

      toast.success("Usuário excluído com sucesso!");

      closeDialogDeleteUser();
    } catch (error) {
      toast.error("Não foi possível excluír o usuário, tente novamente!");
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isOpen,
    isLoading,
    onSubmit,
    openDialogDeleteUser,
    closeDialogDeleteUser,
  };
}
