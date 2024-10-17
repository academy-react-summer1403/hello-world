import React, { useEffect, useState } from "react";
import { getFiltercourse } from "@core/servises/api/Courses/Filter/Category";
import { IoIosArrowDown } from "react-icons/io";

const Category = ({ setType }) => {
  const [coursetypename, setcoursetypename] = useState([]);

  const getCoursefiltertype = async () => {
    const courses = await getFiltercourse();
    setcoursetypename(courses);
  };

  useEffect(() => {
    getCoursefiltertype();
  }, []);

  return (
    <label className=" border-[#ECEFF1] border-b-[1px] border-t-[1px] border-solid w-[260px] cursor-pointer transition-[0.5s] hover:bg-[#f8f8f8] bg-[#fff]">
      <input
        type="checkbox"
        id="inputrange"
        className="absolute peer opacity-0 border"
      />

      <IoIosArrowDown className="w-6 h-7 ml-3 text-[#585858] mt-3 absolute" /> 

      <label
        htmlFor="inputrange"
        className="font-[YekanBakhMiniBold] w-[200px] text-[#818181] tracking-[1px] mx-[182px] h-[50px] flex items-center select-none"
      >
        {" "}
        نوع کلاس{" "}
      </label>

      <label
        htmlFor="inputrange"
        className="h-[1rem] w-[1rem] bg-[url('././././assets/img/courses/plus.png')] bg-no-repeat bg-cover absolute top-[17px] left-[20px] peer-checked:bg-[url('././././assets/img/courses/negativ.png')] duration-300"
      >
        {" "}
      </label>
      <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
        <div className="mt-[1rem] mb-[1rem]">
          {coursetypename.map((item, index) => {
            return (
              <div
                className=" text-right flex justify-end mt-[0.5rem]"
                key={index}
                onClick={() => {
                  setType(item.id);
                }}
              >
                <input
                  type="radio"
                  id={item.typeName}
                  name="filter"
                  value={item.typeName}
                  className="peer hidden"
                />
                <label
                  htmlFor={item.typeName}
                  className="block mr-[0.5rem] hover:text-[#2196F3] hover:cursor-pointer"
                  onClick={(e) => {
                    dispatch(setTypeid(item.id));
                  }}
                >
                  {item.typeName}
                </label>
                <label
                  htmlFor={item.typeName}
                  className="border border-solid border-[#c4c4c4] h-[1.1rem] w-[1.1rem] mt-[0.21rem] bg-[#dee5e7] mr-[1rem] block 
          peer-checked:bg-[#2196F3] peer-checked:border-none bg-no-repeat bg-cover rounded-[7px] hover:cursor-pointer hover:bg-[#85c8ff]"
                  onClick={(e) => {
                    dispatch(setTypeid(item.id));
                  }}
                ></label>
              </div>
            );
          })}
        </div>
      </div>
    </label>
  );
};

export default Category;
