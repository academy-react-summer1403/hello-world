import React from "react";
import pic1 from "../../../../assets/images/Footer/social medias 1.png";
const Footer = () => {
  return (
    <div className="foot pt-1 mt-20  w-full h-[430px] bg-purple max-sm:h-[380px] max-sm:p-0 max-short:h-[350px] dark:bg-[#111827] ">
      <div className="  w-[400px]  m-auto   h-[90px] mt-[30px] ">
        <h1 className="text-center text-white  font-['YekanBakhBold'] text-[24px] leading-[60px]  ">
          HELLO WORLD{" "}
        </h1>
        <p className=" text-center text-white font-[YekanBakh] text-[12px] w-[300px] ml-[50px] max-sm:text-[11px]  max-short:text-[10px]">
          هدف ما سهولت دسترسی و دریافت خدمات از همه ی نقاط کشور با کمترین تعرفه
          و بدون نیاز مراجعه حضوری در کل فرایند ثبت{" "}
        </p>
      </div>

      <div className="dv2  h-[100px] w-[400px]  m-auto    mt-[50px]  flex justify-center flex-wrap  max-sm:mt-7 max-short:mt-5">
        <p className="text-center text-white3 font-[YekanBakh]  text-[12px]            ">
          {" "}
          برای دریافت اخبار از طریق ایمیل ثبت نام کنید
        </p>
        <input
          className="Search w-[400px] h-[50px] mt-[22px] pl-5 pt-1  rounded-3xl bg-white m-auto max-sm:w-[300px] max-sm:h-[40px] max-sm:text-[13px] max-sm:mt-[10px] max-short:w-[260px]"
          type="search"
          placeholder=" Example@gmail.com "
        ></input>
      </div>

      <div className="dv3  flex  justify-center divide-x      mt-[30px] max-short:mt-3">
        <span className="text-white3 font-['YekanBakh'] text-[11px]  pr-[30px]      ">
          {" "}
          قوانین و مقررات
        </span>
        <span className="text-white3  font-['YekanBakh'] text-[11px]   pl-[30px]  pr-[30px]                  ">
          {" "}
          درباره ما{" "}
        </span>
        <span className="text-white3  font-['YekanBakh'] text-[11px] pl-[30px]  ">
          {" "}
          دوره های اموزشی{" "}
        </span>
      </div>
      <div className="dv4 h-[60px] w-[90%]  m-auto mt-[30px] bg-purple1 rounded-[20px] max-sm:flex max-sm:justify-center max-sm:flex-wrap max-sm:h-[70px]">
        <div className="right pt-[20px] pr-[50px] max-sm:pr-0 max-sm:pt-0 max-sm:w-[170%]">
          <div className="text-white3  font-['YekanBakh'] text-[11px] text-right  max-sm:text-center max-sm:p-2">
            {" "}
            میباشد HelloWorld تمام حقوق مادی و معنوی این مجموعه متعلق به{" "}
          </div>
        </div>
        <div className="left w-[200px] h-[30px] relative">
          <div className=" text-left absolute top-[-20px]  left-[50px] max-sm:left-0 max-sm:top-0">
            <img src={pic1} alt="image" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
