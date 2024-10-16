import React, { useState } from "react";
import { Link } from "react-router-dom";
import noImage from "@assets/images/Landing/Courses/noImage.jpg"
import levelname from "@assets/images/Landing/Courses/note.svg";
import clock from "@assets/images/Landing/Courses/clock.svg";
import calendar from "@assets/images/Landing/Courses/calendar.svg";
import heart from "@assets/images/Landing/Courses/heart.png";
import { faNumber } from "@core/utils/FaNumber";
import { ConvertToPersianDate } from "@core/utils/convertDate";
const CourseCard = ({
    title,
    teacherName,
    cost,
    tumbImageAddress,
    levelName,
    currentRegistrants,
    dissLikeCount,
    typeName,
    describe,
    id,
    likeCount,
    lastUpdate,
}) => {
    const [like, setLike] = useState("disslike");
  console.log("id:", id);
  const ButtonClick = (arg) => {
    setLike(arg);
  };
  console.log("cost:", cost);
  return (
    <>
      <div className="h-[370px] w-[300px]  flex justify-center bg-[#f0f0f0] m-1 rounded-[20px] flex-wrap pt-3 hover:cursor-pointer max-sm:w-[240px] max-sm:h-[300px]">
        <Link
          to="/CourseDetailPage"
          className="  w-[90%] h-[45%] flex justify-center rounded-[20px] overflow-hidden  "
        >
          <img
            className=" w-[100%] h-[100%] "
            src={tumbImageAddress ? tumbImageAddress : noImage}
            alt=""
          />
        </Link>
        <h3 dir="rtl" className="text-right w-[250px] h-[30px] text-[16px] text-[#263238] myFontMiniBold  mt-[-10px] max-sm:text-[14px] max-sm:pr-5">
          {title}{" "}
        </h3>

        <div className="bg-[#dce3e9] relative  h-[40px] w-[250px] rounded-[24px]  flex justify-center flex-wrap mt-[-20px] mb-1 max-sm:w-[210px] max-sm:h-[30px]">
          <div className="level     max-sm:pt-[7.5px] max-sm:text-[11px] max-sm:pl-2">
            <img
              className=" h-[15px] w-[15px] absolute right-[13px] my-[12px] "
              src={levelname}
            />
            <span className="font-[YekanBakh] text-[#263238] text-[10px] absolute right-[33px] my-[15px]">
              {levelName}
            </span>
          </div>
          <div className="dislike  max-sm:pt-[7.5px] max-sm:text-[11px] max-sm:pl-2">
            <img
              className=" h-[15px] w-[15px] absolute right-[105px] my-[13px] "
              src={clock}
            />
            <span dir="rtl" className="font-[YekanBakh] text-[#263238] text-[13px] absolute right-[125px] my-[12px]">
              20 ساعت
            </span>
          </div>
          <div className="type  bg-[center_right_5px] pr-5  w-1/3 h-full text-[12px] text-[#263238] pt-[11px] pl-3 max-sm:pt-[7.5px] max-sm:text-[11px] max-sm:pl-2">
            <img
              className=" h-[15px] w-[15px] absolute right-[185px] my-[2px] "
              src={calendar}
            />
            <span dir="rtl" className="font-[YekanBakh] text-[#263238] text-[10px] absolute right-[203px] my-[4px]">
             {lastUpdate && ConvertToPersianDate(lastUpdate)   }
            </span>
          </div>
        </div>
        <div className="h-[70px] w-[260px]  mt-[-20px] flex justify-center flex-wrap max-sm:w-[200px] max-sm:h-[60px]">
          <div className="w-1/2 h-full  flex justify-start flex-wrap pt-1">
            <span dir="rtl" className="text-[#263238] text-[14px]">
              0 دانش‌آموز
            </span>
            <div className="w-full"></div>
            <span
              dir="rtl"
              className="text-[#2196F3] text-[16px] max-sm:text-[12px] mt-[30px] "
            >
              {cost && faNumber(cost.toString(), ",")}
              <span className="text-[#263238] mr-[5px] ">تومان </span>
            </span>
          </div>{" "}
          <div className="w-1/2 h-full  flex justify-end flex-wrap pt-1 relative">
            {/* <h2 className="text-[#263238] text-right text-[14px] max-sm:text-[12px]">مدرس: {teacherName}</h2> */}
            <div className="flex justify-end">
              <h2 className="text-[#263238] text-right text-[14px] max-sm:text-[12px] truncate">
                {teacherName} :
              </h2>
              <h2 className="text-[#263238] text-right text-[14px] max-sm:text-[12px]">
                مدرس
              </h2>
            </div>
            <div className="w-[55px] h-[30px] border  bg-[#FFEBEE] rounded-[24px] overflow-hidden  mt-5   max-sm:w-[45px] max-sm:h-[25px] max-sm:top-6">
              <div
                className={like === "disslike" ? `disslike` : `like`}
                onClick={() => {
                  like === "like"
                    ? ButtonClick("disslike")
                    : ButtonClick("like");
                }}
              >
                <img src={heart} alt="" className="mr-0" />
                <h2 className="text-[#F44336] mb-[30px] ">{likeCount}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseCard;
