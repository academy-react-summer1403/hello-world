import React from "react";
import noImage from "@assets/images/Landing/Courses/noImage.jpg";

const Content = ({
  props,
  author,
  pictureAddress,
  likeCount,
  CommentId,
  courseId,
  insertDate,
}) => {
  return (
    <div>
      <div className="w-[780px]  rounded-xl flex content-end flex-col	flex-wrap ">
        <div dir="rtl" className="flex flex-wrap-reverse justify-between  ">
          <div
            dir="rtl"
            className=" flex flex-wrap-reverse items-center  gap-2  "
          >
            <img
              className="h-8 w-8 rounded-3xl"
              src={
                props?.pictureAddress &&
                props?.pictureAddress.includes("classapi.sepehracademy.ir")
                  ? props?.pictureAddress
                  : noImage
              }
              alt=""
            />
            <span className="text-gray3"> {author}</span>
          </div>
          <span className="flex justify-start text-[12px] text-gray4">
            {props?.insertDate && ConvertToPersianDate(props?.insertDate)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Content;
