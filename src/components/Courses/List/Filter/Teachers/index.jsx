import React, { useEffect, useState } from "react";
import { getFilterteacher } from "@core/servises/api/Courses/Filter/Teacher";

const Teachers = ({setTecher}) => {
  const [courseteacher, setcourseteacher] = useState([]);

  const getCoursefilterteacher = async () => {
    const courses = await getFilterteacher();
    setcourseteacher(courses);
  };

  useEffect(() => {
    getCoursefilterteacher();
  }, []);

  return (
    <div className=" border-[#ECEFF1] border-b-[1px] border-t-[1px] border-solid w-[280px] cursor-pointer transition-[0.5s] hover:bg-[#f8f8f8] bg-[#fff]">
      <input
        type="checkbox"
        id="inputasatid"
        className="absolute peer opacity-0 border"
      />

      <label
        htmlFor="inputasatid"
        className="font-[YekanBakhMiniBold] text-[#818181] tracking-[1px] mx-[210px] h-[50px] flex items-center select-none"
      >
        اساتید
      </label>

      <label
        htmlFor="inputasatid"
        className="h-[1rem] w-[1rem] bg-[url('././././assets/img/courses/plus.png')] bg-no-repeat bg-cover absolute top-[17px] left-[20px] peer-checked:bg-[url('././././assets/img/courses/negativ.png')] duration-300"
      >
        {" "}
      </label>
      <div className="  max-h-0 overflow-hidden peer-checked:max-h-full">
          <div className=" mt-[0.5rem] mb-[1rem]">
            {courseteacher.map((item, index) => {
              return (
                <div
                  className=" text-right flex justify-end mt-[0.5rem]"
                  key={index}
                  onClick={() => {setTecher(item.teacherId)}}
                >
                  <input
                    type="radio"
                    id={item.fullName}
                    name="filter"
                    value={item.fullName}
                    className="peer hidden"
                  />
                  <label
                    htmlFor={item.fullName}
                    className="block mr-[0.5rem] hover:text-[#2196F3] hover:cursor-pointer"
                    onClick={() => {
                      dispatch(setteacher(item.teacherId));
                    }}
                  >
                    {item.fullName}
                  </label>
                  <label
                    htmlFor={item.fullName}
                    className="border border-solid border-[#c4c4c4] h-[1.1rem] w-[1.1rem] mt-[0.21rem] bg-[#dee5e7] mr-[1rem] block 
          peer-checked:bg-[#2196F3] peer-checked:border-none bg-no-repeat bg-cover rounded-[7px] hover:cursor-pointer hover:bg-[#85c8ff]"
                    onClick={() => {
                      dispatch(setteacher(item.teacherId));
                    }}
                  ></label>
                </div>
              );
            })}
          </div>
        </div>
    </div>
  );
};

export default Teachers;
