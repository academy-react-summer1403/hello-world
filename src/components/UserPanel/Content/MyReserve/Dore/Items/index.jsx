import React, { useState } from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import Pic from "@assets/images/Profile/items.png";

const Items = ({ courseName, accept }) => {
  return (
    <div className="w-[100%] h-[55px] hover:bg-[#e5e0ff] transition-[0.1s] rounded-[7px] mb-2 flex justify-center flex-nowrap">
      <div className="w-[15%] h-full flex justify-start gap-3 pl-10 flex-wrap text-[#36343f] text-center pt-[17px]">
        <button className="w-[27px] h-full flex justify-center">
          <MdOutlineDeleteSweep className="w-7 h-7 mt-[-2.7px] text-[#f9314b]" />
        </button>
        <button className="w-[27px] h-full flex justify-center">
          <FaRegEye className="w-6 h-6 mt-[-1px] text-[#8680ca]" />
        </button>
      </div>
      <div className="w-[15%] h-full text-[#36343f] myFont text-center pt-[17px]">
        250.000 تومان
      </div>
      <span className="w-[15%] h-full text-[#36343f] myFont text-center pl-5 pt-[17px]">
        {accept ? "تایید شد" : "در انتظار تایید "}
      </span>
      <div className="w-[20%] h-full text-[15px] myFont text-[#36343f] text-center pl-16 pt-[17px]">
        {" "}
        نام مدرس دوره
      </div>
      <div className="w-[25%] h-full myFont text-[#36343f] text-center pl-10 pt-[17px]">
        {courseName}
      </div>
      <div className="w-[15%] h-full text-[#36343f] text-center pl-16 pt-[7px]">
        <img
          className="w-[60px] rounded-[10px] h-[40px]"
          src={Pic}
          alt="photo"
        />
      </div>
    </div>
  );
};

export default Items;
