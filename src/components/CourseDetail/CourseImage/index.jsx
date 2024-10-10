import React from "react";
import noImage from "@assets/images/Courses/noImage.png"
const CourseImage = (props, tumbImageAddress) => {
  return (
    <div className="dv1 flex justify-end flex-wrap  w-[50%]  h-[600] ">
      <div className="h-[500px]   ">
        <img
          className="h-[490px] w-[850PX] "
          src={tumbImageAddress ? tumbImageAddress : noImage}
          alt="image"
        />
      </div>
      <div className="  h-[150px]">
        <h3 className=" font-[YekanBakhBold] text-right text-[24px] text-grayy leading-[70px] ">
          {props?.title}
        </h3>
        <p className="font-[YekanBakh] text-right text-[15px] text-gray2 leading-[20px] ">
          {props?.miniDescribe}{" "}
        </p>
      </div>
    </div>
  );
};

export default CourseImage;
