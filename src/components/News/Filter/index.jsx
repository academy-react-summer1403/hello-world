import LikeDislike from "@core/utils/like and dislikeBT";
import RadioButtonList from "@core/utils/RadioButtonList/indx";
import React, { useState } from "react";

const Filter = ({ setSearch }) => {
  // const [Search, setSearch] = useState("");
  return (
    <div className="flex flex-nowrap justify-between px-5 items-center gap-[20px] w-[1300px] h-[70px] max-xl:w-[1100px] max-xl:pr-10 max-sm:w-[600px] max-mini:flex-wrap max-mini:justify-center max-mini:h-[190px] dark:bg-[#1a1a2e]">
      <div className="div2 w-[600px] bottom-7  bg-white relative max-xl:w-[380px] max-lg:w-[300px] max-md:w-[230px]  max-sm:w-[130px] max-mini:w-[400px] max-mini:flex max-mini:justify-center max-mini:pl-[17px] max-mini:mt-[-110px] dark:bg-[#111827] dark:text-white ">
        <input
          className="  w-[110%] h-[58px]  rounded-[15px] text-right pr-3 bg-white shadow-md myFontMiniBold text-[17px] absolute max-lg:h-[40px] max-md:h-[35px] max-md:top-2 max-md:text-[13px] max-mini:w-[80%] mini:left-[43%] dark:bg-[#111827] dark:text-white"
          type="search"
          placeholder="دنبال چی میگردی ؟؟ "
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default Filter;
