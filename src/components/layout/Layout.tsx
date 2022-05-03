import React from "react";

import { Outlet, useNavigate } from "react-router-dom";
import { AppHeader } from "components/AppHeader";

const Layout = () => {
  return (
    <div>
      <AppHeader></AppHeader>
      <Outlet></Outlet>
    </div>
  );
};

export { Layout };