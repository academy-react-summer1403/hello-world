import React from "react";
import filterIcon from "@assets/images/Courses/filter.svg";
import trashIcon from "@assets/images/Courses/trash.svg";
import p1 from "../../../../assets/images/Courses/arrowDown.png";
import Category from "./Type";
import Teachers from "./Teachers";
import Sort from "./Sort";
import Technology from "./Technology";

const filter = ({
  setType,
  setLevel,
  setTech,
  setTecher,
  setSkelet,
  skeleton,
  setSkeleton,
  getList,
}) => {
  return (
    <div className="max-xx:hidden">
      <div className="w-[295px] rounded-[20px] pt-3 pb-3  dark:bg-[#111827]  flex flex-wrap bg-[#fff] justify-center items-start max-xl:w-[250px] mb-64">
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
        <Category
          setType={setType}
          skeleton={skeleton}
          setSkelet={setSkelet}
          getList={getList}
          setSkeleton={setSkeleton}
        />

        <Teachers
          setTecher={setTecher}
          skeleton={skeleton}
          setSkelet={setSkelet}
          getList={getList}
          setSkeleton={setSkeleton}
        />

        <Sort
          setLevel={setLevel}
          skeleton={skeleton}
          setSkelet={setSkelet}
          getList={getList}
          setSkeleton={setSkeleton}
        />

        <Technology
          setTech={setTech}
          skeleton={skeleton}
          setSkelet={setSkelet}
          getList={getList}
          setSkeleton={setSkeleton}
        />
      </div>
    </div>
  );
};

export default filter;
