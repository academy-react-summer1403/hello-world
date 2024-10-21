import React from "react";
import Prof from "./Prof";
import List from "./List";

const LeftData = () => {
  return (
    <div className="h-[850px] w-[22%] rounded-[23px] p-4 bg-gradient-to-b from-[#8b80f6] to-[#2f12b8] flex justify-center flex-wrap content-start">
      <Prof />
      <List />
    </div>
  );
};

export default LeftData;
