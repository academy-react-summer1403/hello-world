import React, { useEffect, useState } from "react";
import { CgBorderStyleDashed } from "react-icons/cg";
import LastDesign from "./LastDesign";
import SuggesCours from "./LastDesign/SuggesCourse";
import { SuggesCourse } from "@core/servises/api/UserPanel/UserPanel/SuggestedCourse";

const BuyItems = () => {
  const [courseSugges, setCourseSugges] = useState([]);

  const getList = async () => {
    const params = {
      Count: 2,
    };
    const courses = await SuggesCourse(params);
    console.log("courses:", courses);
    setCourseSugges(courses);
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="w-[100%] gap-9 h-[35%] flex border justify-end">
      <div className="w-1/2 h-full">
        <div className="w-full h-[30px] flex justify-end items-center">
          <h2 className="myFontMiniBold text-[26px] text-[#3f3f47]">
            اخرین دوره ثبت شده{" "}
          </h2>
          <CgBorderStyleDashed className="w-9 h-9 ml-1 text-[#5748c7]" />
        </div>

        <div className="w-full mt-2 h-[250px] flex justify-center flex-wrap items-center">
          <LastDesign />
          <LastDesign />
        </div>
      </div>
    </div>
  );
};

export default BuyItems;
