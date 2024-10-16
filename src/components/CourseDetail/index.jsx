import React from "react";
import CourseImage from "./CourseImage";
import CourseDescription from "./CourseDescription";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCourseById } from "@core/servises/api/Courses/getCourseById";
import CourseBox from "./CourseBox";
const CourseDetail = () => {
  const [data, setdata] = useState();
  const { id } = useParams();
  console.log("id:", id);
  const getList = async (id) => {
    try {
      const courses = await getCourseById(id);
      console.log("courses:", courses);
      setdata(courses);
    } catch (error) {
      throw new Error("ERROR: ", error);
    }
  };
  useEffect(() => {
    getList(id);
  }, []);
  return (
    <div className="bg-white2">
      <div className="w-full bg-white2 flex py-14 justify-center ">
        <div className="flex w-[90%] flex-wrap flex-row-reverse gap-[25px] justify-center  mt-[20px]  ">
          <CourseImage
            title={data?.title}
            miniDescribe={data?.miniDescribe}
            imageAddress={data?.imageAddress}
          />
          <CourseDescription
            capacity={data?.capacity}
            startTime={data?.startTime}
            endTime={data?.endTime}
            cost={data?.cost}
          />
        </div>
      </div>
      <div className="flex w-[88%] flex-wrap justify-end py-[-30px]">
        <CourseBox />
      </div>
      {/* <TabComponent id={id} /> */}
      {/* <Slider /> */}
    </div>
  );
};

export default CourseDetail;
