import React, { useEffect } from "react";
import Arrow from "../../../assets/images/Courses/Arrow.png";
import Sort from "../../../assets/images/Courses/Sort.png";
import Grid from "../../../assets/images/Courses/Grid.png";
import Grid2 from "../../../assets/images/Courses/Grid2.png";
import Items from "./Items";
import Filter from "./Filter/index.jsx";
import { useState } from "react";
import TopFilter from "./TopFilter/TopFilter";
import { getCourseList } from "@core/servises/api/Courses/Course/index";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { HiOutlineSortAscending } from "react-icons/hi";
import { HiOutlineSortDescending } from "react-icons/hi";

import ResponsivePagination from "react-responsive-pagination";

const ItemList = () => {
  const [view, setView] = useState("knrhm");
  const [type, setType] = useState();
  const [level, setLevel] = useState();
  const [tech, setTech] = useState();
  const [techer, setTecher] = useState();
  const [courseList, setCourseList] = useState([]);
  const [sortbox, setSortbox] = useState(false);
  const [sort, setSort] = useState("DESC");
  const [currentPage, setCurrentPage] = useState(1);

  const getList = async () => {
    const params = {
      CourseTypeId: type,
      courseLevelId: level,
      TeacherId: techer,
      RowsOfPage: 9,
      SortType: sort,
      PageNumber: currentPage,
    };
    const courses = await getCourseList(params);
    setCourseList(courses.courseFilterDtos);
  };

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    getList();
  }, [type]);

  useEffect(() => {
    getList();
  }, [level]);

  useEffect(() => {
    getList();
  }, [techer]);

  useEffect(() => {
    getList();
  }, [tech]);

  useEffect(() => {
    getList();
  }, [sort]);

  useEffect(() => {
    getList();
  }, [currentPage]);

  const ButtonClick = (arg) => {
    setView(arg);
  };

  // // pagination

  // const totalPages = 10;

  // function handlePageChange(page) {
  //   setCurrentPage(page);
  // }
  const [Search, setSearch] = useState()
  return (
    <div className="w-full flex justify-center flex-wrap  gap-5 pt-20">
      {/* <TopFilter/> */}
      <div className="max-w-[950px] w-[90%] pb-10 flex justify-center flex-wrap content-start max-xl:w-[950px] max-lg:w-[720px] max-lg:justify-evenly max-md:w-[640px] max-sm:w-[450px] max-short:w-[350px]">
        <div className="w-full  mb-8 h-[55px] flex justify-between items-center max-lg:w-[700px] max-md:justify-around">
          <div
            onClick={() => setSortbox(!sortbox)}
            className="w-[200px] select-none  cursor-pointer dark:bg-[#111827]  bg-[#ECEFF1] rounded-[16px] h-full flex items-center pl-2 max-lg:w-[150px] max-md:w-[130px] max-md:h-[80%]  max-mini:w-[100px]  max-mini:h-[65%]"
          >
            <div className="w-10 h-10 rounded-[50%]  hover:cursor-pointer  max-mini:w-[15px]">
              <img className="m-auto mt-3 bg-[#ECEFF1]" src={Arrow} alt="" />
            </div>
            <div className="w-[75%] h-full ml-1 flex justify-start items-center pl-2">
              <h3 className="dark:text-white text-[#263238] w-[85px] text-center text-[15px] max-lg:text-[12px] max-md:text-[11px]  max-mini:text-[9px]">
                مرتب سازی{" "}
              </h3>
              <img className="ml-3 max-lg:hidden " src={Sort} alt="" />
            </div>
          </div>

          <div
            className={
              sortbox === false
                ? "absolute transition-[0.1] w-[200px]  dark:bg-[#111827] bg-[#ECEFF1] mt-36 border-[1px] justify-center gap-1 flex border-solid dark:border-[#1a1a2e] border-[#d3d6d8] rounded-[16px] h-[0px] items-center pl-2 max-lg:w-[150px] max-md:w-[130px] max-md:h-[80%]  max-mini:w-[100px]  max-mini:h-[65%] opacity-0"
                : "absolute transition-[0.1] w-[200px]  dark:bg-[#111827] bg-[#ECEFF1] mt-36 border-[1px] justify-center gap-2 border-solid dark:border-[#1a1a2e] border-[#d3d6d8] rounded-[16px] h-[70px] flex items-center max-lg:w-[150px] max-md:w-[130px]  max-mini:w-[100px]  opacity-100"
            }
          >
            <div
              onClick={() => setSort("DESC")}
              className="w-[87px] cursor-pointer select-none h-[55px] flex justify-center dark:bg-[#1a1a2e] dark:text-white  bg-[#cecece] rounded-xl items-center"
            >
              <div className="w-[65%] justify-center items-center text-[15px] text-right pr-1 ">
                نزولی
              </div>
              <div className="w-[40%] justify-center items-center text-[20px]">
                <HiOutlineSortDescending />
              </div>
            </div>

            <div
              onClick={() => setSort("ASCE")}
              className="w-[87px] cursor-pointer select-none h-[55px] flex justify-center dark:bg-[#1a1a2e] dark:text-white bg-[#cecece] rounded-xl items-center"
            >
              <div className="w-[65%] justify-center items-center text-[15px] text-right pr-1 ">
                صعودی
              </div>
              <div className="w-[25%] justify-center items-center text-[20px]">
                <HiOutlineSortAscending />
              </div>
            </div>
          </div>

          <input
            className="w-[620px] w- h-[90%] dark:bg-[#111827]  bg-[#ECEFF1] rounded-[20px] text-right pr-5 max-lg:w-[400px] max-md:w-[250px] max-md:h-[80%] max-mini:w-[150px] max-mini:text-[12px] max-mini:h-[65%] max-short:w-[120px] max-short:text-[10px]"
            placeholder="چی میخوای یاد بگیری؟"
            type="search"
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <div className="w-[100px] h-[100%]  dark:bg-[#111827] bg-[#ECEFF1] rounded-[16px]  flex justify-between items-center mr-1 px-1 max-md:w-[90px] max-md:h-[80%] max-mini:h-[65%] max-lg:justify-center max-lg:hidden">
            <button
              onClick={() => ButtonClick("zirhm")}
              className="w-[40px] dark:bg-[#1a1a2e] bg-[#FFFFFF] h-[40px] rounded-[16px] hover:cursor-pointer max-md:w-[35px] max-md:h-[35px] max-mini:bg-[#fff0] "
            >
              <img
                className="my-2 mx-2 max-md:my-1 max-md:mx-[6px]"
                src={Grid}
                alt=""
              />
            </button>
            <div
              onClick={() => ButtonClick("knrhm")}
              className="w-[40px] dark:bg-[#1a1a2e] bg-[#FFFFFF] h-[40px] rounded-[16px] hover:cursor-pointer max-md:w-[35px] max-md:h-[35px] max-mini:bg-[#5a303000] "
            >
              <img
                className=" my-2 mx-2 max-md:my-1 max-md:mx-[6px]"
                src={Grid2}
                alt=""
              />
            </div>
          </div>
        </div>

        <Items view={view} courseList={courseList} Search={Search} />

        {/* <ResponsivePagination
          total={totalPages}
          current={currentPage}
          onPageChange={(page) => handlePageChange(page)}
        /> */}
      </div>
      <Filter
        setType={setType}
        setLevel={setLevel}
        setTech={setTech}
        setTecher={setTecher}
      />
    </div>
  );
};

export default ItemList;
