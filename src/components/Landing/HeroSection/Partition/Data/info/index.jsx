import React, { useEffect, useState } from "react";
import people from "../../../../../../assets/images/Landing/HeroSection/people.png";
import clock from "../../../../../../assets/images/Landing/HeroSection/clock.png";
import teacher from "../../../../../../assets/images/Landing/HeroSection/teacher.png";
import { getReport } from "../../../../../../core/servises/api/Landing/HeroSection/LandingReport";
import { faNumber } from "../../../../../../core/utils/FaNumber";
import { useTranslation } from "react-i18next";
import "@components/common/translait/index";


const info = () => {
  const { t } = useTranslation();

  const [landingReport, setLandingReport] = useState([]);

  const getLandingReport = async () => {
    const report = await getReport();
    // console.log("report:", report);
    setLandingReport(report);
  };

  useEffect(() => {
    getLandingReport();
  }, []);

  return (
    <div className="Info w-[680px] h-[240px] rounded-[15px] flex justify-between max-xl:w-[600px] max-md:w-[550px] max-sm:w-[480px] max-mini:flex-wrap max-mini:justify-center">
      <div className="DataInfo dark:bg-[#111827] max-xl:h-[72%] max-md:h-[65%] max-mini:w-[87%] max-mini:h-[73px] max-mini:mb-[10px] max-short:w-[84%] border-[4px] dark:border-[#1a1a2e] border-white border-solid w-[30.5%] h-[81%] rounded-[16px] flex justify-center flex-wrap pt-[20px] max-mini:relative">
        <div className="ImgIcon  max-md:w-[50px] max-md:h-[50px] w-[60px] h-[60px] m-0 rounded-[16px] bg-[#2196f3] flex justify-center items-center max-mini:absolute max-mini:right-5 max-mini:top-2">
          {" "}
          <img className="max-md:w-[30px]" src={people} alt="" />{" "}
        </div>
        <div className="Amar  max-mini:w-[200px] max-mini:h-[70px] max-mini:pr-[20px] text-center w-[100%] h-[80px] rounded-[16px] text-black m-0 p-0 max-mini:absolute max-mini:right-5 max-mini:top-0 ">
          <h2 className=" dark:text-white max-xl:text-[23px] leading-[55px] m-0 text-[#263238] text-[30px]">
            {" "}
            {landingReport.studentCount &&
              faNumber(landingReport.studentCount.toString())}{" "}
          </h2>

          <h3 className="dark:text-white max-xl:text-[15px] max-md:text-[14px] max-md:mt-[-12px] m-0 text-[15px] text-[#455a64] font-bold"> {t("نفر دانشجو")}</h3>
        </div>
      </div>
      <div className="DataInfo dark:bg-[#111827] max-xl:h-[72%] max-md:h-[65%] max-mini:w-[87%] max-mini:h-[73px] max-mini:mb-[10px] max-short:w-[84%] border-[4px] dark:border-[#1a1a2e] border-white border-solid w-[30.5%] h-[81%] rounded-[16px] flex justify-center flex-wrap pt-[20px] max-mini:relative">
        <div className="ImgIcon max-md:w-[50px] max-md:h-[50px] w-[60px] h-[60px] m-0 rounded-[16px] bg-[#2196f3] flex justify-center items-center max-mini:absolute max-mini:right-5 max-mini:top-2">
          {" "}
          <img className="max-md:w-[30px]" src={clock} alt="" />{" "}
        </div>
        <div className="Amar max-mini:w-[200px] max-mini:h-[70px] max-mini:pr-[20px] text-center w-[100%] h-[80px] rounded-[16px] text-black m-0 p-0 max-mini:absolute max-mini:right-5 max-mini:top-0 ">
          <h2 className=" dark:text-white max-xl:text-[23px] leading-[55px] m-0 text-[#263238] text-[30px]">
            {" "}
            {landingReport.courseCount &&
              faNumber(landingReport.courseCount.toString())}{" "}
          </h2>
          <h3 className=" dark:text-white max-xl:text-[15px] max-md:text-[14px] max-md:mt-[-12px] m-0 text-[15px] text-[#455a64] font-bold"> {t("تا دوره")}</h3>
        </div>
      </div>
      <div className="DataInfo dark:bg-[#111827] max-xl:h-[72%] max-md:h-[65%] max-mini:w-[87%] max-mini:h-[73px] max-mini:mb-[10px] max-short:w-[84%] border-[4px] dark:border-[#1a1a2e] border-white border-solid w-[30.5%] h-[81%] rounded-[16px] flex justify-center flex-wrap pt-[20px] max-mini:relative">
        <div className="ImgIcon max-md:w-[50px] max-md:h-[50px] w-[60px] h-[60px] m-0 rounded-[16px] bg-[#2196f3] flex justify-center items-center max-mini:absolute max-mini:right-5 max-mini:top-2">
          {" "}
          <img className="max-md:w-[30px]" src={teacher} alt="" />{" "}
        </div>
        <div className="Amar max-mini:w-[200px] max-mini:h-[70px] max-mini:pr-[20px] text-center w-[100%] h-[80px] rounded-[16px] text-black m-0 p-0 max-mini:absolute max-mini:right-5 max-mini:top-0 ">
          <h2 className=" dark:text-white max-xl:text-[23px] leading-[55px] m-0 text-[#263238] text-[30px]">
            {" "}
            {landingReport.teacherCount &&
              faNumber(landingReport.teacherCount.toString())}{" "}
          </h2>
          <h3 className=" dark:text-white max-xl:text-[15px] max-md:text-[14px] max-md:mt-[-12px] m-0 text-[15px] text-[#455a64] font-bold"> {t("اساتید")} </h3>
        </div>
      </div>
    </div>
  );
};

export default info;
