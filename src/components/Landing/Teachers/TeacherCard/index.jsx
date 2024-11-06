import React from "react";
import noImage from "@assets/images/Landing/Courses/noImage.jpg";

const TeacherCard = ({
  fullName,
  courseCounts,
  pictureAddress,
  newsCount,
  index,
}) => {
  return (
    <div className="me-5" style={{ marginTop: index % 2 !== 0 ? "55px" : "0" }}>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="relative">
          <img
            className="w-[220px] h-[230px]  rounded-[15px] object-cover m-5"
            src={pictureAddress ? pictureAddress : noImage}
            alt=""
          />
          <div className="landingTeacherItemCoursesCount"></div>
        </div>
        <h4 className="dark:text-white transition duration-300 ease-in-out mt-2 font-[700] text-[24px] text-text1 dark:text-darkText">
          {fullName}
        </h4>
        <span className="dark:text-white transition duration-300 ease-in-out font-[500] text-text2 dark:text-darkText text-center">
          {newsCount} مقاله
        </span>
      </div>
    </div>
  );
};

export default TeacherCard;
