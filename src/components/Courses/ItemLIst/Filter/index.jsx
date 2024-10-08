import React from "react";
import p1 from "../../../../assets/images/Courses/filter.png";
import p2 from "../../../../assets/images/Courses/Delete.png";
import p3 from "../../../../assets/images/Courses/arrow-down.png";

const filter = () => {
  return (
    <div className="w-[295px] h-[100px]  rounded-[20px]  flex flex-wrap   justify-center max-xl:hidden mb-64">
      <div className=" w-[280px] h-[50px]   bg-grayyy rounded-[10px] relative ">
        <img
          className=" absolute right-[10px] top-[15px]  "
          src={p1}
          alt="image"
        />
        <span className=" font-[YekanBakh] text-gray absolute right-[35px] top-[15px]  ">
          {" "}
          فیلتر{" "}
        </span>
        <img
          className=" absolute left-[10px] top-[8px]  "
          src={p2}
          alt="image"
        />
      </div>

      <div className="w-[280px]  ">
        <ul className="accardion">
          <li className="relative  ">
            <input type="checkbox" id="c0" name="na" />
            <label
              className="w-[280px] h-[50px] rounded-[10px] cursor-pointer"
              for="c0"
            >
              <img
                className=" absolute left-[15px] top-[15px]  "
                src={p3}
                alt="image"
              />{" "}
              <span class="tip absolute top-[15px]  right-[15px]  font-[YekanBakhBold] text-right  text-gray ">
                {" "}
                دسته بندی‌ ها{" "}
              </span>
            </label>
            <div class="content">
              <input className="hidden" id="cat0" type="radio" name="cat" />
              <label
                className="w-[280px] h-[50px] bg-darkwhite  rounded-[10px] cursor-pointer block border-solid  border-sky-500 relative "
                for="cat0"
              >
                <span className=" absolute right-[35px] top-[15px] font-[YekanBakh]  ">
                  {" "}
                  ریکت{" "}
                </span>{" "}
              </label>
            </div>
          </li>

          <li className="relative  ">
            <input type="checkbox" id="c1" name="na" />
            <label
              className="w-[280px] h-[50px] rounded-[10px] cursor-pointer"
              for="c1"
            >
              <img
                className=" absolute left-[15px] top-[15px]  "
                src={p3}
                alt="image"
              />{" "}
              <span class="tip absolute top-[15px]  right-[15px]  font-[YekanBakhBold] text-right  text-gray ">
                {" "}
                قیمت{" "}
              </span>
            </label>
            <div class="content  relative  ">
              <input
                className="absolute right-[10px] top-[10px] "
                id="cat1"
                type="radio"
                name="cat"
              />
              <label className="absolute right-[25px]" for="cat1">
                {" "}
                فقط رایگان{" "}
              </label>

              <input
                className="absolute left-[150px] top-[10px] "
                id="cat2"
                type="radio"
                name="cat"
              />
              <label className="absolute left-[90px]  " for="cat2">
                {" "}
                فقط پولی{" "}
              </label>

              <input
                className="absolute left-[40px] top-[10px] "
                id="cat3"
                type="radio"
                name="cat"
                checked
              />
              <label className="absolute left-[10px]  " for="cat3">
                {" "}
                همه{" "}
              </label>

              {/* <output id="priFromOut"> 0 </output>
                      <span> از </span>
                      <input id="priFrom" type="range" min="0" max="1000000" step="10000" value="0"/>

                      <output id="priToOut"> 1000000 </output>
                       <span> تا </span>
                       <input id="priTo" type="range" min="0" max="1000000" step="10000" value="1000000"/> */}
            </div>
          </li>

          <li className="relative ">
            <input type="checkbox" id="c2" name="na" />
            <label
              className="w-[280px] h-[50px] rounded-[10px] cursor-pointer"
              for="c2"
            >
              <img
                className=" absolute left-[15px] top-[15px]  "
                src={p3}
                alt="image"
              />{" "}
              <span class="tip absolute top-[15px]  right-[15px]  font-[YekanBakhBold] text-right  text-gray ">
                {" "}
                موضوعات{" "}
              </span>
            </label>
            {/* <div class="content"> 
                   <input className="hidden" id="cat2" type="radio" name="cat"/> 
                   <label className="w-[280px] h-[50px] bg-darkwhite  rounded-[10px] cursor-pointer block border-solid  border-sky-500 relative " for="cat2"><span className=" absolute right-[35px] top-[15px] font-[YekanBakh]  ">  ریکت  </span> </label>  
                  </div> */}
          </li>

          <li className="relative  ">
            <input type="checkbox" id="c3" name="na" />
            <label
              className="w-[28px] h-[50px] rounded-[10px] cursor-pointer"
              for="c3"
            >
              <img
                className=" absolute left-[15px] top-[15px]  "
                src={p3}
                alt="image"
              />{" "}
              <span class="tip absolute top-[15px]  right-[15px]  font-[YekanBakhBold] text-right  text-gray ">
                {" "}
                مدت زمان{" "}
              </span>
            </label>
            <div class="content relative">
              <input
                className="block absolute top-[15px] right-[5px] "
                id="cat1"
                type="radio"
                name="cat"
              />
              <label
                className="block absolute right-[25px] top-[10px] "
                for="cat1"
              >
                {" "}
                15 روزه{" "}
              </label>

              <input
                className=" block absolute top-[43px] right-[5px] "
                id="cat2"
                type="radio"
                name="cat"
              />
              <label
                className=" block absolute right-[25px] top-[40px] "
                for="cat2"
              >
                {" "}
                30 روزه{" "}
              </label>

              <input
                className=" block absolute top-[73px] right-[5px] "
                id="cat3"
                type="radio"
                name="cat"
                checked
              />
              <label
                className="block absolute right-[25px] top-[70px]"
                for="cat3"
              >
                {" "}
                45 روزه{" "}
              </label>

              <input
                className="block absolute top-[103px] right-[5px] "
                id="cat1"
                type="radio"
                name="cat"
              />
              <label
                className="block absolute right-[25px] top-[100px] "
                for="cat1"
              >
                {" "}
                60 روزه{" "}
              </label>

              <input
                className=" block absolute top-[130px] right-[5px] "
                id="cat2"
                type="radio"
                name="cat"
              />
              <label
                className=" block absolute right-[25px] top-[130px] "
                for="cat2"
              >
                {" "}
                90 روزه{" "}
              </label>
            </div>
          </li>

          <li className="relative ">
            <input type="checkbox" id="c4" name="na" />
            <label
              className="w-[280px] h-[50px] rounded-[10px] cursor-pointer"
              for="c4"
            >
              <img
                className=" absolute left-[15px] top-[15px]  "
                src={p3}
                alt="image"
              />{" "}
              <span class="tip absolute top-[15px]  right-[15px]  font-[YekanBakhBold] text-right  text-gray ">
                {" "}
                اساتید دوره{" "}
              </span>
            </label>
            <div class="content relative">
              <input
                className="block absolute top-[15px] right-[5px] "
                id="cat1"
                type="radio"
                name="cat"
              />
              <label
                className="block absolute right-[25px] top-[10px] "
                for="cat1"
              >
                {" "}
                دکتر بحرالعلوم{" "}
              </label>

              <input
                className=" block absolute top-[43px] right-[5px] "
                id="cat2"
                type="radio"
                name="cat"
              />
              <label
                className=" block absolute right-[25px] top-[40px] "
                for="cat2"
              >
                {" "}
                مسعود هشمتی{" "}
              </label>

              <input
                className=" block absolute top-[73px] right-[5px] "
                id="cat3"
                type="radio"
                name="cat"
                checked
              />
              <label
                className="block absolute right-[25px] top-[70px]"
                for="cat3"
              >
                {" "}
                بهاره یزدانی{" "}
              </label>

              <input
                className="block absolute top-[103px] right-[5px] "
                id="cat1"
                type="radio"
                name="cat"
              />
              <label
                className="block absolute right-[25px] top-[100px] "
                for="cat1"
              >
                {" "}
                سالار حیدری{" "}
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default filter;
