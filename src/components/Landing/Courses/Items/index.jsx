import React, { useEffect, useState } from 'react'
import {getcoursetop} from "@core/servises/api/Landing/Courses/GetCourseTop"
import SingleItem from './SingleItem';
const Items = () => {
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
    <>
    {topCourse.map((item, index) => {
      return (
        <SingleItem
          key={index}
          title={item.title}
          teacherName={item.teacherName}
          cost={item.cost}
          tumbImageAddress={item.tumbImageAddress}
          levelName={item.levelName}
          currentRegistrants={item.currentRegistrants}
          describe={item.describe}
          id={item.courseId}
        />
      );
    })}
  </>
  )
}

export default Items;
