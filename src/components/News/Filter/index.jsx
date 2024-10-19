import React from "react";

const Filter = () => {
  return (
    <div className="flex flex-nowrap justify-between px-5 items-center gap-[20px] w-[1300px] h-[70px] max-xl:w-[1100px] max-xl:pr-10 max-sm:w-[600px] max-mini:flex-wrap max-mini:justify-center max-mini:h-[190px]">
      <div className="div1  w-[400px] h-[60px]  rounded-[20px] bg-white max-sm:w-[320px] max-mini:w-[100%] max-mini:flex">
        <ul className="accardion w-[600px] flex justify-end gap-[20px] max-xl:gap-0 max-mini:justify-center">
          <li className="relative ml-5 mb-[10px] top-[10px] ">
            <input type="checkbox" id="c0" name="na" />
            <label
              className="w-[95px] h-[40px] bg-blue1 rounded-[10px] cursor-pointer max-lg:w-[75px] max-lg:h-[35px] max-md:w-[60px] max-md:h-[30px] "
              for="c0"
            >
              {" "}
              <span class="tip absolute top-[10px]  right-[37px]  myFontMiniBold text-[14px] text-center  text-white max-lg:text-[12px] max-lg:right-[27px ] max-md:text-[10px] max-md:right-5 max-sm:text-[9px]">
                {" "}
                همه{" "}
              </span>
            </label>
          </li>

          <li className="relative ml-5 mb-[10px] top-[10px] ">
            <input type="checkbox" id="c1" name="na" />
            <label
              className="w-[95px] h-[40px] bg-blue1 rounded-[10px] cursor-pointer max-lg:w-[75px] max-lg:h-[35px] max-md:w-[60px] max-md:h-[30px] "
              for="c1"
            >
              {" "}
              <span class="tip absolute top-[10px] right-[8px]  myFontMiniBold text-[14px] text-center  text-white max-lg:text-[12px] max-lg:right-[5px] max-md:text-[10px] max-sm:text-[9px]">
                {" "}
                محبوب‌ترین‌ها{" "}
              </span>
            </label>
          </li>

          <li className="relative ml-5 mb-[10px] top-[10px] ">
            <input type="checkbox" id="c2" name="na" />
            <label
              className="w-[95px] h-[40px] bg-blue1 rounded-[10px] cursor-pointer max-lg:w-[75px] max-lg:h-[35px] max-md:w-[60px] max-md:h-[30px] "
              for="c2"
            >
              {" "}
              <span class="tip absolute top-[10px]  right-[9px] myFontMiniBold text-[14px] text-center  text-white max-lg:text-[12px] max-lg:right-[5px] max-md:text-[10px] max-md:right-1 max-sm:right-[5px] max-sm:text-[9px]">
                {" "}
                پربازدیدترین‌ها{" "}
              </span>
            </label>
          </li>

          <li className="relative ml-5 mb-[10px] top-[10px] ">
            <input type="checkbox" id="c3" name="na" />
            <label
              className="w-[95px] h-[40px] bg-blue1 rounded-[10px] cursor-pointer max-lg:w-[75px] max-lg:h-[35px] max-md:w-[60px] max-md:h-[30px] "
              for="c3"
            >
              {" "}
              <span class="tip absolute top-[10px] right-[15px]  myFontMiniBold text-[14px] text-center  text-white max-lg:text-[12px] max-lg:right-[10px]  max-md:text-[10px] max-sm:right-[8px] max-sm:text-[9px]">
                {" "}
                جدیدترین‌ها{" "}
              </span>
            </label>
          </li>
        </ul>
      </div>

      <div className="div2 w-[600px] h-[60px]     bg-white relative max-xl:w-[380px] max-lg:w-[300px] max-md:w-[230px]  max-sm:w-[130px] max-mini:w-[400px] max-mini:flex max-mini:justify-center max-mini:pl-[17px] max-mini:mt-[-110px]">
        <input
          className=" w-[110%] h-[50px] top-1 rounded-[20px] text-right pr-3 bg-[#ebebeb] myFontMiniBold text-[17px] absolute max-lg:h-[40px] max-md:h-[35px] max-md:top-2 max-md:text-[13px] max-mini:w-[80%] mini:right-0"
          type="search"
          placeholder="دنبال چی میگردی ؟؟ "
        ></input>
      </div>
    </div>
  );
};

export default Filter;
