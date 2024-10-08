import React from "react";
// import "./TopFilter.css";

const TopFilter = () => {
  return (
    <div className="dv w-[920px]  border flex justify-center flex-wrap xl-">
      <ul className="accardion ">
        <li className="relative mb-[10px]">
          <input type="checkbox" id="c0" name="na" />
          <label
            className="w-[700px] h-[50px] bg-blue1 rounded-[10px] cursor-pointer"
            htmlFor="c0"
          >
            <span className="tip absolute top-[15px]  right-[35px]  font-[YekanBakhBold] text-right  text-white ">
              {" "}
              فصل اول: Html چیست؟{" "}
            </span>
          </label>
          <div className="content">
            <input className="hidden" id="cat0" type="radio" name="cat" />
            <label
              className="w-[700px] h-[50px] bg-darkwhite  rounded-[10px] cursor-pointer block border-solid  border-sky-500 relative bg-[#a8e6ff] "
              htmlFor="cat0"
            >
              <span className=" absolute right-[35px] top-[15px] font-[YekanBakh] ">
                {" "}
                آشنایی با html{" "}
              </span>{" "}
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TopFilter;
