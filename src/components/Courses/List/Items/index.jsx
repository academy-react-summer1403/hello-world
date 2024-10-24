import { getCourseList } from "@core/servises/api/Courses/Course/index";
import Pagination from "@mui/material/Pagination";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

const Items = ({courseList,view}) => {
  // const [view, setView] = useState("knrhm");
  console.log("courseList",courseList)
  // const [courses, setCourses] = useState([]);
  // const [totalCount, setTotalCount] = useState(0);
  // const [page, setPage] = useState(1);
  // const [rowsPerPage, setRowsPerPage] = useState(10);

  // const fetchCourses = async (page, rowsPerPage) => {
  //   try {
  //     const params = { PageNumber: page, RowsOfPage: rowsPerPage };
  //     const response = await getCourseList(params);
  //     console.log("response", response);
  //     setCourses(response.courseFilterDtos);
  //     setTotalCount(response.totalCount);
  //   } catch (error) {
  //     console.error("Error fetching courses:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchCourses(page, rowsPerPage);
  //   console.log("page", page);
  // }, [page, rowsPerPage]);

  // const handlePageChange = (event, value) => {
  //   setPage(value);
  // };

  return (
    <>
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

        {/* <Pagination
          count={Math.ceil(totalCount / rowsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
        /> */}
      </div>
    </>
  );
};

export default Items;
