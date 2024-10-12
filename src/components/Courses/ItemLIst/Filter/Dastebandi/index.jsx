import React, { useEffect, useState } from "react";
import { getFiltercourse } from "@core/servises/api/Courses/Filter/Dastebandi";

const Dastebandi = () => {
  const [coursetypename, setcoursetypename] = useState([]);

  const getCoursefiltertype = async () => {
    const courses = await getFiltercourse();
    setcoursetypename(courses);
  };

  useEffect(() => {
    getCoursefiltertype();
  }, []);

  return (
    <div className=" border-[#c7c7c7] border-[3px] border-solid w-[280px] cursor-pointer transition-[0.5s] hover:bg-[#ececec] bg-[#fff] rounded-xl mb-[1rem]">
      <input
        type="checkbox"
        id="inputrange"
        className="absolute peer opacity-0 border"
      />

      <label
        for="inputrange"
        className="font-[YekanBakhBold] w-[200px] text-[#3f3f3f] tracking-[1px] mx-[192px] h-[50px] flex items-center select-none"
      >
        {" "}
نوع کلاس      </label>

      <hr className="border-[#c7c7c7] border-[1px] border-solid w-[98%] m-auto" />

      <label
        for="inputrange"
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
              >
                <input
                  type="radio"
                  id={item.typeName}
                  name="filter"
                  value={item.typeName}
                  className="peer hidden"
                />
                <label
                  for={item.typeName}
                  className="block mr-[0.5rem] hover:text-[#09B28B] hover:cursor-pointer"
                  onClick={(e) => {
                    dispatch(setTypeid(item.id));
                  }}
                >
                  {item.typeName}
                </label>
                <label
                  for={item.typeName}
                  className="border border-solid border-[black] h-[1rem] w-[1rem] mt-[0.4rem] mr-[1rem] block 
                            peer-checked:bg-[#09B28B] peer-checked:border-none bg-no-repeat bg-cover rounded-full hover:cursor-pointer hover:bg-[#09B28B]"
                  onClick={(e) => {
                    dispatch(setTypeid(item.id));
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

export default Dastebandi;
