import React, { useEffect, useState } from "react";
import { getFilterlevel } from "@core/servises/api/Courses/Filter/Sort";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Sort = ({ setLevel }) => {
  const [courselevel, setcourselevel] = useState([]);

  const getCoursefilterlevel = async () => {
    const courses = await getFilterlevel();
    setcourselevel(courses);
  };

  useEffect(() => {
    getCoursefilterlevel();
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
          سطح
        </AccordionSummary>
        <AccordionDetails className=" flex text-[14px] text-[#455A64] justify-end mt-[-10px] flex-wrap">
          {courselevel.map((item, index) => {
            return (
              <div
                className="w-full my-2 text-right flex flex-wrap justify-end mt-[0.5rem] mr-[-5px]"
                key={index}
                onClick={() => {
                  setLevel(item.id);
                }}
              >
                <input
                  type="radio"
                  id={item.levelName}
                  name="filter"
                  value={item.levelName}
                  className="peer hidden"
                />

                <label
                  htmlFor={item.levelName}
                  className="block mr-[0.5rem]  hover:text-[#2196F3] hover:cursor-pointer"
                >
                  {item.levelName}
                </label>
                <label
                  htmlFor={item.levelName}
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

export default Sort;
