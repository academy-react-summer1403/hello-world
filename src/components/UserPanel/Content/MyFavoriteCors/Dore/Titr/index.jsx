import React from "react";

const Titr = () => {
  return (
    <div className="w-[100%] h-[55px] bg-[#3f40ea] rounded-[7px] mb-3 flex justify-center flex-wrap">
      <div className="w-1/6 h-full text-[#fffeff] text-center pr-3 pt-[17px]">
        مدیریت
      </div>
      <div className="w-1/6 h-full text-[#fffeff] text-center pt-[17px]">
        نوع دوره
      </div>
      <div className="w-1/6 h-full text-[#fffeff] text-center pl-5 pt-[17px]">
        آخرین بروزرسانی
      </div>
      <div className="w-1/6 h-full text-[#fffeff] text-center pl-16 pt-[17px]">
        {" "}
        مدرس
      </div>
      <div className="w-1/6 h-full text-[#fffeff] text-center pl-10 pt-[17px]">
        نام دوره{" "}
      </div>
      <div className="w-1/6 h-full text-[#fffeff] text-center pl-10 pt-[17px]">
        تصویر
      </div>
    </div>
  );
};

export default Titr;
