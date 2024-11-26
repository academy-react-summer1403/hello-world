import React, { useEffect, useState } from "react";
import Titr from "./Titr";
import Items from "./Items";
import { MyFavoriteNews } from "@core/servises/api/UserPanel/UserPanel/MyFavoriteNews";

const Dore = () => {
  const [userCourse, setUserCourse] = useState([]);

  const getUserCourse = async () => {
    const data = await MyFavoriteNews();
    console.log("report:", data.myFavoriteNews);
    setUserCourse(data.myFavoriteNews);
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
            courseTitle={item.title}
            tumbImageAddress={item.currentImageAddressTumb}
            termName={item.updateDate}
            levelName={item.currentRate}
            fullName={item.currentView}
          />
        );
      })}
    </div>
  );
};

export default Dore;
