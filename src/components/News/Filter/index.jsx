import LikeDislike from "@core/utils/like and dislikeBT";
import RadioButtonList from "@core/utils/RadioButtonList/indx";
import React from "react";

const Filter = () => {
  return (
    <div className="flex flex-nowrap justify-between px-5 items-center gap-[20px] w-[1300px] h-[70px] max-xl:w-[1100px] max-xl:pr-10 max-sm:w-[600px] max-mini:flex-wrap max-mini:justify-center max-mini:h-[190px] dark:bg-[#1a1a2e]">
      <div className="div1  w-[400px] h-[70px]  rounded-[20px] bg-white max-sm:w-[320px] max-mini:w-[100%] max-mini:flex dark:bg-[#1a1a2e]">
        <div className="accardion w-[600px] flex justify-end gap-[20px] max-xl:gap-0 max-mini:justify-center dark:bg-[#1a1a2e]">
        <RadioButtonList />  

        </div>
      </div>

      <div className="div2 w-[600px] bottom-5  bg-white relative max-xl:w-[380px] max-lg:w-[300px] max-md:w-[230px]  max-sm:w-[130px] max-mini:w-[400px] max-mini:flex max-mini:justify-center max-mini:pl-[17px] max-mini:mt-[-110px] dark:bg-[#111827] text-white  ">
        <input
          className=" w-[110%] h-[50px] top-1 rounded-[20px] text-right pr-3 bg-[#ebebeb] myFontMiniBold text-[17px] absolute max-lg:h-[40px] max-md:h-[35px] max-md:top-2 max-md:text-[13px] max-mini:w-[80%] mini:right-0 dark:bg-[#111827] text-white"
          type="search"
          placeholder="دنبال چی میگردی ؟؟ "
        ></input>
      </div>
    </div>
  );
};

export default Filter;
