import React from "react";
import pic from "@assets/images/Landing/Servises/Vector 20.svg";
import pic1 from "@assets/images/Landing/Servises/favorite-chart.svg";
import pic2 from "@assets/images/Landing/Servises/briefcase.svg";
import pic3 from "@assets/images/Landing/Servises/personalcard.svg";

const Servises = () => {
  return (
    <div className="w-full flex justify-center pt-20 mt-10 ">
      <div className="services  w-full h-[300px]   ">
        <h1 className="text-center text-4xl font-['YekanBakhBold'] ">
          خدمات ما
          <img className="m-auto mt-[10px]  " src={pic} alt="image" />{" "}
        </h1>
        <div className="items  mt-[-30px] flex flex-row-reverse flex-wrap  gap-[120px]  justify-center max-smm:gap-[20px] ">
          <div
            className="it1  border  border-[#e2e8f0] hover:shadow-lg
 hover:bg-white    w-[335px] h-[250px] justify-around rounded-xl my-14 max-xll:w-[200px] max-mmd:w-[100px]   "
          >
            <div className="photo1 w-[70px] h-[70px] mx-auto my-10  max-mmd:w-[50px] max-mmd:h-[50px] ">
              <img className="" src={pic1} alt="image" />{" "}
            </div>
            <h3 className="text-center mt-[-20px] text-gray font-['YekanBakhBold']  text-[18px]   max-smm:text-[12px] ">
              سادگی خدمات{" "}
            </h3>
            <p className="text-center text-sm px-[20px] mt-[10px] text-gray2 font-['YekanBakh']    max-smm:text-[10px]">
              سهولت دسترسی و دریافت خدمات از همه ی نقاط کشور با کمترین تعرفه و
              بدون نیاز مراجعه حضوری در کل فرایند ثبت{" "}
            </p>
          </div>

          <div className="it2 border border-[#e2e8f0] hover:bg-white hover:shadow-lg relative border-solid  w-[335px] h-[250px] justify-around  rounded-xl   my-14 max-xll:w-[200px] max-mmd:w-[100px] ">
            <div className="photo2 w-[70px] h-[70px] mx-auto my-10 max-mmd:w-[50px] max-mmd:h-[50px]  ">
              <img src={pic2} alt="image" />{" "}
            </div>
            <h3 className="text-center text-gray mt-[-20px] font-['YekanBakhBold'] whitespace-nowrap text-[18px] max-smm:text-[12px] ">
              فرصت های شغلی{" "}
            </h3>
            <p className="text-center text-sm px-[20px] mt-[10px] text-gray2 font-['YekanBakh'] max-smm:text-[10px]">
              سهولت دسترسی و دریافت خدمات از همه ی نقاط کشور با کمترین تعرفه و
              بدون نیاز مراجعه حضوری در کل فرایند ثبت{" "}
            </p>
          </div>

          <div className="it3 border border-[#e2e8f0] hover:bg-white hover:shadow-lg relative  w-[335px] h-[250px] justify-around rounded-xl my-14 max-xll:w-[200px] max-mmd:w-[100px] max-smm:gap-[50px]  ">
            <div className="photo3 w-[70px] h-[70px] mx-auto my-10 max-mmd:w-[50px] max-mmd:h-[50px]  ">
              <img src={pic3} alt="image" />{" "}
            </div>
            <h3 className="text-center text-gray mt-[-20px] font-['YekanBakhBold']  text-[18px] max-smm:text-[12px]">
              مدرک معتبر{" "}
            </h3>
            <p className="text-center text-sm px-[20px] mt-[10px] text-gray2 font-['YekanBakh']  max-smm:text-[10px]">
              سهولت دسترسی و دریافت خدمات از همه ی نقاط کشور با کمترین تعرفه و
              بدون نیاز مراجعه حضوری در کل فرایند ثبت{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servises;
