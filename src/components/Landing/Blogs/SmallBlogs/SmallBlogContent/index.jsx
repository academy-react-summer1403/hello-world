import React from "react";
import { Link } from "react-router-dom";
import noImage from "@assets/images/Landing/Blogs/noImage.jpg";
const SmallBlogContent = ({
  title,
  currentImageAddressTumb,
  miniDescribe,
  currentView,
  insertDate,
}) => {
  return (
    <>
      <Link
        to="/NewsDetailPage"
        className=" AkhbarData w-[99%] h-[161px] mb-[30px] flex justify-end  "
      >
        <div className="left w-[62%] h-[161px] " >
          <div className="top pt-[10px] pr-[10px] w-[100%] h-[80%] text-right     ">
            <h2 dir="rtl" className="mb-[10px] w-[100%]   text-[#263238] text-[20px]   font-medium font-[YekanBakhBold]   ">
              {" "}
              {title}{" "}
            </h2>
            <h4 dir="rtl" className="w-[100%] text-[12px] text-[#455A64]    font-medium font-[YekanBakh]  leading-[21px] ">
              {miniDescribe}
            </h4>
          </div>
          <div className="bottom w-[100%]  h-[20%] flex justify-right flex-wrap justify-items-center  ">
            <div className="Data2 w-[25%] h-[100%] felx justify-right text-[12px] font-bold pr-[35px] pt-[8.5px]  ">
              1402/4/7
            </div>
            <div className="Dotted rounded-[50px] bg-[#2196F3] w-[6px] h-[6px]  flex justify-right "></div>
            <div className="Data1 w-[25%] h-[100%] flex justify-right text-[12px] font-bold  pr-[35px] pt-[8.5px]   ">
              {" "}
              {currentView} بازدید
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

export default SmallBlogContent;
