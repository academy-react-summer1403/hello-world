import React from "react";
import pic from "@assets/images/Landing/Servises/Vector 20.svg";
import pic1 from "@assets/images/Landing/Servises/favorite-chart.svg";
import pic2 from "@assets/images/Landing/Servises/briefcase.svg";
import pic3 from "@assets/images/Landing/Servises/personalcard.svg";
import { useTranslation } from "react-i18next";
import "@components/common/translait/index";
const Servises = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex justify-center pt-20 mt-10 ">
      <div className="services  w-full h-[300px]   ">
        <h1 className="dark:text-white text-center text-4xl font-['YekanBakhBold'] ">
          {t("خدمات ما")}{" "}
          <img className="m-auto mt-[10px]  " src={pic} alt="image" />{" "}
        </h1>
        <div className="items  mt-[-30px] flex flex-row-reverse flex-wrap  gap-[120px]  justify-center max-smm:gap-[20px] ">
          <div className="it1  border  border-[#e2e8f0] hover:dark:bg-[#111827] hover:bg-white hover:shadow-[0_0_10px_10px_rgba(0,0,0,0.1)]   w-[335px] h-[250px] justify-around rounded-xl my-14 max-xll:w-[200px] max-mmd:w-[100px]   ">
            <div className="photo1 w-[70px] h-[70px] mx-auto my-10 max-xll:my-5 max-mmd:w-[50px] max-mmd:h-[50px] ">
              <img className="" src={pic1} alt="image" />{" "}
            </div>
            <h3 className="text-center mt-[-20px] dark:text-white text-gray font-['YekanBakhBold']  text-[18px] max-mmd:text-[12px]   max-smm:text-[12px] ">
              {t("سادگی خدمات")}{" "}
            </h3>
            <p className="text-center text-sm px-[20px] mt-[10px] dark:text-white text-gray2 font-['YekanBakh'] max-mmd:text-[8px]   max-smm:text-[8px]">
              {t(
                "سهولت دسترسی و دریافت خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز مراجعه حضوری در کل فرایند ثبت"
              )}{" "}
            </p>
          </div>

          <div className="it2 border border-[#e2e8f0] hover:dark:bg-[#111827] hover:bg-white hover:shadow-[0_0_10px_10px_rgba(0,0,0,0.1)] relative border-solid  w-[335px] h-[250px] justify-around  rounded-xl   my-14 max-xll:w-[200px] max-mmd:w-[100px] ">
            <div className="photo2 w-[70px] h-[70px] mx-auto my-10 max-xll:my-5 max-mmd:w-[50px] max-mmd:h-[50px]  ">
              <img src={pic2} alt="image" />{" "}
            </div>
            <h3 className="text-center dark:text-white text-gray mt-[-20px] font-['YekanBakhBold'] whitespace-nowrap text-[18px] max-mmd:text-[12px] max-smm:text-[12px] ">
              {t("فرصت های شغلی")}{" "}
            </h3>
            <p className="text-center text-sm px-[20px] mt-[10px] dark:text-white text-gray2 max-mmd:text-[8px] font-['YekanBakh'] max-smm:text-[8px]">
              {t(
                "سهولت دسترسی و دریافت خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز مراجعه حضوری در کل فرایند ثبت"
              )}
            </p>
          </div>

          <div className="it3 border border-[#e2e8f0] hover:dark:bg-[#111827] hover:bg-white hover:shadow-[0_0_10px_10px_rgba(0,0,0,0.1)] relative  w-[335px] h-[250px] justify-around rounded-xl my-14 max-xll:w-[200px] max-mmd:w-[100px] max-smm:gap-[50px]  ">
            <div className="photo3 w-[70px] h-[70px] mx-auto my-10 max-xll:my-5 max-mmd:w-[50px] max-mmd:h-[50px]  ">
              <img src={pic3} alt="image" />{" "}
            </div>
            <h3 className="text-center dark:text-white text-gray mt-[-20px] font-['YekanBakhBold']  text-[18px] max-mmd:text-[12px]  max-smm:text-[12px]">
              {t("مدرک معتبر")}{" "}
            </h3>
            <p className="text-center text-sm px-[20px] mt-[10px] dark:text-white text-gray2 font-['YekanBakh'] max-mmd:text-[8px]  max-smm:text-[8px]">
              {t(
                "سهولت دسترسی و دریافت خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز مراجعه حضوری در کل فرایند ثبت"
              )}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servises;
