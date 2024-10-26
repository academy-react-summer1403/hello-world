import React from "react";
import { CgBorderStyleDashed } from "react-icons/cg";
import { TbShoppingBag } from "react-icons/tb";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";

const HeadTitle = () => {
  return (
    <div className="w-full h-[80px] border-[#dcdcdc] border-b-2 flex justify-end items-center">

      <h2 className="myFontMiniBold text-[26px] text-[#3f3f47]">
        دوره های رزرو شده
      </h2>
      <CgBorderStyleDashed className="w-9 h-9 ml-1 text-[#5748c7]" />
    </div>
  );
};

export default HeadTitle;
