import React from "react";

const Titr = () => {
  return (
    <div className="w-[100%] h-[55px] bg-[#3f40ea] rounded-[7px] mb-3 flex justify-center flex-wrap">
      <div className=" h-full text-[#fffeff] text-center pr-3 pt-[17px] mr-[10%]">
        مدیریت
      </div>
      <div className=" h-full text-[#fffeff] text-center pt-[17px] mr-[10%]">
      امتیاز
      </div>
      <div className=" h-full text-[#fffeff] text-center  pt-[17px] mr-[10%]">
        آخرین بروزرسانی
      </div>
      <div className=" h-full text-[#fffeff] text-center pr-[5%] pt-[17px] mr-[10%]">
        {" "}
        تعداد بازدید
      </div>
      <div className=" h-full text-[#fffeff] text-center pl-10 pt-[17px] mr-[10%]">
      عنوان{" "}
      </div>
      <div className=" h-full text-[#fffeff] text-center pl-[6%] pt-[17px]">
        تصویر
      </div>
    </div>
  );
};

export default Titr;
