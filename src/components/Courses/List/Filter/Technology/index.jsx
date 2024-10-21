import React, { useEffect, useState } from "react";
import { getFiltertecnology } from "@core/servises/api/Courses/Filter/Technology";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Technology = ({ setTech }) => {
  const [coursetecnology, setcoursetecnology] = useState([]);

  const getCoursefiltertecnology = async () => {
    const courses = await getFiltertecnology();
    setcoursetecnology(courses);
  };

  useEffect(() => {
    getCoursefiltertecnology();
  }, []);

  return (
    <>
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
            تکنولوژی 
          </AccordionSummary>
          <AccordionDetails className=" flex justify-end mt-[-15px] flex-wrap">
            {coursetecnology.map((item, index) => {
              return (
                <div
                  className=" text-right flex justify-end mt-[0.5rem]"
                  key={index}
                  onClick={() => {
                    setTech(item.id);
                  }}
                >
                  <input
                    type="radio"
                    id={item.techName}
                    name="filter"
                    value={item.techName}
                    className="peer hidden"
                  />
                  <label
                    htmlFor={item.techName}
                    className="block mr-[0.5rem] hover:text-[#2196F3] hover:cursor-pointer"
                  >
                    {item.techName}
                  </label>
                  <label
                    htmlFor={item.techName}
                    className="border border-solid border-[#c4c4c4] h-[1.1rem] w-[1.1rem] mt-[0.21rem] bg-[#dee5e7] mr-[1rem] block 
          peer-checked:bg-[#2196F3] peer-checked:border-none bg-no-repeat bg-cover rounded-[7px] hover:cursor-pointer hover:bg-[#85c8ff]"
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

export default Technology;
