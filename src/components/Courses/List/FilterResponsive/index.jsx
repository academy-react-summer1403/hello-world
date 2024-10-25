import React from "react";
import filterIcon from "@assets/images/Courses/filter.svg";
import trashIcon from "@assets/images/Courses/trash.svg";
import p1 from "../../../../assets/images/Courses/arrowDown.png";
import Category from "./Type";
import Teachers from "./Teachers"
import Sort from "./Sort"
import Technology from "./Technology"

const FilterResponsive = ({setType,setLevel,setTech,setTecher}) => {
  return (
    <div  >
      <div className="w-[295px] mt-1 font-[YekanBakh] rounded-[20px] pt-3 pb-3  dark:bg-[#111827]  flex flex-wrap bg-[#fff] justify-center items-start mb-64">
        <div className=" w-[280px] max-xl:w-[230px] h-[50px] mb-6 dark:bg-[#1a1a2e] bg-grayyy rounded-[15px] relative ">
          <img
            className=" absolute right-[10px] top-[15px]  "
            src={filterIcon}
            alt="image"
          />
          <span className=" font-[YekanBakh] dark:text-white text-gray absolute right-[35px] top-[15px]  ">
            {" "}
            فیلتر{" "}
          </span>

          <button className="w-[32px] h-[32px] bg-red-500 rounded-[12px] flex justify-center absolute left-[10px] top-[8px] items-center">
            <img src={trashIcon} />
          </button>
        </div>
        <Category setType={setType} />

        <Teachers setTecher={setTecher}/>

        <Sort setLevel={setLevel}/>

        <Technology setTech={setTech}/>

      </div>
    </div>

  );
};

export default FilterResponsive;
