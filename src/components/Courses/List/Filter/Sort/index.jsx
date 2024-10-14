import React, { useEffect, useState } from "react";
import { getFilterlevel } from "@core/servises/api/Courses/Filter/Sort";


const Sort = () => {
  const [courselevel, setcourselevel] = useState([]);

  const getCoursefilterlevel = async () => {
    const courses = await getFilterlevel();
    setcourselevel(courses);
  };

  useEffect(() => {
    getCoursefilterlevel();
  }, []);

  return (
    <div className=" border-[#c7c7c7] border-[3px] border-solid w-[280px] cursor-pointer transition-[0.5s] hover:bg-[#ececec] bg-[#fff] rounded-xl mb-[1rem]">
      <input
        type="checkbox"
        id="inputmoratab"
        className="absolute peer opacity-0 border"
      />

      <label
        for="inputmoratab"
        className="font-[YekanBakhBold] w-[200px] text-[#3f3f3f] tracking-[1px] mx-[190px] h-[50px] flex items-center select-none"
      >
        مرتب سازی
      </label>

      <hr className="border-[#c7c7c7] border-[1px] border-solid w-[98%] m-auto" />

      <label
        for="inputmoratab"
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
              >
                <input
                  type="radio"
                  id={item.levelName}
                  name="filter"
                  value={item.levelName}
                  className="peer hidden"
                />
                <label
                  for={item.levelName}
                  className="block mr-[0.5rem] hover:text-[#09B28B] hover:cursor-pointer"
                  onClick={() => {
                    dispatch(setlevelid(item.id));
                  }}
                >
                  {item.levelName}
                </label>
                <label
                  for={item.levelName}
                  className="border border-solid border-[black] h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
          peer-checked:bg-[#09B28B] peer-checked:border-none bg-no-repeat bg-cover rounded-full hover:cursor-pointer hover:bg-[#09B28B]"
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
