import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

const Items = ({ view,courseList }) => {
  // const [courseList, setCourseList] = useState([]);

  // console.log("crs", courseList);

  // const getList = async () => {
  //   const params = {
  //     Count: 5,
  //   };
  //   const courses = await getCourseList(params);
  //   console.log("courses:", courses);
  //   console.log("courses filter:", courses.courseFilterDtos);
  //   setCourseList(courses.courseFilterDtos);
  // };
  // useEffect(() => {
  //   getList();
  // }, []);

  return (
    <>
      {courseList.map((item, index) => {
        return (
          <CourseCard
            view={view}
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
          />
        );
      })}
    </>
  );
};

export default Items;
