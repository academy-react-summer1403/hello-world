import React, { useEffect, useState } from "react";
import { CgBorderStyleDashed } from "react-icons/cg";
import { TbShoppingBag } from "react-icons/tb";
import { IoNotifications, IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CiCalendarDate } from "react-icons/ci";

const HeadTitle = () => {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDate = (date) => {
    const parts = date.toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).split(" ");
  
    // Rearrange and add custom separators
    return `${parts[0]} /${parts[1]}/${parts[2]}`;
  };
  return (
    <div className="w-full h-[80px] border-[#dcdcdc] border-b-2 flex justify-end items-center">
      <div className="flex mt-4 space-x-8 pr-14 pb-4 leading-3 dark:text-gray-50 text-gray-500 text-lg">
       <div className="flex items-center gap-2  space-x-1">
       <IoTimeOutline className="w-7 h-7" />
            <div>
              <p className="font-bold text-black dark:text-gray-50">
                {formatTime(currentTime)}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2    space-x-1">
          <CiCalendarDate className="w-7 h-7" />
            <div className="">

              <p className="font-bold text-black w-24 dark:text-white">
                {" "}
                {formatDate(currentTime)}
              </p>
            </div>
          </div>
        </div>

      <h2 className="myFontMiniBold text-[26px] text-[#3f3f47]"> داشبورد </h2>
      <CgBorderStyleDashed className="w-9 h-9 ml-1 text-[#5748c7]" />
    </div>
  );
};

export default HeadTitle;
