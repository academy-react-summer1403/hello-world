import React from "react";
import p1 from "../../../assets/images/Error/404.png";
const Error = () => {
  return (
    <div className="W-full h-[880px] flex justify-center items-center content-center flex-wrap">
      <img className="w-[500px] h-[500px]" src={p1} alt="" />
      <p className="w-full mt-10 text-center myFontBold text-[#0087A2] text-[50px]">
        Page Not Found
      </p>
    </div>
  );
};

export default Error;
