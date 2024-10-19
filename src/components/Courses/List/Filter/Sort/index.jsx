import React, { useEffect, useState } from "react";
import { getFilterlevel } from "@core/servises/api/Courses/Filter/Sort";

const Sort = ({ setLevel }) => {
  const [courselevel, setcourselevel] = useState([]);

  const getCoursefilterlevel = async () => {
    const courses = await getFilterlevel();
    setcourselevel(courses);
  };

  useEffect(() => {
    getCoursefilterlevel();
  }, []);

  return (
    <div className=" border-[#ECEFF1] border-b-[1px] border-t-[1px] border-solid w-[280px] cursor-pointer transition-[0.5s] hover:bg-[#f8f8f8] bg-[#fff]">
      <input
        type="checkbox"
        id="inputmoratab"
        className="absolute peer opacity-0 border"
      />

      <label
        htmlFor="inputmoratab"
        className="font-[YekanBakhMiniBold] text-[#818181] w-[200px] tracking-[1px] mx-[220px] h-[50px] flex items-center select-none"
      >
        سطح
      </label>

      <label
        htmlFor="inputmoratab"
        className="h-[1rem] w-[1rem] bg-[url('././././assets/img/courses/plus.png')] bg-no-repeat bg-cover absolute top-[17px] left-[20px] peer-checked:bg-[url('././././assets/img/courses/negativ.png')] duration-300"
      >
        {" "}
      </label>
      <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
        <div className="mt-[1rem] mb-[1rem]">
          {courselevel.map((item, index) => {
            return (
              <div
                className=" text-right flex justify-end mt-[0.5rem]"
                key={index}
                onClick={() => {
                  setLevel(item.id);
                }}
              >
                <input
                  type="radio"
                  id={item.levelName}
                  name="filter"
                  value={item.levelName}
                  className="peer hidden"
                />
                <label
                  htmlFor={item.levelName}
                  className="block mr-[0.5rem]  hover:text-[#2196F3] hover:cursor-pointer"
                  onClick={() => {
                    dispatch(setlevelid(item.id));
                  }}
                >
                  {item.levelName}
                </label>
                <label
                  htmlFor={item.levelName}
                  className="border border-solid border-[#c4c4c4] h-[1.1rem] w-[1.1rem] mt-[0.21rem] bg-[#dee5e7] mr-[1rem] block 
          peer-checked:bg-[#2196F3] peer-checked:border-none bg-no-repeat bg-cover rounded-[7px] hover:cursor-pointer hover:bg-[#85c8ff]"
                  onClick={() => {
                    dispatch(setlevelid(item.id));
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

export default Sort;
