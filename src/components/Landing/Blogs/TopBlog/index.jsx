import React from "react";
import { Link } from "react-router-dom";
import view from "@assets/images/Landing/Blogs/view.svg";
import calendar from "@assets/images/Landing/Blogs/calendar.svg";
import noImage from "@assets/images/Landing/Blogs/noImage.jpg";
import { faNumber } from "@core/utils/FaNumber";
import { ConvertToPersianDate } from "@core/utils/convertDate";

const TopBlog = ({
  id,
  title,
  miniDescribe,
  currentView,
  currentImageAddressTumb,
  insertDate,
}) => {
  return (
    <Link
      to={`/NewsDetailPage/${id}`}
      className=" w-[597px] h-[570px]  flex justify-end flex-wrap max-xl:hidden"
    >
      <div className="laptop  rounded-[24px] relative ">
        <img
          className=" w-[550px] h-[360px]  rounded-[24px]  "
          src={currentImageAddressTumb ? currentImageAddressTumb : noImage}
          alt=""
        />
        <h2 className="absolute bottom-[-110px] right-0   text-[] "></h2>
      </div>
      <div className=" w-[97%] h-[38%] flex justify-end flex-wrap pt-4">
        <div className="date w-[100px] h-[40px] dark:bg-[#111827] transition duration-300 ease-in-out bg-[#DAEEFF] rounded-[80px] bg-no-repeat bg-[center_right_1rem] text-right text-[13px] font-bold text-[#2196F3] pr-9 pt-[13px] relative">
          <img className="absolute right-[15px] top-[14px]" src={calendar} />
          <span> {insertDate && ConvertToPersianDate(insertDate)} </span>
        </div>
        <div className="view w-[100px] h-[40px] dark:bg-[#111827] transition duration-300 ease-in-out bg-[#DAEEFF] rounded-[80px] ml-3  text-right text-[13px] font-bold text-[#2196F3] pr-9   relative">
          <span dir="rtl" className="relative top-3  ">
            {" "}
            {currentView && faNumber(currentView.toString(), ",")} بازدید
          </span>
          <img className="absolute right-[15px] top-[14px]  " src={view} />
        </div>

        <h2
          dir="rtl"
          className=" dark:text-white w-full transition duration-300 ease-in-out text-[#263238] text-[20px] text-right  font-medium font-[YekanBakhBold]"
        >
          {" "}
          {title}{" "}
        </h2>
        <h4
          dir="rtl"
          className=" dark:text-white w-full truncate transition duration-300 ease-in-out text-[#455A64] text-[12px] text-right font-medium font-[YekanBakh]"
        >
          {miniDescribe}
        </h4>
      </div>
    </Link>
  );
};

export default TopBlog;
