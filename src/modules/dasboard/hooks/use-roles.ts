import { getRoles } from "@/services/models/roles";
import { useEffect, useState } from "react";

export function useRoles() {
  const [isLoading, setIsLoading] = useState(false);

  const [roles, setRoles] = useState<RoleModel[]>([]);

  async function mutation() {
    try {
      setIsLoading(true);
      const response = await getRoles();

      setRoles(response);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    mutation();
  }, []);

  return {
    roles,
    isLoading,
  };
}
