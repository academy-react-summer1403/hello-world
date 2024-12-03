import React, { useEffect, useState } from "react";
import { getFiltercourse } from "@core/servises/api/Courses/Filter/Category";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Category = ({ setType, setSkelet, setSkeleton, getList }) => {
  const [coursetypename, setcoursetypename] = useState([]);

  const setData = () => {
    setSkeleton(true);
  };

  const getCoursefiltertype = async () => {
    const courses = await getFiltercourse();
    setcoursetypename(courses);
  };

  useEffect(() => {
    getCoursefiltertype();
  }, []);

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    setSkelet();
  }, []);

  return (
    <>
      <div className="border-none w-full shadow-none">
        <Accordion
          classes={{
            root: "!shadow-none !border-b-[1px] dark:!bg-[#111827] dark:!text-white !transition !duration-300 !ease-in-out !rounded-[0px] border-solid border-[#e7e7e7] mb-1 last:mt-1 last:mb-1",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="belu" />}
            aria-controls="panel1-content"
            id="panel1-header"
            dir="rtl"
          >
            نوع کلاس
          </AccordionSummary>
          <AccordionDetails className=" flex text-[14px] dark:text-white transition duration-300 ease-in-out text-[#455A64] justify-end mt-[-10px] flex-wrap">
            {coursetypename.map((item, index) => {
              return (
                <div
                  className="w-full my-2 text-right flex flex-wrap justify-end mt-[0.5rem] mr-[-5px]"
                  key={index}
                  onClick={() => {
                    setType(item.id);
                  }}
                >
                  <input
                    type="radio"
                    id={item.typeName}
                    name="filter"
                    value={item.typeName}
                    className="peer hidden"
                    onClick={setData}
                  />
                  <label
                    htmlFor={item.typeName}
                    className="block mr-[0.5rem] hover:text-[#2196F3] hover:cursor-pointer"
                  >
                    {item.typeName}
                  </label>
                  <label
                    htmlFor={item.typeName}
                    className="border border-solid border-[#c4c4c4] h-[17px] w-[17px] mt-[0.21rem] bg-[#dee5e7] mr-[1rem] block peer-checked:bg-[#2196F3] peer-checked:border-none bg-no-repeat bg-cover rounded-[6px] hover:cursor-pointer hover:bg-[#85c8ff]"
                  ></label>
                </div>
              );
            })}
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default Category;
