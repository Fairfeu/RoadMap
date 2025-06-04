import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ROUTES from "./links";
import pagesMap from "./pagesMap";
import createLazyRoute from "./lazyRout";
import ErrorPage from "./topics/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      ...Object.values(ROUTES)
        .filter((path) => typeof path === "string" && path.startsWith("/"))
        .map((path) => {
          const Component = createLazyRoute(pagesMap[path]);
          return {
            index: path === "/",
            path: path === "/" ? undefined : path.replace("/", ""),
            element: <Component />,
          };
        }),

      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
