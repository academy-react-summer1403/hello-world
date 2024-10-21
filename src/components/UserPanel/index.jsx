import React from "react";
import Content from "./Content";

const UserProfile = () => {
  return (
    <div className="w-full flex h-[1000px] justify-center bg-[#e0ddf8]">
      <div className="w-[1400px] flex p-4 justify-between flex-wrap">
        <Content />
      </div>
    </div>
  );
};

export default UserProfile;
