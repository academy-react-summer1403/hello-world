import React from "react";
import HeadTitle from "./HeadTitle";
import Search from "./Search";
import Dore from "./Dore";

const MyList = () => {
  return (
    <div className="h-[850px] w-[76.5%] overflow-y-auto	 rounded-[23px] flex justify-center relative flex-wrap p-4 bg-[#ffffff] content-start">
      <HeadTitle />
      <Search />
      <Dore />
    </div>
  );
};

export default MyList;
