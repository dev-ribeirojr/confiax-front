import { getRoles } from "@/services/models/roles";
import { useEffect, useState } from "react";

export function useRoles() {
  const [isLoading, setIsLoading] = useState(false);

  const [roles, setRoles] = useState<RoleModel[]>([]);

  async function mutation() {
    try {
      setIsLoading(true);
      const response = await getRoles();

      console.log("Roles ", response);

      setRoles(response);
    } catch (error) {
      console.log("ERROR", error);
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
