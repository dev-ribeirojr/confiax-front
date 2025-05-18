import { Navigate, Outlet } from "react-router";

export function PrivateRoutes() {
  const isLoading = false;
  const isAuthenticated = true;

  if (isLoading) return <div />;

  return isAuthenticated ? <Outlet /> : <Navigate to="/authentication" />;
}
