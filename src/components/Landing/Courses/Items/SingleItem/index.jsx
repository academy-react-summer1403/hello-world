import React , { useState }from 'react'
import { Link } from "react-router-dom";
import { faNumber } from '@core/utils/FaNumber';
import p1 from "@assets/images/Landing/Courses/i1.png"
import p2 from "@assets/images/Landing/Courses/level.png"
const SingleItem = ({
    title,
    teacherName,
    cost,
    tumbImageAddress,
    levelName,
    currentRegistrants,
    describe,
    id,
}) => {
    const [like, setLike] = useState("disslike");
  console.log("id:", id);
  const ButtonClick = (arg) => {
    setLike(arg);
  };
  console.log("cost:", cost);

  return (
    <>
    <Link
      to="/CourseDetailPage"
      className="h-[370px] w-[300px] flex justify-center bg-[#f0f0f0] m-1 rounded-[20px] flex-wrap pt-3 hover:cursor-pointer max-sm:w-[240px] max-sm:h-[300px]"
    >
      <img
        className="rounded-[20px] h-[180px] max-sm:h-[140px]"
        src={p1}
        alt=""
      />
      <h3 className="text-right w-[250px] h-[30px] text-[16px] text-[#263238] myFontMiniBold  mt-[-10px] max-sm:text-[14px] max-sm:pr-5">
        {title}{" "}
      </h3>
      <div className="bg-[#dce3e9] h-[40px] w-[250px] rounded-[24px]  flex justify-center flex-wrap mt-[-20px] mb-1 max-sm:w-[210px] max-sm:h-[30px]">
        <div className="Date bg-no-repeat bg-[center_right_10px] pr-2  w-1/3 h-full text-[12px] text-[#263238] pt-[11px] pl-3 max-sm:pt-[7.5px] max-sm:text-[11px] max-sm:pl-2">
          {" "}
          ساعت 14
        </div>
        <div className="Clock bg-no-repeat bg-[center_right_10px] pr-2  w-1/3 h-full text-[12px] text-[#263238] pt-[11px] pl-3 max-sm:pt-[7.5px] max-sm:text-[11px] max-sm:pl-2">
          {" "}
          1آدز 402
        </div>
        <div  className="Dars bg-no-repeat bg-[center_right_5px] pr-5  w-1/3 h-full text-[12px] text-[#263238] pt-[11px] pl-3 max-sm:pt-[7.5px] max-sm:text-[11px] max-sm:pl-2">
          {levelName  }
        </div>
      </div>
      <div className="h-[70px] w-[260px]  mt-[-20px] flex justify-center flex-wrap max-sm:w-[200px] max-sm:h-[60px]">
        <div className="w-1/2 h-full  flex justify-start flex-wrap pt-1">
          <h2 className="text-[#263238] text-[14px]">
            دانش آموز {currentRegistrants}{" "}
          </h2>
          <div className="w-full"></div>
          <h2 className="text-[#263238] text-[14px] max-sm:text-[12px] mt-[30px] ">
            {" "}
            {cost && faNumber(cost.toString(), ",")} تومان{" "}
          </h2>
        </div>{" "}
        <div className="w-1/2 h-full  flex justify-end flex-wrap pt-1 relative">
          {/* <h2 className="text-[#263238] text-right text-[14px] max-sm:text-[12px]">مدرس: {teacherName}</h2> */}
          <div className="flex justify-end">
            <h2 className="text-[#263238] text-right text-[14px] max-sm:text-[12px] truncate">
              {teacherName} :
            </h2>
            <h2 className="text-[#263238] text-right text-[14px] max-sm:text-[12px]">
              مدرس
            </h2>
          </div>
          <div className="w-[49px] h-[30px] bg-[#FFEBEE] rounded-[24px]  mt-5 absolute top-8 max-sm:w-[45px] max-sm:h-[25px] max-sm:top-6">
            <img
              className="mt-2 mr-2 float-right max-sm:w-3 max-sm:h-3"
            //   src={heart}
              alt=""
            />
            <h2 className="text-[#F44336] mt-[6px] ml-2 text-[15px] max-sm:text-[13px]">
              12
            </h2>
          </div>
        </div>
      </div>
    </Link>
  </>
  )
}

export default SingleItem;
