import React from "react";
import pic from "../../../assets/images/Landing/Servises/Vector 20.png";
import pic1 from "../../../assets/images/Landing/Servises/favorite-chart.png";
import pic2 from "../../../assets/images/Landing/Servises/briefcase.png";
import pic3 from "../../../assets/images/Landing/Servises/personalcard.png";

const Servises = () => {
  return (
    <div className="w-full flex justify-center pt-20 mt-10">
      <div className="services  w-full h-[300px]   ">
        <h1 className="text-center text-4xl font-['YekanBakhBold'] ">
          خدمات ما
          <img className="m-auto mt-[15px]  " src={pic} alt="image" />{" "}
        </h1>
        <div className="items  flex flex-row-reverse flex-wrap  gap-[120px] justify-center max-smm:gap-[20px] ">
          <div className="it1  bg-white relative   w-[335px] h-[250px] justify-around rounded-xl my-14 max-xll:w-[200px] max-mmd:w-[100px]   ">
            <div className="photo1 w-[100px] h-[100px] absolute   right-[105px] max-xll:right-[45px] max-mmd:right-[25px] max-mmd:top-[20px] max-mmd:w-[50px] max-mmd:h-[50px] ">
              <img src={pic1} alt="image" />{" "}
            </div>
            <h3 className="text-center text-gray font-['YekanBakhBold'] leading-7 text-[18px]  mt-24 max-smm:text-[12px] ">
              سادگی خدمات{" "}
            </h3>
            <p className="text-center text-xs  text-gray2 font-['YekanBakh']   mt-3 max-smm:text-[10px]">
              سهولت دسترسی و دریافت خدمات از همه ی نقاط کشور با کمترین تعرفه و
              بدون نیاز مراجعه حضوری در کل فرایند ثبت{" "}
            </p>
          </div>

          <div className="it2 relative border-solid  w-[335px] h-[250px] justify-around  rounded-xl  bg-white my-14 max-xll:w-[200px] max-mmd:w-[100px] ">
            <div className="photo2 w-[100px] h-[100px] absolute   right-[102px] max-xll:right-[45px] max-mmd:right-[25px] max-mmd:top-[20px] max-mmd:w-[50px] max-mmd:h-[50px]  ">
              <img src={pic2} alt="image" />{" "}
            </div>
            <h3 className="text-center text-gray mt-24 leading-7 font-['YekanBakhBold'] whitespace-nowrap text-[18px] max-smm:text-[12px] ">
              فرصت های شغلی{" "}
            </h3>
            <p className="text-center text-xs text-gray2 font-['YekanBakh'] mt-3 max-smm:text-[10px]">
              سهولت دسترسی و دریافت خدمات از همه ی نقاط کشور با کمترین تعرفه و
              بدون نیاز مراجعه حضوری در کل فرایند ثبت{" "}
            </p>
          </div>

          <div className="it3 relative bg-white w-[335px] h-[250px] justify-around rounded-xl my-14 max-xll:w-[200px] max-mmd:w-[100px] max-smm:gap-[50px]  ">
            <div className="photo3 w-[100px] h-[100px] absolute right-[105px] max-xll:right-[45px] max-mmd:right-[25px] max-mmd:top-[20px] max-mmd:w-[50px] max-mmd:h-[50px]  ">
              <img src={pic3} alt="image" />{" "}
            </div>
            <h3 className="text-center text-gray mt-24 leading-7 font-['YekanBakhBold']  text-[18px] max-smm:text-[12px]">
              مدرک معتبر{" "}
            </h3>
            <p className="text-center text-xs text-gray2 font-['YekanBakh'] mt-3 max-smm:text-[10px]">
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
