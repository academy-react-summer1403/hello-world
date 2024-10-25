import React, { useEffect, useState } from "react";
import { getFilterteacher } from "@core/servises/api/Courses/Filter/Teacher";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Teachers = ({ setTecher }) => {
  const [courseteacher, setcourseteacher] = useState([]);

  const getCoursefilterteacher = async () => {
    const courses = await getFilterteacher();
    setcourseteacher(courses);
  };

  useEffect(() => {
    getCoursefilterteacher();
  }, []);

  return (
    <div className="border-none w-full shadow-none">
      <Accordion
        classes={{
          root: "!shadow-none !border-b-[1px] !rounded-[0px] border-solid border-[#e7e7e7] mb-1 last:mt-1 last:mb-1",
        }}
        // className=" w-full shadow-none"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          dir="rtl"
        >
          اساتید
        </AccordionSummary>
        <AccordionDetails className=" flex text-[14px] text-[#455A64] justify-end mt-[-10px] flex-wrap">
          {courseteacher.map((item, index) => {
            return (
              <div
                className="w-full my-2 text-right flex flex-wrap justify-end mt-[0.5rem] mr-[-5px]"
                key={index}
                onClick={() => {
                  setTecher(item.teacherId);
                }}
              >
                <input
                  type="radio"
                  id={item.fullName}
                  name="filter"
                  value={item.fullName}
                  className="peer hidden"
                />
                <label
                  htmlFor={item.fullName}
                  className="block mr-[0.5rem] hover:text-[#2196F3] hover:cursor-pointer"
                >
                  {item.fullName}
                </label>
                <label
                  htmlFor={item.fullName}
                  className="border border-solid border-[#c4c4c4] h-[17px] w-[17px] mt-[0.21rem] bg-[#dee5e7] mr-[1rem] block peer-checked:bg-[#2196F3] peer-checked:border-none bg-no-repeat bg-cover rounded-[6px] hover:cursor-pointer hover:bg-[#85c8ff]"
                ></label>
              </div>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Teachers;
