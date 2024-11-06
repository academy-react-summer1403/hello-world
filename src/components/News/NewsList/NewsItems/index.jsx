import React from "react";
import { Link } from "react-router-dom";
import noImage from "@assets/images/Landing/Blogs/noImage.jpg";
import view from "@assets/images/Landing/Blogs/view.svg";
import calendar from "@assets/images/Landing/Blogs/calendar.svg";
import { ConvertToPersianDate } from "@core/utils/convertDate";
import { faNumber } from "@core/utils/FaNumber";
import { useNavigate } from "react-router-dom";
const NewsItem = (props) => {
  const navigate = useNavigate();

  return (
    <div className="h-[370px] w-[350px]  flex justify-center dark:bg-[#111827] transition duration-300 ease-in-out bg-white shadow-sm m-1 rounded-[20px] flex-wrap pt-3 hover:cursor-pointer max-sm:w-[240px] max-sm:h-[300px]">
      <Link
        onClick={() => navigate("/NewsDetailPage/" + props?.id)}
        className="w-[90%] h-[60%] flex justify-center rounded-[20px] overflow-hidden transition duration-300 ease-in-out dark:bg-[#1a1a2e]"
      >
        <img
          className="w-[100%] h-[100%]  "
          src={props?.currentImageAddressTumb}
          alt=""
        />
      </Link>
      <h2
        dir="rtl"
        className=" myFontMiniBold text-[18px] text-right w-[90%] text-[#263238] transition duration-300 ease-in-out dark:text-[#ffff]"
      >
        {props?.title}
      </h2>
      <h2
        dir="rtl"
        className="text-[12px] text-right w-[90%] text-[#455A64] transition duration-300 ease-in-out dark:text-[#ffff]"
      >
        {props?.miniDescribe}
      </h2>
      <div
        dir="rtl"
        className="w-[90%] h-8 flex  flex-row-reverse items-center justify-end "
      >
        <div
          dir="rtl"
          className="Data2 w-[25%] h-[100%] flex gap-1 text-[12px] font-bold  pt-[8.5px]  "
        >
          <img className="w-[12px] h-[15px]" src={calendar} />

          <span className="text-[#2196F3]">
            {" "}
            {props?.insertDate && ConvertToPersianDate(props?.insertDate)}{" "}
          </span>
        </div>
        <div
          dir="rtl"
          className="Data1 w-[25%] h-[100%] flex gap-1 text-[12px] font-bold justify-start pt-[8.5px] max-sm:w-[50%]   "
        >
          <img className="w-[12px] h-[15px] " src={view} />
          <span className="text-[#2196F3]">
            {" "}
            {props?.currentView &&
              faNumber(props?.currentView.toString(), ",")}{" "}
            بازدید
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
