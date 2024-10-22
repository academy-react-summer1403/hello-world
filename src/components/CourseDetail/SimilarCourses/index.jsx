import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import vector from "@assets/images/Landing/Servises/Vector 20.svg";
import { getcoursetop } from "@core/servises/api/Landing/Courses/GetCourseTop";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CourseCard from "./CourseCard";

const SimilarCourses = () => {
  const [topCourse, setTopCourse] = useState([]);

  const getList = async () => {
    const params = {
      Count: 5,
    };
    const courses = await getcoursetop(params);
    // console.log("courses:",courses)
    setTopCourse(courses);
  };

  useEffect(() => {
    getList();
  }, []);
  return (
    <div className="mt-16 w-full flex justify-center flex-wrap max-xx:mb-28">
      <div className="w-[1300px]  flex justify-center flex-wrap align-top ">
        <div className="w-full h-[16%]">
          <h1 className="font-['YekanBakhBold'] w-full text-center text-[#263238] text-[38px] dark:text-white">
            دوره‌های اموزشی{" "}
          </h1>
          <img className="mx-auto mt-1" src={vector} alt="" />
        </div>
        <div className=" flex justify-center w-[90%] max-xl:w-[60%] max-kk:w-[30%]">
          <Swiper
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="my-swiper gap-5    "
            loop={true}
            autoplay={{ delay: 1000 }}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },

              1000: {
                slidesPerView: 4,
              },
            }}
          >
            {topCourse &&
              topCourse?.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className=" flex lg:!w-[296px] lg:h-[389px] mr-4 py-5 mb-6   "
                >
                  <CourseCard
                    title={item.title}
                    teacherName={item.teacherName}
                    cost={item.cost}
                    tumbImageAddress={item.tumbImageAddress}
                    levelName={item.levelName}
                    currentRegistrants={item.currentRegistrants}
                    describe={item.describe}
                    id={item.courseId}
                    likeCount={item.likeCount}
                    dissLikeCount={item.dissLikeCount}
                    typeName={item.typeName}
                    lastUpdate={item.lastUpdate}
                    isUserFavorite={item?.isUserFavorite}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SimilarCourses;
