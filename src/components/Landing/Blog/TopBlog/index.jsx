import React from "react";
import { Link } from "react-router-dom";
import view from "@assets/images/Landing/Blogs/view.png";
import noImage from "@assets/images/Landing/Blogs/noImage.jpg";

const TopBlog = ({
  title,
  miniDescribe,
  currentView,
  currentImageAddressTumb,
}) => {
  return (
    <div className=' w-[597px] h-[570px] mt-[-70px] flex justify-end flex-wrap max-xl:hidden'
    >
        <Link>
       

        </Link>
        
      <div className="laptop w-[90%] h-[60%] rounded-[24px] bg-no-repeat bg-right relative border">
         <div className="   w-[100%] h-[100%]   float-left">  <img
            className="rounded-[24px]"
            src={currentImageAddressTumb ? currentImageAddressTumb : noImage}
            alt=""
          /></div>
      <h2 className="absolute bottom-[-110px] right-0">{title}</h2>

      </div>
      <div className=" w-[97%] h-[38%] flex justify-end flex-wrap pt-4">
        <div className="date w-[100px] h-[40px] bg-[#DAEEFF] rounded-[80px] bg-no-repeat bg-[center_right_1rem] text-right text-[13px] font-bold text-[#2196F3] pr-9 pt-[13px]">
          1402/7/2
        </div>
        <div className="view w-[100px] h-[40px] bg-[#DAEEFF] rounded-[80px] ml-3  text-right text-[13px] font-bold text-[#2196F3] pr-9 pt-3">
          <img src={view} />
          {/* {currentView} بازدید */}
        </div>

        <h2 className=" w-full text-[#263238] text-[30px] text-right font-semibold"></h2>
        <h4 className=" w-full text-[#455A64] text-[14px] text-right font-medium">
          {miniDescribe}
        </h4>
      </div>
    </div>
  );
};

export default TopBlog;
