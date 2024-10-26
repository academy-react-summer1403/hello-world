import { getCourseList } from "@core/servises/api/Courses/Course/index";
import Pagination from "@mui/material/Pagination";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

import Skeleton from "@mui/material/Skeleton";

const Items = ({ courseList, view, setSkelet, skeleton }) => {
  
  useEffect(() => {
    setSkelet();
  }, []);

  return (
    <>
      {skeleton ? (
        <div className="flex justify-center flex-wrap items-center gap-5">
          <div className="w-300">
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={300}
              height={170}
              className="rounded-xl mb-2"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={300}
              height={20}
              className="rounded-lg mb-1"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={210}
              height={20}
              className="rounded-lg mb-1"
            />
          </div>
          <div className="w-300">
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={300}
              height={170}
              className="rounded-xl mb-2"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={300}
              height={20}
              className="rounded-lg mb-1"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={210}
              height={20}
              className="rounded-lg mb-1"
            />
          </div>
          <div className="w-300">
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={300}
              height={170}
              className="rounded-xl mb-2"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={300}
              height={20}
              className="rounded-lg mb-1"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={210}
              height={20}
              className="rounded-lg mb-1"
            />
          </div>
          <div className="w-300">
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={300}
              height={170}
              className="rounded-xl mb-2"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={300}
              height={20}
              className="rounded-lg mb-1"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={210}
              height={20}
              className="rounded-lg mb-1"
            />
          </div>
          <div className="w-300">
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={300}
              height={170}
              className="rounded-xl mb-2"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={300}
              height={20}
              className="rounded-lg mb-1"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={210}
              height={20}
              className="rounded-lg mb-1"
            />
          </div>
          <div className="w-300">
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={300}
              height={170}
              className="rounded-xl mb-2"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={300}
              height={20}
              className="rounded-lg mb-1"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={210}
              height={20}
              className="rounded-lg mb-1"
            />
          </div>
          <div className="w-300">
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={300}
              height={170}
              className="rounded-xl mb-2"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={300}
              height={20}
              className="rounded-lg mb-1"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={210}
              height={20}
              className="rounded-lg mb-1"
            />
          </div>
          <div className="w-300">
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={300}
              height={170}
              className="rounded-xl mb-2"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={300}
              height={20}
              className="rounded-lg mb-1"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={210}
              height={20}
              className="rounded-lg mb-1"
            />
          </div>
          <div className="w-300">
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={300}
              height={170}
              className="rounded-xl mb-2"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={300}
              height={20}
              className="rounded-lg mb-1"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width={210}
              height={20}
              className="rounded-lg mb-1"
            />
          </div>
        </div>
      ) : (
        <div className="flex w-[100%] justify-center flex-wrap">
          {courseList?.map((item, index) => {
            return (
              <CourseCard
                view={view}
                key={index}
                title={item.title}
                teacherName={item.teacherName}
                cost={item.cost}
                tumbImageAddress={item.tumbImageAddress}
                levelName={item.levelName}
                currentRegistrants={item.currentRegistrants}
                describe={item.describe}
                id={item.courseId}
                likeCount={item.likeCount}
                lastUpdate={item.lastUpdate}
              />
            );
          })}
        </div>
      )}

      {/* <div className="flex w-[100%] justify-center flex-wrap">
        {courseList?.map((item, index) => {
          return (
            <CourseCard
              view={view}
              key={index}
              title={item.title}
              teacherName={item.teacherName}
              cost={item.cost}
              tumbImageAddress={item.tumbImageAddress}
              levelName={item.levelName}
              currentRegistrants={item.currentRegistrants}
              describe={item.describe}
              id={item.courseId}
              likeCount={item.likeCount}
              lastUpdate={item.lastUpdate}
            />
          );
        })}
      </div> */}
    </>
  );
};

export default Items;
