import React, { useState } from "react";
import { Link } from "react-router-dom";
import noImage from "@assets/images/Landing/Courses/noImage.jpg";
import levelname from "@assets/images/Landing/Courses/note.svg";
import clock from "@assets/images/Landing/Courses/clock.svg";
import calendar from "@assets/images/Landing/Courses/calendar.svg";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
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
      <div className="h-[370px] w-[300px]  flex justify-center dark:bg-[#111827] transition duration-300 ease-in-out bg-white shadow-sm m-1 rounded-[20px] flex-wrap pt-3 hover:cursor-pointer max-sm:w-[240px] max-sm:h-[300px]">
        <Link
          to={`/CourseDetailPage/${id}`}
          className="  w-[90%] h-[45%] flex justify-center rounded-[20px] overflow-hidden  "
        >
          <img
            className=" w-[100%] h-[100%] "
            src={tumbImageAddress ? tumbImageAddress : noImage}
            alt=""
          />
        </Link>

        <h3
          dir="rtl"
          className="text-right w-[250px]  h-[30px] text-[16px] dark:text-white transition duration-300 ease-in-out text-[#263238] myFontMiniBold  mt-[-10px] max-sm:text-[14px] max-sm:pr-5"
        >
          {title}{" "}
        </h3>

        <div
          dir="rtl"
          className="bg-[#dce3e9]    dark:bg-[#1a1a2e] transition duration-300 ease-in-out bg-graylight h-[40px] w-[90%] rounded-[24px]   flex justify-around flex-wrap mt-[-20px] mb-1 max-sm:w-[210px] max-sm:h-[30px]"
        >
          <div className="level  flex gap-1   max-sm:my-[-7px]  max-sm:text-[11px] max-sm:pl-2 ">
            <img className=" h-[15px] w-[15px]   my-[12px] " src={levelname} />
            <span className="font-[YekanBakh] dark:text-white transition duration-300 ease-in-out text-[#263238] text-[10px] my-[15px]">
              {levelName}
            </span>
          </div>
          <div className="dislike flex gap-1 dark:text-white transition duration-300 ease-in-out max-sm:my-[-7px] max-sm:text-[11px] max-sm:pl-2">
            <img
              // className=" h-[15px] w-[15px] absolute right-[105px] my-[13px] "
              className=" h-[15px] w-[15px] my-[13px] "
              src={clock}
            />
            <span
              dir="rtl"
              // className="font-[YekanBakh] dark:text-white text-[#263238] text-[10px] absolute right-[110px] my-[14px]"
              className="font-[YekanBakh] dark:text-white transition duration-300 ease-in-out text-[#263238] text-[10px] my-[14px]"
            >
              {faNumber("20")} {"ساعت"}
            </span>
          </div>
          <div className="type flex gap-1 dark:text-white transition duration-300 ease-in-out text-[#263238]  pl-3 max-sm:my-[-7px] max-sm:text-[11px] max-sm:pl-2">
            <img className=" h-[15px] w-[15px] my-[13px]  " src={calendar} />
            <span
              dir="rtl"
              className="font-[YekanBakh] dark:text-white transition duration-300 ease-in-out text-[#263238] text-[10px] my-[14px]"
            >
              {lastUpdate && ConvertToPersianDate(lastUpdate)}
            </span>
          </div>
        </div>
        <div className="h-[70px] w-[260px]  mt-[-20px] flex justify-center flex-wrap max-sm:w-[200px] max-sm:h-[60px]">
          <div className="w-1/2 h-full  flex justify-start flex-wrap pt-1">
            <span
              dir="rtl"
              className="dark:text-white transition duration-300 ease-in-out text-[#263238] text-[14px]"
            >
              0 دانش‌آموز
            </span>
            <div className="w-full"></div>
            <span
              dir="rtl"
              className="text-[#2196F3] text-[16px] max-sm:text-[12px] mt-[30px] "
            >
              {cost && faNumber(cost.toString(), ",")}
              <span className="dark:text-white transition duration-300 ease-in-out text-[#263238] mr-[5px] ">
                تومان{" "}
              </span>
            </span>
          </div>{" "}
          <div className="w-1/2 h-full  flex justify-end flex-wrap pt-1 relative">
            {/* <h2 className="text-[#263238] text-right text-[14px] max-sm:text-[12px]">مدرس: {teacherName}</h2> */}
            <div className="flex justify-end">
              <h2 className="dark:text-white transition duration-300 ease-in-out text-[#263238] text-right text-[14px] max-sm:text-[12px] truncate">
                {teacherName} :
              </h2>
              <h2 className="dark:text-white transition duration-300 ease-in-out text-[#0f1316] text-right text-[14px] max-sm:text-[12px]">
                مدرس
              </h2>
            </div>
            <div
              dir="rtl"
              className="w-[51px] h-[32px]   bg-melopink rounded-[24px] overflow-hidden  mt-5   max-sm:w-[45px] max-sm:h-[25px] max-sm:top-6"
            >
              <div
                className="flex justify-center items-center gap-1"
                onClick={() => {
                  like === "like"
                    ? ButtonClick("disslike")
                    : ButtonClick("like");
                }}
              >
                {like === "like" ? (
                  <GoHeartFill color="#F44336" />
                ) : (
                  <GoHeart color="#F44336" />
                )}

                <span className="text-[#F44336] pt-1 ">
                  {likeCount && faNumber(likeCount.toString(), ",")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
