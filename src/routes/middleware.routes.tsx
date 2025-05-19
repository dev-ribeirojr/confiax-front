import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";

import { useUserStore } from "@/stores";
import { getMe } from "@/services/models/user";
import { deleteCookies } from "@/lib";
import { Loading } from "@/components/ui";

interface MiddlewareRoutesProps {
  onlyPublic?: boolean;
  isPrivate?: boolean;
}

export function MiddlewareRoutes({
  onlyPublic,
  isPrivate,
}: MiddlewareRoutesProps) {
  const { user, updateUser, logOut } = useUserStore();

  const [isLoading, setIsLoading] = useState(true);

  async function authenticatedUser() {
    try {
      const response = await getMe();

      updateUser(response);
    } catch (error) {
      logOut();

      deleteCookies("auth");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!user) {
      authenticatedUser();
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading)
    return (
      <div className="h-full flex items-center">
        <Loading />
      </div>
    );

  const isAuthenticated = !!user;

  if (onlyPublic && isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (isPrivate && !isAuthenticated) {
    return <Navigate to="/authentication" />;
  }

  return <Outlet />;
}
