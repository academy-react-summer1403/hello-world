import React from "react";
import dot1 from "../../../assets/images/Courses/Dots.png";
import dot2 from "../../../assets/images/Courses/Dots2.png";
import aks from "../../../assets/images/Courses/Asset 1 1(1).png";

const Baner = () => {
  return (
    <div className="flex w-full justify-center ">
      <div className="   w-[1350px] h-[485px] mt-[20px] ml-[185px] relative max-short:h-[300px]   ">

        <div className="blue  bg-purple2   w-[104px] h-[104px]  absolute right-[20px]  top-[110px] rounded-bl-[100px]">
          {" "}
        </div>

        <div className="imagedot1 absolute  right-[21px]  top-[245px] max-xl:right-[71px]  ">
          <img src={dot1} alt="image" />
        </div>

        <div className="imagedot2 absolute  right-[520px]  top-[70px] max-xl:right-[620px] ">
          <img src={dot2} alt="image" />
        </div>

        <div className="image3 absolute w-[500px]  right-[800px]  top-[10px] max-xl:w-[400px] max-xl:top-[80px] max-lgx:w-[300px] max-lgx:right-[700px] max-lg:hidden ">
          <img src={aks} alt="image" />
        </div>

        <div className="text    w-[500px] h-[170px]      absolute right-[70px]  top-[150px] max-xl:right-[200px] max-md:right-[80px] max-sm:right-[110px] max-mini1:right-[30px] max-mini1:top-[200px] max-short:top-[150px] max-short:right-[15px] ">
          <h3 className=" text-right  text-bluee  font-[YekanBakhBold] text-[20px]   leading-[50px]     ">
            {" "}
            !!!مهمه از کی یاد می گیری
          </h3>
          <h1 className="text-right text-grayy font-[YekanBakhBold] text-[30px]    ">
            {" "}
            اموزش برنامه نویسی با بهترین ها
          </h1>
          <p className="text-right  text-gray4 font-[YekanBakh] text-[15px]    leading-[30px]  max-sm:text-[12px]  max-smm:text-[10px] max-short:hidden  ">
            آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است.
            برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای
            کامپیوتری را ایجاد و توسعه دهند.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Baner;
