import React from "react";
import Content from "./Content";

function Partition() {
  return (
    <>
      <div className="Body relative top-0 w-[95%] h-[80%] flex justify-center max-short:mt-[-50px]">
        <div className="CodingL max-xl:bg-[length:115px] max-lg:bg-none w-[22%] h-[100%] flex justify-center "></div>
        <Content/>
        <div className="CodingR max-xl:bg-[length:115px] max-lg:bg-none w-[22%] h-[100%] flex justify-center"></div>
      </div>
    </>
  );
}

export default Partition;
