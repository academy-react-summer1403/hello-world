import React from "react";
import noImage from "@assets/images/Landing/Courses/noImage.jpg";
const CourseImage = (props) => {
  return (
    <div className="dv1 flex justify-end flex-wrap  w-[50%]  h-[600] ">
      <div className="h-[500px]    ">
        <img
          className="h-[100%] w-[100%] rounded-[20px] "
          src={props?.imageAddress ? props?.imageAddress : noImage}
          alt=""
        />
      </div>
      <div className="  h-[150px]">
        <h3
          dir="rtl"
          className=" font-[YekanBakhBold] text-right text-[24px] text-grayy leading-[70px] "
        >
          {props?.title}
        </h3>
        <p
          dir="rtl"
          className="font-[YekanBakh] text-right text-[15px] text-gray2 leading-[20px] "
        >
          {props?.miniDescribe}{" "}
        </p>
      </div>
    </div>
  );
};

export default CourseImage;
