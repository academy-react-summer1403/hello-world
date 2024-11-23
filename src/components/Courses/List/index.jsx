import React, { useEffect, useRef } from "react";
import Arrow from "../../../assets/images/Courses/Arrow.png";
import Sort from "../../../assets/images/Courses/Sort.png";
import Grid from "../../../assets/images/Courses/Grid.png";
import Grid2 from "../../../assets/images/Courses/Grid2.png";
import Items from "./Items";
import Filter from "./Filter/index.jsx";
import FilterResponsive from "./FilterResponsive/index.jsx";
import { useState } from "react";
import { getCourseList } from "@core/servises/api/Courses/Course/index";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { HiOutlineSortAscending } from "react-icons/hi";
// import Pagination from "@mui/material/Pagination";
import { HiOutlineSortDescending } from "react-icons/hi";
import { MdKeyboardVoice, MdOutlineKeyboardVoice } from "react-icons/md";

// right filter

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

const ItemList = () => {
  const [searchQuery, setSearchQuery] = useState();
  const [view, setView] = useState("knrhm");
  const [type, setType] = useState();
  const [level, setLevel] = useState();
  const [tech, setTech] = useState();
  const [techer, setTecher] = useState();
  const [courseList, setCourseList] = useState([]);
  const [sortbox, setSortbox] = useState(false);
  const [sort, setSort] = useState("DESC");
  const [currentPage, setCurrentPage] = useState(1);
  const [courses, setCourses] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(9);
  const [CostDown,setCostDown] = useState();
  const [CostUp,setCostUp] = useState();

  const [skeleton, setSkeleton] = useState(true);

  const setSkelet = async () => {
    const response = await getCourseList();
    console.log("response", response);
    setSkeleton(false);
  };
  const [isListening, setIsListening] = useState(false);
  const recognition = useRef(null);

  useEffect(() => {
    if (window.SpeechRecognition || window.webkitSpeechRecognition) {
      recognition.current = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      recognition.current.continuous = false;
      recognition.current.interimResults = false;
      recognition.current.lang = "fa-IR";

      recognition.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchQuery(transcript);
      };

      recognition.current.onend = () => {
        setIsListening(false);
      };
    } else {
      console.warn("Speech recognition is not supported in this browser.");
    }
  }, []);

  const handleListening = () => {
    if (isListening) {
      recognition.current.stop();
      setIsListening(false);
    } else {
      recognition.current.start();
      setIsListening(true);
    }
  };
  console.log(skeleton);

  const getList = async () => {
    const params = {
      CourseTypeId: type,
      courseLevelId: level,
      TeacherId: techer,
      SortType: sort,
      PageNumber: page,
      RowsOfPage: rowsPerPage,
      Query: searchQuery||undefined,
      CostDown: CostDown,
      CostUp:CostUp,
    };
    const response = await getCourseList(params);
    setCourseList(response.courseFilterDtos);
    setCourses(response.courseFilterDtos);
    setTotalCount(response.totalCount);
    console.log("response", response);
    setSkeleton(false);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    getList();
  }, [type, level, techer, tech, sort, page, rowsPerPage,CostUp,CostDown,searchQuery,currentPage]);

  const ButtonClick = (arg) => {
    setView(arg);
  };

  console.log(view);

  // right filter

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 290 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <FilterResponsive
        setType={setType}
        setLevel={setLevel}
        setTech={setTech}
        setTecher={setTecher}
      />
    </Box>
  );

  return (
    <div className="w-full flex justify-center flex-wrap  gap-5 pt-20">
      {/* <TopFilter/> */}
      <div className="max-w-[960px] w-[90%] pb-10 flex justify-center flex-wrap content-start max-xl:w-[950px] max-lg:w-[720px] max-lg:justify-evenly max-md:w-[640px] max-sm:w-[450px] max-short:w-[350px]">
        <div className="w-full  mb-8 h-[55px] flex justify-between items-center max-lg:w-[700px] max-md:justify-around">
          <div
            onClick={() => setSortbox(!sortbox)}
            className="w-[200px] select-none  cursor-pointer dark:bg-[#111827] transition duration-300 ease-in-out bg-[#ECEFF1] rounded-[16px] h-full flex items-center pl-2 max-lg:w-[150px] max-md:w-[130px] max-md:h-[80%]  max-mini:w-[100px]  max-mini:h-[65%]"
          >
            <div className="w-10 h-10 rounded-[50%]  hover:cursor-pointer  max-mini:w-[15px]">
              <img className="m-auto mt-3 bg-[#ECEFF1]" src={Arrow} alt="" />
            </div>
            <div className="w-[75%] h-full ml-1 flex justify-start items-center pl-2">
              <h3 className="dark:text-white transition duration-300 ease-in-out text-[#263238] w-[85px] text-center text-[15px] max-lg:text-[12px] max-md:text-[11px]  max-mini:text-[9px]">
                مرتب سازی{" "}
              </h3>
              <img className="ml-3 max-lg:hidden " src={Sort} alt="" />
            </div>
          </div>

          <div
            className={
              sortbox === false
                ? "absolute transition-[0.1] w-[200px] transition duration-300 ease-in-out dark:bg-[#111827] bg-[#ECEFF1] mt-36 border-[1px] justify-center gap-1 flex border-solid dark:border-[#1a1a2e] border-[#d3d6d8] rounded-[16px] h-[0px] items-center pl-2 max-lg:w-[150px] max-md:w-[130px] max-md:h-[80%]  max-mini:w-[100px]  max-mini:h-[65%] opacity-0"
                : "absolute transition-[0.1] w-[200px] transition duration-300 ease-in-out dark:bg-[#111827] bg-[#ECEFF1] mt-36 border-[1px] justify-center gap-2 border-solid dark:border-[#1a1a2e] border-[#d3d6d8] rounded-[16px] h-[70px] flex items-center max-lg:w-[150px] max-md:w-[130px]  max-mini:w-[100px]  opacity-100"
            }
          >
            <div
              onClick={() => setSort("DESC")}
              className="w-[87px] cursor-pointer select-none h-[55px] flex justify-center transition duration-300 ease-in-out dark:bg-[#1a1a2e] dark:text-white  bg-[#cecece] rounded-xl items-center"
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
              className="w-[87px] cursor-pointer select-none h-[55px] flex justify-center transition duration-300 ease-in-out dark:bg-[#1a1a2e] dark:text-white bg-[#cecece] rounded-xl items-center"
            >
              <div className="w-[65%] justify-center items-center text-[15px] text-right pr-1 ">
                صعودی
              </div>
              <div className="w-[25%] justify-center items-center text-[20px]">
                <HiOutlineSortAscending />
              </div>
            </div>
          </div>

          <button
            className="w-10 h-10 rounded-full transition duration-300 ease-in-out dark:bg-[#1a1a2e] relative left-14 bg-white z-10"
            onClick={handleListening}
          >
            {isListening ? (
              <MdKeyboardVoice className="m-auto" size={"20px"} />
            ) : (
              <MdOutlineKeyboardVoice className="m-auto" size={"20px"} />
            )}
          </button>
          <input
            className="w-[620px] w- h-[90%] transition duration-300 ease-in-out dark:bg-[#111827]  bg-[#ECEFF1] rounded-[20px] text-right pr-5 max-lg:w-[400px] max-md:w-[250px] max-md:h-[80%] max-mini:w-[150px] max-mini:text-[12px] max-mini:h-[65%] max-short:w-[120px] max-short:text-[10px]"
            type="search"
            value={searchQuery}
            placeholder="چی میخوای یاد بگیری؟"
            onChange={(e) => setSearchQuery(e.target.value)}
          ></input>
          <div className="w-[100px] h-[100%] transition duration-300 ease-in-out dark:bg-[#111827] bg-[#ECEFF1] rounded-[16px]  flex justify-between items-center mr-1 px-1 max-md:w-[90px] max-md:h-[80%] max-mini:h-[65%] max-lg:justify-center max-lg:hidden">
            <button
              onClick={() => ButtonClick("zirhm")}
              className="w-[40px] transition duration-300 ease-in-out dark:bg-[#1a1a2e] bg-[#FFFFFF] h-[40px] rounded-[16px] hover:cursor-pointer max-md:w-[35px] max-md:h-[35px] max-mini:bg-[#fff0] "
            >
              <img
                className="my-2 mx-2 max-md:my-1 max-md:mx-[6px]"
                src={Grid}
                alt=""
              />
            </button>
            <div
              onClick={() => ButtonClick("knrhm")}
              className="w-[40px] transition duration-300 ease-in-out dark:bg-[#1a1a2e] bg-[#FFFFFF] h-[40px] rounded-[16px] hover:cursor-pointer max-md:w-[35px] max-md:h-[35px] max-mini:bg-[#5a303000] "
            >
              <img
                className=" my-2 mx-2 max-md:my-1 max-md:mx-[6px]"
                src={Grid2}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="w-full">
          <Items
            view={view}
            skeleton={skeleton}
            setSkelet={setSkelet}
            setView={setView}
            courseList={courses}
          />

          <Pagination
            className="w-full mt-10 justify-center flex"
            count={Math.ceil(totalCount / rowsPerPage)}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </div>
      </div>
      <Filter
        getList={getList}
        skeleton={skeleton}
        setSkelet={setSkelet}
        setType={setType}
        setLevel={setLevel}
        setTech={setTech}
        setTecher={setTecher}
        setSkeleton={setSkeleton}
        CostUp={setCostUp}
        CostDown={CostDown}
        setCostDown={setCostDown}
        setCostUp={setCostUp}
      />
      
      {/* filter right  */}

      <div className="w-[170px] h-16 xx:hidden fixed right-[-50px] bottom-48">
        {[""].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button
              className="w-full h-full flex justify-center flex-wrap  gap-10 text-white text-right"
              onClick={toggleDrawer(anchor, true)}
            >
              <div className="w-[70px] h-full left-0 rounded-l-[30px] font-[YekanBakhBold] border-[3px] border-solid border-[#888] text-white flex justify-center items-center bg-[#b8b8b8]">
                فیلتر
              </div>
              {anchor}
            </Button>
            <Drawer
              className="text-white"
              anchor={"right"}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
