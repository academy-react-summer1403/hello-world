import React from "react";
import { Link } from "react-router-dom";
import Items from "./Items";
import vector from "@assets/images/Landing/Servises/Vector 20.png";
const Courses = () => {
  return (
    <div className="w-full h-[560px] mt-28 flex justify-center flex-wrap max-xx:mb-28">
      <div className="w-[1250px] flex justify-center flex-wrap align-top">
        <div className="w-full h-[16%]">
          <h1 className="font-['YekanBakhBold'] w-full text-center text-[#263238] text-[38px]">
            دوره‌های اموزشی{" "}
          </h1>
          <img className="mx-auto mt-2" src={vector} alt="" />
        </div>

        <div className="w-full h-[70%] flex justify-center flex-wrap max-xx:h-[90%] max-tshort:mt-[-90px] max-tshort:h-[100%]">
          <Items />
        </div>

        <div className="w-full h-[14%] flex justify-center flex-wrap">
          {/* <button className="w-[141px] h-[48px] bg-[#2196F3] rounded-[80px] mt-[5px] text-white pt-1 ">مشاهده همه</button> */}
          <Link
            className="w-[141px] h-[48px] text-center bg-[#2196F3] rounded-[80px] mt-[5px] pt-3 text-white"
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
