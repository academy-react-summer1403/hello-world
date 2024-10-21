import React from "react";
import Banner from "../../../../../../assets/Images/Profile/banner.png";
import { faNumber } from "../../../../../../Core/Utils/FaNumber";

const SuggesCourse = ({ title,teacherName,cost }) => {
  return (
    <div className="w-[480px] h-[90px] rounded-[15px] border-[#eaeaf5] border-[3px] flex justify-center">
      <div className="w-[77%] h-full  flex justify-center">
        <div className="w-[45%] h-full  content-end">
          <h2 className="text-[14px] mb-3 ml-4 text-[#5748c7]">
            {" "}
            تومان  {faNumber(cost.toString())}
          </h2>
        </div>
        <div className="w-[55%] h-full  flex justify-end flex-wrap">
          <h2 className="text-right mt-3.5 mr-2 text-[16px] w-full">
            {title}{" "}
          </h2>
          <h3 className="m-2 text-[11px] text-[#9091a2]"> {teacherName}</h3>
        </div>
      </div>
      <div className="w-[23%] h-full p-2">
        <img className="rounded-[10px]" src={Banner} alt="" />
      </div>
    </div>
  );
};

export default SuggesCourse;
