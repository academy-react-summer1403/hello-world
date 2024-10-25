import { Typewriter } from "@components/common/Typewriter";
import { typeWriterOptions } from "@components/common/Typewriter/typeWriterOptions";
import React from "react";

function Titr() {
  return (
    <div className="Titr w-[100%] h-[30%] mt-5 flex justify-center flex-wrap">
      <h4 className="w-[100%] h-[15%] flex justify-center mt-[10px] mb-[0px] text-[22px] text-[#263238] leading-[50px] max-xl:text-[18px] max-md:text-[17px] max-sm:text-[15px] max-mini:text-[13px] max-short:text-[10.3px] max-short:leading-[70px]">
        پلتفرم اموزش طراحی وب
      </h4>
      <h1 className="w-full dirRtl ProjectFontBold font-[2000] h-[40%] flex justify-center mt-[35px] mb-[0px] max-short:h-[0%] text-[#263238] leading-[70px] text-[68px] max-xl:text-[60px] max-md:text-[57px] max-sm:text-[50px] max-mini:text-[43px] max-short:text-[34px] max-short:leading-[22px]">
        <Typewriter options={typeWriterOptions(["مرجع اموزش برنامه نویسی"])} />
      </h1>
      <h4 className="w-[100%] h-[15%] flex justify-center mt-[10px] mb-[0px] text-[22px] text-[#263238] leading-[50px] max-xl:text-[18px] max-md:text-[17px] max-sm:text-[15px] max-mini:text-[13px] max-short:text-[10.3px] max-short:leading-[70px]">
        مرجع اموزش زنده و تعاملی دسترسی به بیش از هفت هزار ویدیوی اموزشی به زبان
        فارسی
      </h4>
    </div>
  );
}

export default Titr;
