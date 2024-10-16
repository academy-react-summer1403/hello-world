import React, { useEffect, useState } from "react";
import { getFiltertecnology } from "@core/servises/api/Courses/Filter/Technology";

const Technology = ({setTech}) => {
  const [coursetecnology, setcoursetecnology] = useState([]);

  const getCoursefiltertecnology = async () => {
    const courses = await getFiltertecnology();
    setcoursetecnology(courses);
  };

  useEffect(() => {
    getCoursefiltertecnology();
  }, []);

  return (
    <div className=" border-[#c7c7c7] border-[3px] border-solid w-[280px] cursor-pointer transition-[0.5s] hover:bg-[#ececec] bg-[#fff] rounded-xl mb-[1rem]">
      <input
        type="checkbox"
        id="inputtime"
        className="absolute peer opacity-0 border"
      />

      <label
        htmlFor="inputtime"
        className="font-[YekanBakhBold] w-[200px] text-[#3f3f3f] tracking-[1px] mx-[190px] h-[50px] flex items-center select-none"
      >
          تکنولوژی
          </label>

      <hr className="border-[#c7c7c7] border-[1px] border-solid w-[98%] m-auto" />

      <label
        htmlFor="inputtime"
        className="h-[1rem] w-[1rem] bg-[url('././././assets/img/courses/plus.png')] bg-no-repeat bg-cover absolute top-[17px] left-[20px] peer-checked:bg-[url('././././assets/img/courses/negativ.png')] duration-300"
      >
        {" "}
      </label>
      <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
        <div className="mt-[1rem] mb-[1rem]">
          {coursetecnology.map((item, index) => {
            return (
              <div
                className=" text-right flex justify-end mt-[0.5rem]"
                key={index}
                onClick={() => {setTech(item.id)}}

              >
                <input
                  type="radio"
                  id={item.techName}
                  name="filter"
                  value={item.techName}
                  className="peer hidden"
                />
                <label
                  htmlFor={item.techName}
                  className="block mr-[0.5rem] hover:text-[#09B28B] hover:cursor-pointer"
                  onClick={() => {
                    dispatch(settechnology(item.id));
                  }}
                >
                  {item.techName}
                </label>
                <label
                  htmlFor={item.techName}
                  className="border border-solid border-[black] h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
          peer-checked:bg-[#09B28B] peer-checked:border-none bg-no-repeat bg-cover rounded-full hover:cursor-pointer hover:bg-[#09B28B]"
                  onClick={() => {
                    dispatch(settechnology(item.id));
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

export default Technology;
