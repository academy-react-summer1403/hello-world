import React from "react";
import noImage from "@assets/images/Landing/Courses/noImage.jpg"

const TeacherCard = ({ fullName, courseCounts ,pictureAddress,newsCount}) => {
  return (
   <>
  <div className="w-full flex flex-col justify-center items-center">
        <div className="relative">
          <img
           className="w-[280px] h-[290px]  rounded-[15px] object-cover m-5" src={pictureAddress ? pictureAddress : noImage} alt="" 
          />
          <div className="landingTeacherItemCoursesCount">
           
           
          </div>
        </div>
        <h4 className="mt-2 font-[700] text-[24px] text-text1 dark:text-darkText">
          {fullName}
        </h4>
        <span className="font-[500] text-text2 dark:text-darkText text-center">
          {newsCount} مقاله
        </span>
      </div>

   </>
  );
};

export default TeacherCard;
//  <div className="w-1/4  h-[440px] ">
//       <div className="w-[296px] h-[360px]  ">
//         <div className=" w-[280px] h-[290px] rounded-[15px] flex justify-center flex-col  "> 

//         <img className="mt-[-10px] w-[100%] h-[100%] " src={pictureAddress ? pictureAddress : noImage} alt="" />


//         </div>
//         {/* <img className="mt-[-10px]" src={S1} alt="#" /> */}
//         <div className=" flex justify-center flex-wrap ">
//           <h2 className=" w-full text-center myFontBold text-[22px] mt-[-15px]">
//             {fullName}
//           </h2>
//           <p className="myFontMiniBold">{courseCounts}</p>
//         </div>
//       </div>
//     </div>