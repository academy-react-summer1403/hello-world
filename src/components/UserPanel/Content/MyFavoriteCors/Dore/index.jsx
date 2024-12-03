import React, { useEffect, useState } from "react";
import Titr from "./Titr";
import Items from "./Items";
import { MyFavoriteCors } from "@core/servises/api/UserPanel/UserPanel/MyFavoriteCors";

const Dore = () => {
  const [userCourse, setUserCourse] = useState([]);

  const getUserCourse = async () => {
    const data = await MyFavoriteCors();
    console.log("report:", data.favoriteCourseDto);
    setUserCourse(data.favoriteCourseDto);
  };

  useEffect(() => {
    getUserCourse();
  }, []);

  return (
    <div className="w-[95%] h-[520px] max-h-[520px]  mt-8 flex justify-center flex-wrap content-start">
      <Titr />
      {userCourse.map((item, index) => {
        return (
          <Items
            key={index}
            courseTitle={item.courseTitle}
            tumbImageAddress={item.tumbImageAddress}
            termName={item.lastUpdate}
            levelName={item.levelName}
            fullName={item.teacheName}
          />
        );
      })}
    </div>
  );
};

export default Dore;
