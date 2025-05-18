import { useRef, useState } from "react";

export function useDeleteUser() {
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
    setIsLoading(true);
    console.log("DELETAR USUÁRIO", userId.current);
    setIsLoading(false);
  }

  return {
    isOpen,
    isLoading,
    onSubmit,
    openDialogDeleteUser,
    closeDialogDeleteUser,
  };
}
