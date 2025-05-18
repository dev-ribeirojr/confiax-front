import { useRoutes } from "react-router";

import { PrivateRoutes } from "@/routes/private.routes";

import { SignIn } from "@/modules/auth/pages";
import { Home } from "@/modules/dasboard/pages";
import { NotFound } from "@/modules/shared/pages";
import { Layout } from "@/components/layout";

export function Routes() {
  const routes = useRoutes([
    {
      path: "/authentication",
      element: <SignIn />,
    },
    {
      element: <PrivateRoutes />,
      children: [
        {
          path: "/",
          element: (
            <Layout>
              <Home />
            </Layout>
          ),
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return routes;
}
