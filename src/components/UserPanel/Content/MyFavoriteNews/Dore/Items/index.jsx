import React, { useEffect } from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import Pic from "../../../../../../assets/Images/Profile/items.png";
import { Rating, Stack } from "@mui/material";
import { ConvertToPersianDate } from "@core/utils/convertDate";
// import { GetCourses } from "../../../../../../Core/Services/Api/UserPanel/GetMyCourses";

const Items = ({tumbImageAddress,courseTitle,termName,levelName,fullName}) => {
  useEffect(() => {
    // GetCourses()
  }, []);
  return (
    <div className="w-[100%] h-[55px] hover:bg-[#e5e0ff] transition-[0.1s] rounded-[7px] mb-2 flex justify-center flex-wrap">
      <div className="w-1/6 h-full flex justify-start gap-3 pl-10 flex-wrap text-[#36343f] text-center pt-[17px]">
        <button className="w-[27px] h-full flex justify-center">
          <MdOutlineDeleteSweep className="w-7 h-7 mt-[-2.7px] text-[#f9314b]" />
        </button>
        <button className="w-[27px] h-full flex justify-center">
          <FaRegEye className="w-6 h-6 mt-[-1px] text-[#8680ca]" />
        </button>
      </div>
      <div className="w-1/6 h-full text-[#36343f] myFont text-center pt-[17px]">
      <Stack>
            <Rating name="size-medium" value={levelName} />
          </Stack>      </div>
      <div className="w-1/6 h-full text-[#36343f] myFont text-center pl-5 pt-[17px]">
      {termName &&
                    ConvertToPersianDate(termName)}
      </div>
      <div className="w-1/6 h-full text-[15px] myFont text-[#36343f] text-center pl-10 flex items-center justify-center">
        {" "}
        {fullName}
      </div>
      <div className="w-1/6 h-full myFont text-[#36343f] text-center pl-10 flex items-center justify-center">
        {courseTitle}
      </div>
      <div className="w-1/6 h-full text-[#36343f] text-center pl-16 pt-[7px]">
        <img
          className="w-[60px] rounded-[10px] h-[40px]"
          src={tumbImageAddress}
          alt="photo"
        />
      </div>
    </div>
  );
};

export default Items;
