import React from "react";
import pic4 from "../../../assets/images/Landing/Categories/Group 70.png";
import pic5 from "../../../assets/images/Landing/Categories/Ellipse 87(1).png";
import pic6 from "../../../assets/images/Landing/Categories/Icon1.png";
import pic7 from "../../../assets/images/Landing/Categories/Icon3.png";
import pic8 from "../../../assets/images/Landing/Categories/Icon4.png";
import pic9 from "../../../assets/images/Landing/Categories/Icon(2).png";

const Categories = () => {
  return (
    <div className="w-full flex justify-center   mt-10 mb-20 max-xx:pt-[10%]  ">
      <div className="categories flex  mt-20 w-[1410px] h-[752px]  relative max-dd:hidden ">
        <div className="yellow  w-[160px] h-[160px] dark:bg-[#111827] transition duration-300 ease-in-out bg-yellow rounded-tr-[100px]  absolute  right-10 top-[200px]">
          {" "}
        </div>

        <div className="image1 absolute top-[500px] right-[100px] max-xl:top-[440px] max-lgx:top-[400px] max-lgx:right-[200px]">
          <img src={pic4} alt="image" />
        </div>
        <div className="image2  w-[120px] h-[120px]   absolute  left-[726px] top-[580px] max-xl:top-[480px] max-xl:left-[700px] max-lgx:top-[450px] max-lgx:left-[600px]">
          <img src={pic5} alt="image" />
        </div>
        <div className="blue dark:bg-[#111827] transition duration-300 ease-in-out w-[1004px] h-[480px] bg-blue  rounded-tr-[130px]  absolute  left-0 top-[120px] max-xl:w-[870px] max-xl:h-[400px] max-lgx:w-[750px] max-lgx:h-[360px]">
          {" "}
        </div>

        <div className="text  w-[300px] h-[50px]   absolute  left-[950px] top-[250px]  max-xl:left-[850px] max-lgx:left-[720px] max-lg:left-[640px]">
          <h3 className="block  text-right dark:text-white transition duration-300 ease-in-out text-gray3 font-[YekanBakhBold] text-[40px] leading-[80px] max-lgx:text-[33px] ">
            دسته بندی‌ دوره‌ها{" "}
          </h3>
          <div className="dark:bg-[blue] dark:blur-[170px] transition duration-300 ease-in-out w-[150px] h-[150px] rounded-full absolute top-0"></div>
          <p className="block  text-right text-[10px] font-[YekanBakh] transition duration-300 ease-in-out dark:text-white text-gray4 leading-[22px]  ">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
          </p>
        </div>
        <div className="item flex    w-[688px] h-[752px]  z-50   absolute  left-[80px] top-0  ">
          <div className="it1 flex justify-center items-center py-10 flex-wrap transition duration-300 ease-in-out dark:bg-[#111827] border-[#eeeeee] border-[1px] border-solid max-xl:w-[270px] max-xl:h-[270px]  max-lgx:w-[240px] max-lgx:h-[240px]  w-[300px] h-[300px] rounded-3xl   absolute  left-0 top-[80px] bg-[#ffffff]     ">
            <div className="icon1   w-[80px]  h-[80px]  max-lgx:top-[33px] ">
              <img src={pic6} alt="image" />{" "}
            </div>
            <h1 className="dark:text-white transition duration-300 ease-in-out text-gray3 w-full  text-center text-[24px] font-[YekanBakhBold] leading-[50px]  max-lgx:text-[19px]">
              {" "}
              بازی
            </h1>
            <p className=" dark:text-white transition duration-300 ease-in-out text-gray4   text-center w-[200px] text-[13px] font-[YekanBakh] max-lgx:text-[11px] ">
              {" "}
              بعد از اتمام آموزش، به شرکت‌ها و سرمایه‌گذاران بازی‌ساز معرفی
              خواهی شد
            </p>
          </div>

          <div className="it2 flex justify-center items-center py-10 flex-wrap transition duration-300 ease-in-out dark:bg-[#111827] border-[#eeeeee] border-[1px] border-solid max-xl:w-[270px] max-xl:h-[270px]   max-lgx:w-[240px] max-lgx:h-[240px]  w-[300px] h-[300px] rounded-3xl   absolute max-xl:right-10 max-lgx:right-36 max-lgx:top-10 right-0 top-[10px]  bg-white   ">
            <div className="icon2  w-[80px]  h-[80px] ">
              <img src={pic7} alt="image" />{" "}
            </div>
            <h1 className="dark:text-white transition duration-300 ease-in-out text-gray3 w-full text-center text-3xl text-[24px] font-[YekanBakhBold] leading-[50px]  max-lgx:text-[19px]    ">
              تحلیل داده
            </h1>
            <p className="dark:text-white transition duration-300 ease-in-out text-gray4  text-center  w-[200px] text-[13px] font-[YekanBakh]  max-lgx:text-[11px] ">
              {" "}
              داده‌ها بیش از هر زمان دیگری در زندگی ما نقش بازی می‌کنند
            </p>
          </div>

          <div className="it3 flex justify-center items-center py-10 flex-wrap transition duration-300 ease-in-out dark:bg-[#111827] border-[#eeeeee] border-[1px] border-solid max-xl:w-[270px] max-xl:h-[270px] max-lgx:w-[240px] max-lgx:h-[240px]   w-[300px] h-[300px] rounded-3xl   absolute max-xl:right-10 max-xl:top-[370px]  max-lgx:right-36 max-lgx:top-[320px] right-0 top-[370px]  bg-white  ">
            <div className="icon2  w-[80px]  h-[80px] ">
              <img src={pic8} alt="image" />{" "}
            </div>
            <h1 className="dark:text-white transition duration-300 ease-in-out text-gray3 w-full text-center text-3xl text-[24px] font-[YekanBakhBold] leading-[50px]  max-lgx:text-[19px]">
              {" "}
              امنیت شبکه
            </h1>
            <p className="dark:text-white transition duration-300 ease-in-out text-gray4  text-center w-[200px] text-[13px] font-[YekanBakh] max-lgx:text-[11px] ">
              امنیت شبکه یکی از مسائل حیاتی در دنیای فناوری اطلاعات است. دوره
              امنیت شبکه برای تسلط بر تهدیدات و حفاظت از اطلاعات الزامی است
            </p>
          </div>

          <div className="it4 flex justify-center items-center py-10 flex-wrap dark:bg-[#111827] transition duration-300 ease-in-out border-[#eeeeee] border-[1px] border-solid max-xl:w-[270px] max-xl:h-[270px]  max-lgx:w-[240px] max-lgx:h-[240px]  w-[300px] h-[300px] rounded-3xl   absolute  max-xl:top-[420px] max-lgx:top-[370px] left-0 bottom-[10px] bg-white  ">
            <div className="icon2  w-[80px]  h-[80px] ">
              <img src={pic9} alt="image" />{" "}
            </div>
            <h1 className="dark:text-white transition duration-300 ease-in-out text-gray3 w-full text-center text-3xl text-[24px] font-[YekanBakhBold] leading-[50px]  max-lgx:text-[19px]">
              {" "}
              وب دیزاین{" "}
            </h1>
            <p className="dark:text-white transition duration-300 ease-in-out text-gray4  text-center w-[200px] text-[13px] font-[YekanBakh]max-lgx:text-[11px] ">
              دوره ی طراحی وبسایت یکی از پر مخاطب ترین دوره طراحی وب سایت است،
              این دوره هم به صورت آنلاین برگزار می گردد
            </p>
          </div>
        </div>
      </div>
      <div className="w-[95%] max-short:w-[90%] h-[400px] flex justify-evenly flex-wrap gap-6 mt-20 dd:hidden ">
        <div className="w-[47%] max-short:w-[160px] max-short:h-[160px] h-[2/4] flex justify-center flex-nowrap max-sm:flex-wrap hadow-[1px_1px_20px_1px] bg-white shadow-[#fff586] border-[#fff373] border-solid border-[1px] rounded-[16px]">
          <div className="w-[60%] h-full flex justify-end flex-wrap items-center max-sm:hidden ">
            <p className="w-full h-[30%] text-gray3 text-end pt-2 text-[20px] ProjectFontBold max-md:text-[18px] max-sm:hidden">
              بازی
            </p>
            <p className="text-gray4 text-right w-[90%] mt-[-90px] text-[13px] max-md:text-[12px] max-sm:hidden">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </p>
          </div>
          <div className=" w-[40%] h-full flex justify-center flex-nowrap items-center max-sm:w-full max-sm:h-[70%]">
            <img
              src={pic6}
              className="w-[80px] max-short:w-[60px] max-short:h-[60px] h-[80px] "
              alt=""
            />
          </div>
          <div className="hidden text-center ProjectFontBold max-short:text-[18px] text-[22px] max-sm:block w-full h-[30%]">
            <p>بازی</p>
          </div>
        </div>
        <div className="w-[47%] max-short:w-[160px] max-short:h-[160px] h-[2/4] flex justify-center flex-nowrap max-sm:flex-wrap shadow-[1px_1px_20px_1px] shadow-[#d8d0fc] border-[#c0b2ff] border-solid border-[1px] rounded-[16px]">
          <div className="w-[60%] h-full flex justify-end flex-wrap items-center max-sm:hidden">
            <p className="w-full h-[30%] text-gray3 text-end pt-2 text-[20px] ProjectFontBold max-md:text-[18px] max-sm:hidden">
              تحیل داده
            </p>
            <p className="text-gray4 text-right w-[90%] mt-[-90px] text-[13px] max-md:text-[12px] max-sm:hidden">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </p>
          </div>
          <div className="w-[40%] h-full flex justify-center flex-nowrap items-center max-sm:w-full max-sm:h-[70%]">
            <img
              src={pic7}
              className="w-[80px] max-short:w-[60px] max-short:h-[60px] h-[80px] "
              alt=""
            />
          </div>
          <div className="hidden text-center ProjectFontBold max-short:text-[18px] text-[22px] max-sm:block w-full h-[30%]">
            <p>تحیل داده</p>
          </div>
        </div>
        <div className="w-[47%] max-short:w-[160px] max-short:h-[160px] h-[2/4] flex justify-center flex-nowrap max-sm:flex-wrap shadow-[1px_1px_20px_1px] shadow-[#a9f8cf] border-[#d1fae5] border-solid border-[1px] rounded-[16px]">
          <div className="w-[60%] h-full flex justify-end flex-wrap items-center max-sm:hidden">
            <p className="w-full h-[30%] text-gray3 text-end pt-2 text-[20px] ProjectFontBold max-md:text-[18px] ">
              امنیت شبکه
            </p>
            <p className="text-gray4 text-right w-[90%] mt-[-90px] text-[13px] max-md:text-[12px] max-sm:hidden">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </p>
          </div>
          <div className="w-[40%] h-full flex justify-center flex-nowrap items-center max-sm:w-full max-sm:h-[70%]">
            <img
              src={pic8}
              className="w-[80px] max-short:w-[60px] max-short:h-[60px] h-[80px] "
              alt=""
            />
          </div>
          <div className="hidden text-center ProjectFontBold max-short:text-[18px] text-[22px] max-sm:block w-full h-[30%]">
            <p>امنیت شبکه</p>
          </div>
        </div>
        <div className="w-[47%] max-short:w-[160px] max-short:h-[160px] h-[2/4] flex justify-center flex-nowrap max-sm:flex-wrap shadow-[1px_1px_20px_1px] shadow-[#fccde8] border-[#ffbfe3] border-solid border-[1px] rounded-[16px]">
          <div className="w-[60%] h-full flex justify-end flex-wrap items-center max-sm:hidden">
            <p className="w-full h-[30%] text-gray3 text-end pt-2 text-[20px] ProjectFontBold max-md:text-[18px] max-sm:hidden">
              وب دیزاین
            </p>
            <p className="text-gray4 text-right w-[90%] mt-[-90px] text-[13px] max-md:text-[12px] ">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </p>
          </div>
          <div className="w-[40%] h-full flex justify-center flex-nowrap items-center max-sm:w-full max-sm:h-[70%]">
            <img
              src={pic9}
              className="w-[80px] max-short:w-[60px] max-short:h-[60px] h-[80px] "
              alt=""
            />
          </div>
          <div className="hidden text-center ProjectFontBold max-short:text-[18px] text-[22px] max-sm:block w-full h-[30%]">
            <p>وب دیزاین</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
