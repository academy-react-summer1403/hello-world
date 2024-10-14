import React from "react";
const NewsItem = (props) => {
  return (
    <div className="w-[32%] h-[450px] border mb-5 border-[#dbdbdb] rounded-[45px] bg-[#f8f8f8] py-5 flex justify-center flex-wrap items-start">
      <img
        className="w-[300px] mb-2 rounded-2xl "
        src={props?.currentImageAddressTumb}
        alt=""
      />
      <h2 className=" myFontMiniBold text-[18px] text-right w-[90%] text-[#263238]">
        {props?.title}
      </h2>
      <h2 className="text-[14px] text-right w-[90%] text-[#455A64]">
        {props?.miniDescribe}
      </h2>
      <div className="w-[90%] h-8 flex flex-nowrap items-center justify-end ">
        <div className="bg-no-repeat bg-[center_right_1rem] text-[14px] mr-1 text-[#2196F3]">
          {props?.currentView} بازدید
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
