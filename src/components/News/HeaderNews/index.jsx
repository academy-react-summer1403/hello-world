import pi from "@assets/images/News/Ellipse 87(2).png";
import pi1 from "@assets/images/News/Rectangle 24.png";
import pi2 from "@assets/images/News/Dots.png";
import pi3 from "@assets/images/News/Dot.png";
import pi4 from "@assets/images/News/Dott.png";
import pi5 from "@assets/images/News/Asset 1 2.png";
import { Typewriter } from "@components/common/Typewriter";
import { typeWriterOptions } from "@components/common/Typewriter/typeWriterOptions";
const HeaderNews = () => {
  return (
    <div className=" w-full flex justify-center flex-wrap pt-14   ">
      <div className="   w-[1280px] h-[485px] relative max-short:bg-[#e0f2fe  ">
        <div className="max-short:w-[300px] max-short:h-[300px] max-short:bg-[#fdf4ff] absolute max-short:right-0 max-short:top-[50px] rounded-tl-3xl  ">
          {" "}
        </div>
        <div className="max-short:w-[120px] max-short:h-[120px] max-short:bg-darkpink absolute max-short:right-0 max-short:top-[120px] rounded-tl-3xl     ">
          {" "}
        </div>
        <div className="image absolute   right-[250px]  top-[340px] z-50 max-short:top-[270px] ">
          <img src={pi} alt="image" />
        </div>

        <div className="image1 absolute dark:hidden right-0  top-[90px] max-short:hidden   ">
          <img src={pi1} alt="image" />
        </div>

        <div className="image2  absolute  right-[50px]  top-[150px] max-short:hidden ">
          <img src={pi2} alt="image" />
        </div>

        <div className="image3 absolute  right-[450px]  top-[90px] max-sm:hidden ">
          <img src={pi3} alt="image" />
        </div>

        <div className="image4 absolute  right-[500px]  top-[270px] max-md:hidden ">
          <img src={pi4} alt="image" />
        </div>

        <div className="bigimg w-[600px]  h-[600px] absolute  right-[650px]  top-[30px] max-xl:right-[500px] max-lgg:hidden ">
          <img src={pi5} alt="image" />
        </div>

        <div className="text    w-[500px] h-[170px]      absolute right-[70px]  top-[150px]  max-mini:right-[30px] max-smm:right-[5px] max-short:right-[10px] max-tshort:right-[10px]  ">
          <h1 className="text-right text-grayy font-[YekanBakhBold] text-[50px]  leading-[90px]   dark:text-white">
            {" "}
            <Typewriter
              options={typeWriterOptions(["اخبار و مقالات نابغه"])}
            />
          </h1>
            <div className="dark:bg-[blue] dark:blur-[170px] w-[150px] h-[150px] rounded-full absolute top-0"></div>
          <p className="text-right  text-gray4 font-[YekanBakh] text-[15px] leading-[30px] max-short:hidden dark:text-white">
            آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است.
            برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای
            کامپیوتری را ایجاد و توسعه دهند.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderNews;
