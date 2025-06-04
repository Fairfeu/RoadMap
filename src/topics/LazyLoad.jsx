import React from "react";

const LazyLoad = ({ component: Component }) => {
  return (
    <React.Suspense fallback="🌀 Загрузка...">
      <Component />
    </React.Suspense>
  );
};

export default LazyLoad;
