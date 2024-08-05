import React from "react";
import { Outlet } from "react-router-dom";
import HeaderAD from "./admin/HeaderAD";

type Props = {};

const Admin = (props: Props) => {
  return (
    <div>
      <div>
        <HeaderAD />
        <div className="max-w-full mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
