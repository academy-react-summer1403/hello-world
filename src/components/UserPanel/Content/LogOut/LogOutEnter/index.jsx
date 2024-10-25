import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../../../../zustand/Auth/UserToken";

const LogOutEnter = () => {
  const logout = useAuthStore((state) => state.logout);
  const onSubmit = () => {
    logout()
    localStorage.removeItem("token");
  };

  return (
    <div className="w-full h-[83%] items-center mt-8 flex justify-center flex-wrap content-center">
      <div className="w-[90%] h-[400px] flex justify-center flex-wrap gap-16 content-center">
        <h2 className="w-full text-center text-[30px] myFontBold ">
          میخواهید از حساب خود خارج شوید؟
        </h2>
        <Link
          onClick={onSubmit}
          to="/"
          className="text-center items-center content-center box w-[30%] h-16 transition-[0.5s] rounded-[20px] text-[#3d3d3d] bg-[#11c6e6] text-[22px] myFontMiniBold border-[4px] border-[#3b97ee] hover:bg-[#3b97ee]"
        >
          تایید
        </Link>
      </div>
    </div>
  );
};

export default LogOutEnter;
