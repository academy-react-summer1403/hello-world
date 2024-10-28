import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import vector from "@assets/images/Landing/Servises/Vector 20.svg";
import CourseCard from "./CourseCard";
import {getcoursetop} from "@core/servises/api/Landing/Courses/GetCourseTop"
const Courses = () => {
  const [topCourse, setTopCourse] = useState([]);

  const getList = async () => {
    const params = {
      Count: 4,
    };
    const courses = await getcoursetop(params);
    // console.log("courses:",courses)
    setTopCourse(courses);
  };

  useEffect(() => {
    getList();
  }, []);
  return (
    <div className="w-full h-[560px] mt-28 flex justify-center flex-wrap max-xx:mb-28">
      <div className="w-[1300px]  flex justify-center flex-wrap align-top">
        <div className="w-full h-[16%]">
          <h1 className="font-['YekanBakhBold'] w-full text-center text-[#263238] text-[38px] dark:text-white">
            دوره‌های اموزشی{" "}
          </h1>
          <img className="mx-auto mt-1" src={vector} alt="" />
        </div>

        <div className="w-full h-[70%] gap-[8px] flex justify-center flex-wrap max-ll:w-[20%] max-ll:h-[20%] ma-xll:flex-wrap ">
        {topCourse.map((item, index) => {
        return (
          <CourseCard
          key={index}
          title={item.title}
          teacherName={item.teacherName}
          cost={item.cost}
          tumbImageAddress={item.tumbImageAddress}
          levelName={item.levelName}
          currentRegistrants={item.currentRegistrants}
          describe={item.describe}
          id={item.courseId}
          likeCount={item.likeCount}
          dissLikeCount={item.dissLikeCount}
          typeName={item.typeName}
          lastUpdate={item.lastUpdate}
          />
        );
      })}
        </div>

        <div className="w-full h-[14%] flex justify-center flex-wrap">
          {/* <button className="w-[141px] h-[48px] bg-[#2196F3] rounded-[80px] mt-[5px] text-white pt-1 ">مشاهده همه</button> */}
          <Link
            className="w-[141px] h-[48px] text-center bg-[#2196F3] rounded-[80px] mt-[30px] pt-3 text-white"
            to="/CoursesPage"
          >
            {" "}
            مشاهده همه
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
