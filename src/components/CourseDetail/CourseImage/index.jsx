import React from "react";
import noImage from "@assets/images/Landing/Courses/noImage.jpg";
const CourseImage = (props) => {
  return (
    <div className="dv1 flex justify-end flex-wrap  w-[50%]  h-[600]  ">
      <div className="h-[500px] w-[100%]  flex justify-end ">
        <img
          className="h-[100%] w-[100%] rounded-[20px] "
          src={
            props?.imageAddress &&
            props?.imageAddress.includes("classapi.sepehracademy.ir")
              ? props?.imageAddress
              : noImage
          }
          alt=""
        />
      </div>
      <div className="  h-[150px]">
        <h3
          dir="rtl"
          className=" font-[YekanBakhBold] text-right text-[24px] dark:text-white transition duration-300 ease-in-out text-grayy leading-[70px] max-md:text-[20px] max-short:text-[10px] "
        >
          {props?.title}
        </h3>
        <p
          dir="rtl"
          className="font-[YekanBakh] text-right text-[15px] dark:text-white transition duration-300 ease-in-out text-gray2 leading-[20px] max-md:text-[12px]  "
        >
          {props?.miniDescribe}{" "}
        </p>
      </div>
    </div>
  );
};

export default CourseImage;
