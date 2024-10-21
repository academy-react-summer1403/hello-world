import React from "react";
import { CgBorderStyleDashed } from "react-icons/cg";
import { TbShoppingBag } from "react-icons/tb";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";

const HeadTitle = () => {
  return (
    <div className="w-full h-[80px] border-[#dcdcdc] border-b-2 flex justify-end items-center">
      <Link to="/BasketS">
        <TbShoppingBag className="w-8 h-8 mr-1 absolute left-10 top-[38px] text-[#666666] hover:cursor-pointer" />
      </Link>
      <IoNotifications className="w-7 h-7 mr-1 absolute left-24 text-[#666666] hover:cursor-pointer" />

      <h2 className="myFontMiniBold text-[26px] text-[#3f3f47]"> داشبورد </h2>
      <CgBorderStyleDashed className="w-9 h-9 ml-1 text-[#5748c7]" />
    </div>
  );
};

export default HeadTitle;
