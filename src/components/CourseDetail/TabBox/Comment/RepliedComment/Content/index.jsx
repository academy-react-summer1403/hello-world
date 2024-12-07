import React from "react";
import noImage from "@assets/images/Landing/Courses/noImage.jpg";
import { ConvertToPersianDate } from "@core/utils/convertDate";
import heart from "@assets/images/CourseDetail/Comments/heart.png";

// import messages from "@assets/images/CourseDetail/Comments/messages.svg";

const Content = ({
  props,
  author,
  describe,
  pictureAddress,
  likeCount,
  CommentId,
  courseId,
  insertDate,
}) => {
  return (

    <>
    <div className="w-[780px] border-r-2 border-gray4-50  rounded-xl flex content-end flex-col	flex-wrap ">
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
          <span className="dark:text-white transition duration-300 ease-in-out text-gray3">
            {" "}
            {author}
          </span>
        </div>
        <span className="flex justify-start text-[12px] dark:text-white transition duration-300 ease-in-out text-gray4">
          {insertDate && ConvertToPersianDate(insertDate)}
        </span>
      </div>

      <div className="  flex justify-end">
        <span
          dir="rtl"
          className=" text-xs text-right dark:text-white transition duration-300 ease-in-out text-gray4 mt-3"
        >
          {describe}
        </span>
      </div>
      <div className="  flex gap-3  flex-wrap flex-row-reverse w-[70%]">
       
      </div>
      <div className=" flex justify-end mt-8   "></div>
    </div>
  </>


       
    
    // <div>
    //   <div className="w-[780px] border-r-4 border-gray4-500 rounded-xl flex content-end flex-col	flex-wrap border">
    //     <div dir="rtl" className="flex flex-wrap-reverse justify-between  ">
    //       <div
    //         dir="rtl"
    //         className=" flex flex-wrap-reverse items-center  gap-2  "
    //       >
    //         <img
    //           className="h-8 w-8 rounded-3xl"
    //           src={
    //             props?.pictureAddress &&
    //             props?.pictureAddress.includes("classapi.sepehracademy.ir")
    //               ? props?.pictureAddress
    //               : noImage
    //           }
    //           alt=""
    //         />
    //         <span className="text-gray3"> {author}</span>
    //       </div>
    //       <div className="  flex justify-end">
    //       <span
    //         dir="rtl"
    //         className=" text-xs text-right dark:text-white transition duration-300 ease-in-out text-gray4 mt-3"
    //       >
    //         {describe}
    //       </span>
    //     </div>
    //       <span className="flex justify-end left-[10px] text-[12px] dark:text-white border transition duration-300 ease-in-out text-gray4">
    //         {insertDate && ConvertToPersianDate(insertDate)}
    //       </span>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Content;
