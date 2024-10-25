import React, { useEffect, useState } from "react";
import Titr from "./Titr";
import Items from "./Items";
import CourseReserve from "@core/servises/api/UserPanel/UserPanel/CourseReserve";

const Dore = () => {
  const [userReserve, setUserReserve] = useState([]);

  const getUserReserve = async () => {
    const data = await CourseReserve();
    console.log("report:", data);
    setUserReserve(data);
  };

  useEffect(() => {
    getUserReserve();
  }, []);

  return (
    <div className="w-[95%] max-h-[520px] h-[520px]  mt-8 flex justify-center flex-wrap content-start">
      <Titr />
      {userReserve.map((item, index) => {
        return (
          <Items
            key={index}
            courseName={item.courseName}
            accept={item.accept}
          />
        );
      })}
    </div>
  );
};

export default Dore;
