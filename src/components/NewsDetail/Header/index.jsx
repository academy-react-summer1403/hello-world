/* eslint-disable react/prop-types */
import nasher from "@assets/images/News/1215b2106df963d9ff66fbc22f9cf44c.jpg";
import { faNumber } from "@core/utils/FaNumber";
import { ConvertToPersianDate } from "@core/utils/convertDate";
import view from "@assets/images/Landing/Blogs/view.svg";
import calendar from "@assets/images/Landing/Blogs/calendar.svg";
import noImage from "@assets/images/Landing/Courses/noImage.jpg";

const NewsHeader = (props) => {
  return (
    <div className="bg-white2 dark:bg-[#1a1a2e] transition duration-300 ease-in-out">
      <div className="flex w-[90%] flex-wrap  flex-row-reverse gap-[25px]   mt-[30px]     ">
        <div className="w-[40%] h-[400px] flex justify-end   ">
          <img
            className="h-[100%] w-[100%] rounded-3xl"
            src={
              props?.currentImageAddress &&
              props?.currentImageAddress.includes("classapi.sepehracademy.ir")
                ? props?.currentImageAddress
                : noImage
            }
            alt="image"
          />
        </div>
        <div dir="rtl" className=" flex  flex-wrap   w-[50%] max-h-[200px]   ">
          <h1 className=' font-["YekanBakhBold"] truncate text-[30px] text-grayy dark:text-white transition duration-300 ease-in-out'>
            {" "}
            {props?.title}
          </h1>
          <p className='  font-["YekanBakh"] text-[15px] truncate text-gray4  dark:text-white transition duration-300 ease-in-out'>
            {" "}
            {props?.googleDescribe}
          </p>
          <div
            dir="rtl"
            className="flex flex-row-reverse justify-between items-center w-full "
          >
            <div className="flex items-center gap-3 rounded-xl  bg-darkwhite h-14 dark:bg-[#111827] transition duration-300 ease-in-out">
              <div className="" />{" "}
              <img
                className="w-10 h-10 rounded-2xl "
                src={
                  props?.addUserProfileImage &&
                  props?.addUserProfileImage.includes(
                    "classapi.sepehracademy.ir"
                  )
                    ? props?.addUserProfileImage
                    : noImage
                }
                alt=""
              />
              <span className="dark:text-white font-[YekanBakh] text-gray2 transition duration-300 ease-in-out">
                {props?.addUserFullName}
              </span>
            </div>

            <div className="bottom w-[50%]  h-[20%] flex flex-row-reverse  justify-end   ">
              <div
                dir="rtl"
                className="Data1 w-[30%] h-[100%] flex gap-1 text-[12px] font-bold   max-sm:w-[50%]   "
              >
                <img className="w-[12px] h-[15px] " src={view} />
                <span className="text-[#2196F3] dark:text-white transition duration-300 ease-in-out">
                  {" "}
                  {props?.currentView &&
                    faNumber(props?.currentView.toString(), ",")}{" "}
                  بازدید
                </span>
              </div>
              <div className="Dotted rounded-[50px] bg-[#2196F3] w-[6px] h-[6px]  flex justify-center mt-1 ml-2 max-xll:hidden"></div>

              <div
                dir="rtl"
                className="Data2 w-[25%] h-[100%] flex gap-1  text-[12px] font-bold   "
              >
                <img className="w-[12px] h-[15px]" src={calendar} />

                <span className="text-[#2196F3] dark:text-white">
                  {" "}
                  {props?.insertDate &&
                    ConvertToPersianDate(props?.insertDate)}{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHeader;
//  <div className="flex justify-center ">
// <div className="flex gap-[15px]  w-[1400px] h-[400px] mt-[30px]  relative border ">
//   <div dir="rtl" className=" flex flex-wrap flex-grow text w-[900px] [h-400px] absolute max-xxl:right-0">
//     <h1
//       className='text-right  font-["YekanBakhBold"] text-[30px] text-grayy dark:text-white '

//     >
//       {" "}
//       {props?.title}
//     </h1>
//     <p className='text-right  font-["YekanBakh"] text-[15px] text-gray4  leading-[50px] dark:text-white'>
//       {" "}
//       {props?.googleDescribe}
//     </p>
//     <div className="flex justify-between items-center w-full ">
//       <div className="flex items-center gap-3 rounded-xl shadow-[0_0px_30px_20px_rgba(0,0,0,0.1)] bg-darkwhite h-16 dark:bg-[#111827]">
//         <div className="" />{" "}
//         <span className="dark:text-white">
//           {props?.addUserFullName}
//         </span>
//         <img
//           className="w-10 h-10 rounded-2xl mr-3"
//           src={nasher}
//           alt=""
//         />
//       </div>
//       <div className=" w-44 h-6 ">
//         <span className="text-[#2196F3]">
//           {" "}
//           بازدید : {props?.currentView}
//         </span>
//         <span className="text-[#2196F3] text-[5px] m-5">🔵</span>
//         <span className="text-[#2196F3]">
//           {" "}
//           تاریخ : {props?.insertDate}
//         </span>
//       </div>
//     </div>
//   </div>
//   <div className="image  w-[500px] h-[400px] max-xxl:hidden relative left-[65%] ">
//     <img
//       className="h-[400px] rounded-3xl"
//       src={props?.currentImageAddress}
//       alt="image"
//     />{" "}
//   </div>
// </div>
// </div>
