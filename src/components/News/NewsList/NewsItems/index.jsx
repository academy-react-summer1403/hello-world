import React from "react";
import { useNavigate } from "react-router-dom";
const NewsItem = (props) => {
   const navigate = useNavigate()
   
    return (
    <div onClick={()=>navigate("/NewsDetailPage/"+ props?.id)} className="w-[32%] h-[450px]  mb-5  rounded-[45px] bg-[#f8f8f8] py-5 flex justify-center flex-wrap items-start  dark:bg-[#111827]">
      <img
        className="w-[300px] mb-2 rounded-2xl "
        src={props?.currentImageAddressTumb}
        alt=""
      />
      <h2 className=" myFontMiniBold text-[18px] text-right w-[90%] text-[#263238] dark:text-[#ffff]">
        {props?.title}
      </h2>
      <h2 className="text-[14px] text-right w-[90%] text-[#455A64] dark:text-[#ffff]">
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
