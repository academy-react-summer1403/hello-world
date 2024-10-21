import React, { useEffect, useState } from "react";
import Titr from "./Titr";
import Items from "./Items";
import { GetCourses } from "@core/servises/api/UserPanel/UserPanel/GetMyCourses";

const Dore = () => {
  const [userCourse, setUserCourse] = useState([]);

  const getUserCourse = async () => {
    const data = await GetCourses();
    console.log("report:", data.listOfMyCourses);
    setUserCourse(data.listOfMyCourses);
  };

  useEffect(() => {
    getUserCourse();
  }, []);

  return (
    <div className="w-[95%] h-[520px]  mt-8 flex justify-center flex-wrap content-start">
      <Titr />
      {userCourse.map((item, index) => {
        return (
          <Items
            key={index}
            courseTitle={item.courseTitle}
            tumbImageAddress={item.tumbImageAddress}
            termName={item.termName}
            paymentStatus={item.paymentStatus}
            fullName={item.fullName}
          />
        );
      })}
    </div>
  );
};

export default Dore;
