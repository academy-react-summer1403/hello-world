import React, { useEffect, useState } from "react";
import { getCourseList } from "@core/servises/api/Courses/Course/index";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Slider from "@mui/material/Slider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PriceFilter = ({ setCostDown, setCostUp }) => {
  const [priceRange, setPriceRange] = useState([100000, 1000000]); // Initial range, adjust as needed

  const handleSliderChange = (event, newValue) => {
    console.log("newValue", newValue);
    setPriceRange(newValue);
    setCostDown(newValue[0]);
    setCostUp(newValue[1]);
  };

  return (
    <div className="border-none w-full shadow-none">
      <Accordion
        classes={{
          root: "!shadow-none !border-b-[1px] dark:!bg-[#111827] dark:!text-white !transition !duration-300 !ease-in-out !rounded-[0px] border-solid border-[#e7e7e7] mb-1 last:mt-1 last:mb-1",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          dir="rtl"
        >
          قیمت
        </AccordionSummary>
        <AccordionDetails className="text-[14px] text-[#455A64] flex flex-col justify-end">
          <Slider
            value={priceRange}
            onChange={handleSliderChange}
            valueLabelDisplay="auto"
            min={50000} // Set minimum price as needed
            max={5000000} // Set maximum price as needed
            step={50000} // Step size for price increments
            // marks={[
            //   { value: 50000, label: '۵۰,۰۰۰ تومان' },
            //   { value: 5000000, label: '۵,۰۰۰,۰۰۰ تومان' },
            // ]}
          />
          <div className="flex justify-between mt-2">
            <span>تا {priceRange[1].toLocaleString()} تومان</span>
            <span>از {priceRange[0].toLocaleString()} تومان</span>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default PriceFilter;
