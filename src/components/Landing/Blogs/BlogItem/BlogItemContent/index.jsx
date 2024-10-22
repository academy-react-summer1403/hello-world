import React from "react";
import { Link } from "react-router-dom";
import noImage from "@assets/images/Landing/Blogs/noImage.jpg";
import view from "@assets/images/Landing/Blogs/view.svg";
import calendar from "@assets/images/Landing/Blogs/calendar.svg"
import { ConvertToPersianDate } from "@core/utils/convertDate";
import { faNumber } from "@core/utils/FaNumber";
const BlogItemContent = ({
  id,
  title,
  currentImageAddressTumb,
  miniDescribe,
  currentView,
  insertDate,
}) => {
  return (
    <>
      <Link
        to={`/NewsDetailPage/${id}`}
        className=" AkhbarData w-[99%] h-[161px] mb-[30px] flex justify-end max-md:w-[80%] max-sm:w-[60%] max-short:w-[50%]   "
      >
        <div className="left w-[62%] h-[161px] " >
          <div className="top pt-[10px] pr-[10px] w-[100%] h-[80%] text-right     ">
            <h2 dir="rtl" className="mb-[10px] w-[100%]  dark:text-white text-[#263238] text-[20px]   font-medium font-[YekanBakhBold] max-short:text-[12px]  ">
              {" "}
              {title}{" "}
            </h2>
            <h4 dir="rtl" className="w-[100%] text-[12px] dark:text-white text-[#455A64]    font-medium font-[YekanBakh]  leading-[21px] max-short:text-[10px]  ">
              {miniDescribe}
            </h4>
          </div>
          <div className="bottom w-[100%]  h-[20%] flex flex-row-reverse    ">
              <div dir="rtl" className="Data1 w-[25%] h-[100%] flex  text-[12px] font-bold justify-start pt-[8.5px] max-sm:w-[50%]   ">
              <img className="w-[12px] h-[15px] " src={view} />
             <span className="text-[#2196F3]" > {currentView && faNumber(currentView.toString(), ",") } بازدید</span>
            </div>
          
            <div className="Dotted rounded-[50px] bg-[#2196F3] w-[6px] h-[6px]  flex justify-center mt-3.5 mx-5 "></div>
            <div dir="rtl" className="Data2 w-[25%] h-[100%] flex  text-[12px] font-bold  pt-[8.5px]  ">
            <img className="w-[12px] h-[15px]" src={calendar} />

            <span className="text-[#2196F3]">  {insertDate && ConvertToPersianDate(insertDate)   } </span>
            </div>
          </div>
        </div>
        <div className="right flex justify-center items-center   ">
          <img
            className="max-h-[150px] w-[220px] rounded-[25px] "
            src={currentImageAddressTumb ? currentImageAddressTumb : noImage}
            alt=""
          />
        </div>
      </Link>

      <div className="w-full"></div>
    </>
  );
};

export default BlogItemContent;
