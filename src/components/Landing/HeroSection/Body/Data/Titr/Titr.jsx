import React from "react";
import "./Titr.css";

function Titr() {
  return (
    <div className="Titr w-[100%] h-[30%] mt-5 flex justify-center flex-wrap">
      <h4 className="w-[100%] h-[15%] flex justify-center mt-[10px] mb-[0px] ">
        پلتفرم اموزش طراحی وب
      </h4>
      <h1 className="w-full h-[40%] flex justify-center mt-[35px] mb-[0px] max-short:h-[0%]">
        مرجع اموزش برنامه نویسی
      </h1>
      <h4 className="w-[100%] h-[15%] flex justify-center mt-[10px] mb-[0px] ">
        مرجع اموزش زنده و تعاملی دسترسی به بیش از هفت هزار ویدیوی اموزشی به زبان
        فارسی
      </h4>
    </div>
  );
}

export default Titr;
