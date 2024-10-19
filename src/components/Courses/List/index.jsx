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

const ItemList = () => {
  const [view, setView] = useState("knrhm");
  const [type, setType] = useState();
  const [level, setLevel] = useState();
  const [tech, setTech] = useState();
  const [techer, setTecher] = useState();
  const [courseList, setCourseList] = useState([]);

  const getList = async () => {
    const params = {
      CourseTypeId: type,
      courseLevelId: level,
      TeacherId: techer,
      RowsOfPage: 9,
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

  const ButtonClick = (arg) => {
    setView(arg);
  };

  return (
    <div className="w-full flex justify-center flex-wrap  gap-5 pt-20">
      {/* <TopFilter/> */}
      <div className="max-w-[950px] w-[90%] pb-10 flex justify-center flex-wrap content-start max-lg:w-[720px] max-lg:justify-evenly max-md:w-[640px] max-sm:w-[450px] max-short:w-[350px]">
        <div className="w-full  mb-8 h-[55px] flex justify-between items-center max-lg:w-[700px] max-md:justify-around">
          <div className="w-[200px] bg-[#ECEFF1] rounded-[16px] h-full flex items-center pl-2 max-lg:w-[150px] max-md:w-[130px] max-md:h-[80%]  max-mini:w-[100px]  max-mini:h-[65%]">
            <div className="w-10 h-10 rounded-[50%]  hover:cursor-pointer  max-mini:w-[15px]">
              <img className="m-auto mt-3 bg-[#ECEFF1]" src={Arrow} alt="" />
            </div>
            <div className="w-[75%] h-full ml-1 flex justify-start items-center pl-2">
              <h3 className="text-[#263238] text-[15px] max-lg:text-[12px] max-md:text-[11px]  max-mini:text-[9px]">
                محبوب ترین ها
              </h3>
              <img className="ml-3 max-lg:hidden" src={Sort} alt="" />
            </div>
          </div>
          <input
            className="w-[620px] w- h-[90%] bg-[#ECEFF1] rounded-[20px] text-right pr-5 max-lg:w-[400px] max-md:w-[250px] max-md:h-[80%] max-mini:w-[150px] max-mini:text-[12px] max-mini:h-[65%] max-short:w-[120px] max-short:text-[10px]"
            placeholder="چی میخوای یاد بگیری؟"
            type="search"
          ></input>
          <div className="w-[100px] h-[100%] bg-[#ECEFF1] rounded-[16px]  flex justify-between items-center mr-1 px-1 max-md:w-[90px] max-md:h-[80%] max-mini:h-[65%] max-lg:justify-center max-lg:hidden">
            <button
              onClick={() => ButtonClick("zirhm")}
              className="w-[40px] bg-[#FFFFFF] h-[40px] rounded-[16px] hover:cursor-pointer max-md:w-[35px] max-md:h-[35px] max-mini:bg-[#fff0] "
            >
              <img
                className="my-2 mx-2 max-md:my-1 max-md:mx-[6px]"
                src={Grid}
                alt=""
              />
            </button>
            <div
              onClick={() => ButtonClick("knrhm")}
              className="w-[40px] bg-[#FFFFFF] h-[40px] rounded-[16px] hover:cursor-pointer max-md:w-[35px] max-md:h-[35px] max-mini:bg-[#5a303000] "
            >
              <img
                className="my-2 mx-2 max-md:my-1 max-md:mx-[6px]"
                src={Grid2}
                alt=""
              />
            </div>
          </div>
        </div>

        <Items view={view} courseList={courseList} />

        <Stack className=" w-full items-center mt-9 mb-0" spacing={2}>
          <Pagination count={10} color="primary" />
        </Stack>

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
