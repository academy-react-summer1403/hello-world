import React from "react";
import HeadTitle from "../MyList/HeadTitle";
import Search from "./Search";
import Dore from "./Dore";

const MyFavoriteCors = () => {
  return (
    <div className="h-[850px] overflow-y-auto	 w-[76.5%] rounded-[23px] flex justify-center relative flex-wrap p-4 bg-[#ffffff] content-start">
      <HeadTitle />
      <Search />
      <Dore />
    </div>
  );
};

export default MyFavoriteCors;
