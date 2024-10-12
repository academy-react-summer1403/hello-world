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
        to="/BlogDetailsS"
        className=" AkhbarData w-[99%] h-[161px] mb-[30px] flex justify-end  "
      >
        <div className="left w-[62%] h-[161px]  ">
          <div className="top pt-[10px] pr-[10px] w-[100%] h-[80%] text-right     ">
            <h2 className="mb-[10px] w-[100%] text-[16px] text-[#263238]     ">
              {" "}
              {title}{" "}
            </h2>
            <h4 className="w-[100%] text-[12px] text-[#455A64] font-semibold leading-[21px] ">
              {miniDescribe}
            </h4>
          </div>
          <div className="bottom">
            <div className="Data2 bg-no-repeat bg-[center_right_1rem]">
              1402/4/7
            </div>
            <div className="Dotted"></div>
            <div className="Data1 bg-no-repeat bg-[center_right_1rem]">
              {" "}
              {currentView} بازدید
            </div>
          </div>
        </div>
        <div className="right flex justify-center items-center">
          <img
            className="max-h-[150px] w-[220px] rounded-[25px] border border-[#c2c2c2]"
            src={noImage}
            alt=""
          />
        </div>
      </Link>

      <div className="w-full"></div>
    </>
  );
};

export default SmallBlogContent;
