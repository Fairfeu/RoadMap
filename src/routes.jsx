// src/routes.js
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
const LazyLoad = (Component) => (
  <React.Suspense fallback="Загрузка...">
    <Component />
  </React.Suspense>
);

const router = createBrowserRouter([
  {
    path: "/RoadMap",
    element: <Layout />,
    children: [
      {
        index: true,
        element: LazyLoad(React.lazy(() => import("./topics/Home"))),
      },
      {
        path: "AboutReact",
        element: LazyLoad(React.lazy(() => import("./topics/AboutReact"))),
      },
      {
        path: "StartsWith",
        element: LazyLoad(React.lazy(() => import("./topics/StartsWith"))),
      },
      {
        path: "ProjectStructure",
        element: LazyLoad(
          React.lazy(() => import("./topics/ProjectStructure"))
        ),
      },
      {
        path: "VirtualDOMPage",
        element: LazyLoad(React.lazy(() => import("./topics/VirtualDomPage"))),
      },
      {
        path: "Components",
        element: LazyLoad(React.lazy(() => import("./topics/Components"))),
      },
      {
        path: "ReactProps",
        element: LazyLoad(React.lazy(() => import("./topics/ReactProps"))),
      },
      {
        path: "StateReact",
        element: LazyLoad(React.lazy(() => import("./topics/StateReact"))),
      },
      {
        path: "LyfeCycleReact",
        element: LazyLoad(React.lazy(() => import("./topics/LifeCycleReact"))),
      },
      {
        path: "Events",
        element: LazyLoad(React.lazy(() => import("./topics/Events"))),
      },
      {
        path: "ReactAdvancedConceptsGuide",
        element: LazyLoad(
          React.lazy(() => import("./topics/ReactAdvancedConceptsGuide"))
        ),
      },
      {
        path: "ReactContextGuide",
        element: LazyLoad(
          React.lazy(() => import("./topics/ReactContextGuide"))
        ),
      },
      {
        path: "ReactRouter",
        element: LazyLoad(React.lazy(() => import("./topics/ReactRouter"))),
      },
      {
        path: "LocalStorage",
        element: LazyLoad(React.lazy(() => import("./topics/LocalStorage"))),
      },
      {
        path: "HOCreact",
        element: LazyLoad(React.lazy(() => import("./topics/HOCreact"))),
      },
      {
        path: "*",
        element: LazyLoad(React.lazy(() => import("./topics/ErrorPage"))),
      },
    ],
  },
]);
export default router;
