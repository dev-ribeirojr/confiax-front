import { useRoutes } from "react-router";

import { SignIn } from "@/modules/auth/pages";
import { Home } from "@/modules/dasboard/pages";
import { NotFound } from "@/modules/shared/pages";
import { Layout } from "@/components/layout";
import { MiddlewareRoutes } from "@/routes/middleware.routes";

export function Routes() {
  const routes = useRoutes([
    {
      element: <MiddlewareRoutes onlyPublic />,
      children: [
        {
          path: "/authentication",
          element: <SignIn />,
        },
      ],
    },
    {
      element: <MiddlewareRoutes isPrivate />,
      children: [
        {
          element: <Layout />,
          children: [
            {
              path: "/",
              element: <Home />,
            },
          ],
        },
      ],
    },
    {
      element: <MiddlewareRoutes />,
      children: [{ path: "*", element: <NotFound /> }],
    },
  ]);

  return routes;
}
