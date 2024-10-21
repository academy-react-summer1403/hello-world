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
    <div className="w-[98%] gap-9 h-[42%] flex justify-center">
      <div className="w-1/2 h-full">
        <div className="w-full h-[80px]  flex justify-end items-center">
          <h2 className="myFontMiniBold text-[26px] text-[#3f3f47]">
            دوره های پیشنهادی{" "}
          </h2>
          <CgBorderStyleDashed className="w-9 h-9 ml-1 text-[#5748c7]" />
        </div>
        <div className="w-full mt-2 h-[250px] flex justify-center flex-wrap items-center">
          {courseSugges.map((item, index) => {
            return (
              <SuggesCours
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
        </div>
      </div>

      <div className="w-1/2 h-full">
        <div className="w-full h-[80px]  flex justify-end items-center">
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
