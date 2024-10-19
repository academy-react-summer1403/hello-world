import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import vector from "@assets/images/Landing/Servises/Vector 20.svg";
import { getTeachers } from "@core/servises/api/Landing/Teachers/GetTeachers";
import TeacherCard from "./TeacherCard";
import Slider from "react-slick/lib/slider";
const Teachers = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1128,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 845,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 556,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [topCourse, setTopCourse] = useState([]);

  const getList = async () => {
    const params = {
      Count: 7,
    };
    const courses = await getTeachers(params);
    // console.log("courses:",courses)
    setTopCourse(courses);
  };

  useEffect(() => {
    getList();
  }, []);
  return (
    <>
      <div className="w-full h-[700px] bg-[#E3F2FD] flex justify-center flex-wrap mt-[100px] ">
        <div className="slider-container bg-[#E3F2FD] slider m-auto w-[1100px] h-[570px] ">
          <div className="w-full h-[17%] ">
            <div className="w-full h-20 text-center text-[#263238] text-4xl pt-4 myFontBold">
              <h2 className="w-full">اساتید برتر</h2>
              <img className=" mx-auto mt-3" src={vector} alt="" />
            </div>
          </div>
          <div className="w-full h-[83%] max-ss:w-[100%] max-ss:m-auto  max-mi:px-[60px] max-short:m-auto max-sh:m-auto max-ssh:m-auto ">
            <Slider {...settings}>
              {topCourse.map((item, index) => {
                return (
                  <TeacherCard
                    key={index}
                    teacherId={item.teacherId}
                    pictureAddress={item.pictureAddress}
                    fullName={item.fullName}
                    courseCounts={item.courseCounts}
                    newsCount={item.newsCount}
                  />
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teachers;
