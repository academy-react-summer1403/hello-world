import React, { useEffect, useState } from "react";
import "./info.css";
import people from "../../../../../../assets/images/Landing/HeroSection/people.png";
import clock from "../../../../../../assets/images/Landing/HeroSection/clock.png";
import teacher from "../../../../../../assets/images/Landing/HeroSection/teacher.png";
import { getReport } from "../../../../../../core/servises/api/Landing/HeroSection/LandingReport";
import { faNumber } from "../../../../../../core/utils/FaNumber";

const info = () => {
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
      <div className="DataInfo max-mini:relative">
        <div className="ImgIcon flex justify-center items-center max-mini:absolute max-mini:right-5 max-mini:top-2">
          {" "}
          <img className="max-md:w-[30px]" src={people} alt="" />{" "}
        </div>
        <div className="Amar max-mini:absolute max-mini:right-5 max-mini:top-0 ">
          <h2>
            {" "}
            {landingReport.studentCount &&
              faNumber(landingReport.studentCount.toString())}{" "}
          </h2>

          <h3> نفر دانشجو </h3>
        </div>
      </div>
      <div className="DataInfo max-mini:relative">
        <div className="ImgIcon flex justify-center items-center max-mini:absolute max-mini:right-5 max-mini:top-2">
          {" "}
          <img className="max-md:w-[30px]" src={clock} alt="" />{" "}
        </div>
        <div className="Amar max-mini:absolute max-mini:right-5 max-mini:top-0 ">
          <h2>
            {" "}
            {landingReport.courseCount &&
              faNumber(landingReport.courseCount.toString())}{" "}
          </h2>
          <h3> تا دوره </h3>
        </div>
      </div>
      <div className="DataInfo max-mini:relative">
        <div className="ImgIcon flex justify-center items-center max-mini:absolute max-mini:right-5 max-mini:top-2">
          {" "}
          <img className="max-md:w-[30px]" src={teacher} alt="" />{" "}
        </div>
        <div className="Amar max-mini:absolute max-mini:right-5 max-mini:top-0 ">
          <h2>
            {" "}
            {landingReport.teacherCount &&
              faNumber(landingReport.teacherCount.toString())}{" "}
          </h2>
          <h3> اساتید </h3>
        </div>
      </div>
    </div>
  );
};

export default info;
