import React from "react";
import { useParams } from "react-router-dom";
import ReserveCourseByUser from "@core/servises/api/Courses/ReserveCourseByUser";
import i1 from "@assets/images/CourseDetail/CourseDescription/Icon1.png";
import i2 from "@assets/images/CourseDetail/CourseDescription/Icon2.png";
import i3 from "@assets/images/CourseDetail/CourseDescription/Icon3.png";
import i4 from "@assets/images/CourseDetail/CourseDescription/Icon4.png";
import i5 from "@assets/images/CourseDetail/CourseDescription/Icon5.png";
import image from "@assets/images/CourseDetail/CourseDescription/profile.jpg";
import { CiBookmark, CiBookmarkCheck } from "react-icons/ci";

import { faNumber } from "@core/utils/FaNumber";
import { ConvertToPersianDate } from "@core/utils/convertDate";
import { Button, LinearProgress } from "@mui/material";
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import {
  ArchiveCourseAPI,
  DeleteArchiveCourseAPI,
  DeleteLikeCourseAPI,
  DissLikeCourseAPI,
  LikeCourseAPI,
} from "@core/servises/api/Courses/getCourseById";
const CourseDescription = (props) => {
  const { id } = useParams();

  const onSubmit = async () => {
    const obj = { courseid: id };
    ReserveCourseByUser(obj);
  };
  
  console.log("stygu:", props);
  const params = useParams();
  console.log("ppapapap",params);

  const handleArchive = () => {
    props.isUserFavorite ? addArchive() : delArchive();
  };
  const handleLike = () => {
    props.currentUserLike === "0" ? likeCourse() : deleteLikeCourse();
  };
  const handleDissLike = () => {
    props.currentUserDissLike === "0" && dissLikeCourse();
  };

  const addArchive = async () => {
    const result = await ArchiveCourseAPI(obj);
    if (result.success) {
      // toast.success("دوره به لیست علاقه مندی ها اضافه شد");
    } else {
      // toast.error("ارور بدبخت");
    }
  };

  const delArchive = async () => {
    const obj = new FormData();
    obj.append("CourseFavoriteId", props.userFavoriteId);
    const result = await DeleteArchiveCourseAPI(obj);
    if (result) {
      // toast.success("دوره از لیست علاقه مندی ها حذف شد");
    } else {
      // toast.error("ارور بدبخت");
    }
  };

  const likeCourse = async () => {
    const res = await LikeCourseAPI(params);
    if (res.success) {
      // toast.success("دوره با موفقیت لایک شد");
    } else {
      // toast.error("ارور بدبخت");
    }
  };

  const deleteLikeCourse = async () => {
    const obj = new FormData();
    obj.append("CourseLikeId", props.userLikeId);
    const result = await DeleteLikeCourseAPI(obj);
    if (result.success) {
      // toast.success("لایک دوره با موفقیت برداشته شد");
    } else {
      // toast.error("ارور بدبخت");
    }
  };

  const dissLikeCourse = async () => {
    const res = await DissLikeCourseAPI(params);
    if (res.success) {
      // toast.success("دوره با موفقیت دیس لایک شد");
    } else {
      // toast.error("ارور بدبخت");
    }
  };

  return (
    <div className="dv2 bg-white rounded-[20px] dark:bg-[#111827] transition duration-300 ease-in-out  w-[400px]   h-[470px]">
      <div className="item flex  flex-wrap gap-[15px]    w-[300px]   h-[580px]  mx-[50px]          ">
        <div className="bigdiv  w-[300px]  ">
          <div className="dv1">
            <div className="title dark:text-white text-center text-[24px] font-[YekanBakh] transition duration-300 ease-in-out  text-grayy mt-[20px] pt-[10px] border-b-2 border-graylight  ">
              مشخصات دوره{" "}
            </div>
            <div className="info h-[70px] border-b-2 dark:border-b-[1px] border-graylight relative leading-[70px] ">
              <img
                className="w-[30px] h-[30px] absolute right-0  top-[17px]  "
                src={i1}
                alt="image"
              />{" "}
              <h3 className="absolute right-[40px] dark:text-white transition duration-300 ease-in-out text-gray4 ">
                {" "}
                ظرفیت{" "}
              </h3>
              <LinearProgress
                className="w-40 top-8 left-8 rounded-3xl"
                variant="determinate"
                value={props?.capacity}
              />
              <span className=" top-[-1px] i1 absolute dark:text-white transition duration-300 ease-in-out text-grayy text-[18px] ">
                {" "}
                {props?.capacity && faNumber(props?.capacity.toString(), ",")}
              </span>
            </div>
            <div className="info h-[70px] border-b-2 dark:border-b-[1px] transition duration-300 ease-in-out border-graylight relative leading-[70px]   ">
              <img
                className="w-[30px] h-[30px]  absolute right-0  top-[17px]  "
                src={i2}
                alt="image"
              />{" "}
              <h3 className="absolute dark:text-white transition duration-300 ease-in-out right-[40px] text-gray4 ">
                وضعیت دوره{" "}
              </h3>
              <span className="i2 absolute dark:text-white transition duration-300 ease-in-out text-grayy text-[16px]">
                {" "}
                در حال برگزاری
              </span>
            </div>
            <div className="info h-[70px] border-b-2 border-graylight relative leading-[70px] ">
              <img
                className="w-[30px] h-[30px] absolute right-0  top-[17px]  "
                src={i3}
                alt="image"
              />{" "}
              <h3 className="absolute right-[40px] dark:text-white transition duration-300 ease-in-out text-gray4 ">
                تاریخ شروع
              </h3>
              <span className="i3 absolute dark:text-white transition duration-300 ease-in-out text-grayy text-[16px]">
                {" "}
                {props?.startTime && ConvertToPersianDate(props?.startTime)}
              </span>
            </div>
            <div className="info h-[70px] border-b-2 dark:border-b-[1px] transition duration-300 ease-in-out border-graylight relative leading-[70px]">
              <img
                className="w-[30px] h-[30px] absolute right-0  top-[17px]  "
                src={i4}
                alt="image"
              />{" "}
              <h3 className="absolute right-[40px] dark:text-white transition duration-300 ease-in-out text-gray4 ">
                {" "}
                تاریخ پایان{" "}
              </h3>
              <span className="i4 absolute dark:text-white transition duration-300 ease-in-out text-grayy text-[16px]">
                {props?.endTime && ConvertToPersianDate(props?.endTime)}
              </span>
            </div>
            <div className="info h-[105px]  relative leading-[110px] ">
              {" "}
              <button onClick={onSubmit}>
                <img
                  className="w-[125px] h-[70px] absolute left-[190px] top-[17px]  "
                  src={i5}
                  alt="image"
                />
              </button>
              <span dir="rtl" className="i4 absolute text-bluee text-[24px]">
                {" "}
                {props?.cost &&
                  faNumber(props?.cost.toString(), ",")} تومان{" "}
              </span>
            </div>
            <div className="flex justify-center">
              <Button
                onClick={() => handleLike()}
                className="!rounded-full w-8 h-8"
              >
                {/* <AiOutlineLike className="w-8 h-8"/> */}
                {props.currentUserLike === "1" ? (
                  <AiFillLike className="w-8 h-8" />
                ) : (
                  <AiOutlineLike className="w-8 h-8" />
                )}
              </Button >
              <Button onClick={() => handleDissLike()} className="!rounded-full w-8 h-8">
                {/* <AiOutlineDislike className="w-8 h-8" /> */}
                {props.currentUserDissLike === "1" ? (
                  <AiOutlineDislike className="w-8 h-8" />
                ) : (
                  <AiFillDislike  className="w-8 h-8" />
                )}
              </Button>
              <Button
                onClick={() => handleArchive()}
                className="!rounded-full w-8 h-8"
              >
                {/* <CiBookmark className="w-8 h-8" /> */}
                {props.isUserFavorite ? (
                  <CiBookmarkCheck className="w-8 h-8" />
                ) : (
                  <CiBookmark  className="w-8 h-8" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="dv2 dark:bg-[#111827] transition duration-300 ease-in-out bg-white rounded-[20px] relative top-[-90px]     flex gap-[25px]   w-[400px]   h-[100px]    ">
        <div className=" h-[60px]  w-[200px] absolute right-[130px] top-[20px] ">
          <h3 className="text-right dark:text-white transition duration-300 ease-in-out text-gray3 font-[YekanBakhBold] ">
            {" "}
            دکتر بحرالعلوم
          </h3>
          <p className="text-right dark:text-white transition duration-300 ease-in-out text-gray4 font-[YekanBakh] leading-[40px] text-[15px]">
            {" "}
            برنامه نویسی تحت فرانت و بکند
          </p>
        </div>
        <div className=" h-[60px]  w-[70px]  absolute right-[50px] top-[15px] ">
          <img className="rounded-[20px] to" src={image} alt="image" />{" "}
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;
