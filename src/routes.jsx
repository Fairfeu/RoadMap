import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ROUTES from "./links";
import pagesMap from "./pagesMap";
import createLazyRoute from "./lazyRout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: Object.values(ROUTES).map((path) => {
      const Component = createLazyRoute(pagesMap[path]);

      if (path === "/") {
        return {
          index: true,
          element: <Component />,
        };
      }

      return {
        path: path.replace("/", ""),
        element: <Component />,
      };
    }),
  },
]);

export default router;
