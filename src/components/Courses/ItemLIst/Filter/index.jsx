import React from "react";
import filterIcon from "@assets/images/Courses/filter.svg";
import trashIcon from "@assets/images/Courses/trash.svg";
import p1 from "../../../../assets/images/Courses/arrowDown.png";
const filter = () => {
  return (
    <div>
      <div className="w-[295px] h-[1000px] rounded-[20px]  flex flex-wrap bg-[#fff]  relative  justify-center max-xl:hidden mb-64">
        <div className=" w-[280px] h-[50px]   bg-grayyy rounded-[15px] relative ">
          <img
            className=" absolute right-[10px] top-[15px]  "
            src={filterIcon}
            alt="image"
          />
          <span className=" font-[YekanBakh] text-gray absolute right-[35px] top-[15px]  ">
            {" "}
            فیلتر{" "}
          </span>

          <button className="w-[32px] h-[32px] bg-red-500 rounded-[12px] flex justify-center absolute left-[10px] top-[8px] items-center">
            <img src={trashIcon} />
          </button>
        </div>

        <div
          className="absolute top-[70px] border  w-[280px] bg-[#fff] 
     rounded-xl mb-[1rem]"
        >
          <input
            type="checkbox"
            id="inputrange"
            className="absolute peer opacity-0"
          />

          <label
            for="inputrange"
            className="font-[YekanBakhBold] tracking-[1px] mx-[180px] h-[50px] flex items-center"
          >
            {" "}
            دسته‌بندی‌ها{" "}
          </label>
          <label
            for="inputrange"
            className="h-[1rem] w-[1rem] bg-[url('././././assets/img/courses/plus.png')] bg-no-repeat bg-cover absolute top-[17px] left-[20px]
         peer-checked:bg-[url('././././assets/img/courses/negativ.png')] duration-300"
          >
            {" "}
          </label>
        </div>
      </div>
    </div>
    // <div className="w-[295px] rounded-[20px]  flex flex-wrap border border-sky-500 relative  justify-center max-xl:hidden mb-64">
    //   <div className=" w-[280px] h-[50px]   bg-grayyy rounded-[15px] relative ">
    //     <img
    //       className=" absolute right-[10px] top-[15px]  "
    //       src={filterIcon}
    //       alt="image"
    //     />
    //     <span className=" font-[YekanBakh] text-gray absolute right-[35px] top-[15px]  ">
    //       {" "}
    //       فیلتر{" "}
    //     </span>

    //     <button className="w-[32px] h-[32px] bg-red-500 rounded-[12px] flex justify-center absolute left-[10px] top-[8px] items-center">
    //       <img src={trashIcon} />
    //     </button>
    //   </div>
    //       <div   className=" w-[280px] h-[50px]   bg-red-500   rounded-[15px]  absolute top-[70px] ">
    //       <ul className="accardion  ">
    //           <li className="relative  ">
    //           <input  type="checkbox" id="list-none  c0" name="na" />
    //             <label
    //               className="w-[280px] h-[50px] rounded-[10px]   cursor-pointer"
    //               for="c0"
    //             >

    //               <span class="tip absolute top-[15px]  right-[15px]  font-[YekanBakhBold] text-right  text-gray ">
    //                 {" "}
    //                 دسته بندی‌ ها{" "}
    //               </span>
    //             </label>
    //             <div className="max-h-0 overflow-hidden peer-checked:max-h-full" >
    //                     <div className=" h-[5rem] mt-[1rem]">
    //                         <h1 className="text-center "> </h1>
    //                         <div className="flex ml-[2rem]">
    //                             <span className="inline-block ml-[0.3rem] mt-[0.3rem]"> 0 </span>
    //                             <input type="range" min="0" max="10000000" step="10"  onChange={e => setmaxdata(e.target.value)}
    //                                 className="w-[10rem] ml-[0.5rem] mr-[0.5rem] block appearance-none h-[0.2rem] rounded-md mt-[1rem] bg-[#004458]" />
    //                             <span className="mt-[0.1rem]"> 10000000 </span>
    //                         </div>
    //                     </div>

    //                     <div className=" h-[5rem] mt-[1rem]">
    //                         <h1 className="text-center "> </h1>
    //                         <div className="flex ml-[2rem]">
    //                             <span className="inline-block ml-[0.3rem] mt-[0.3rem]"> 0 </span>
    //                             <input type="range" min="0" max="10000000" step="10"  onChange={e => setmindata(e.target.value)}
    //                                 className="w-[10rem] ml-[0.5rem] mr-[0.5rem] block appearance-none h-[0.2rem] rounded-md mt-[1rem] bg-[#004458]" />
    //                             <span className="mt-[0.1rem]"> 10000000 </span>
    //                         </div>
    //                     </div>
    //                 </div>

    //           </li>

    //       </ul>
    //  </div>

    //     </div>
  );
};

export default filter;
