import React from "react";
import { Outlet } from "react-router-dom";
import UserMenu from "@components/UserPanel/Content/UserMenu";

const PanelLayout = () => {
  return (
    <div className="w-full flex h-[1000px] justify-center bg-[#e0ddf8]">
      <div className="w-[1400px] flex p-4 justify-between flex-wrap">
        <Outlet />
        <UserMenu />
      </div>
    </div>
  );
};

export default PanelLayout;
