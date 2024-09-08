import React, { ReactElement } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = (): ReactElement => {
  return (
    <div>
      <h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non,
        excepturi.
      </h1>
      <Outlet />
    </div>
  );
};

export default MainLayout;
