import { getUsers } from "@/services/models/user";
import { useUsersStore } from "@/stores";
import { useEffect, useRef, useState } from "react";

export function useUsers() {
  const { updateUsers, updateNextPage, users } = useUsersStore();

  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  const [isLoadingNextPage, setIsLoadingNextPage] = useState(false);

  const currentPage = useRef(1);

  const hasNextPage = useRef(true);

  const limit = 10;

  async function mutation() {
    setIsLoading(true);

    setIsError(false);

    try {
      const response = await getUsers(currentPage.current, limit);

      updateUsers(response.data);

      hasNextPage.current = response.last_page > currentPage.current;
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  async function nextPage() {
    if (!hasNextPage.current || isLoadingNextPage) return;

    setIsLoadingNextPage(true);

    try {
      const response = await getUsers(currentPage.current + 1, limit);

      updateNextPage(response.data);

      currentPage.current = response.page;

      hasNextPage.current = response.last_page > currentPage.current;
    } finally {
      setIsLoadingNextPage(false);
    }
  }

  useEffect(() => {
    mutation();
  }, []);

  return {
    data: users,
    isLoading,
    isError,
    isLoadingNextPage,
    hasNextPage: hasNextPage.current,
    nextPage,
    mutation,
  };
}
