import React from "react";
import LazyLoad from "./topics/LazyLoad";

const createLazyRoute = (importFn) => () =>
  <LazyLoad component={React.lazy(importFn)} />;

export default createLazyRoute;
