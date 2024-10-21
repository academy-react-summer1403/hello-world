import React, { useState } from "react";
import img1 from "../../../../assets/images/navbar/login.png";
// import img2 from "../../../../assets/images/navbar/basket.png"
import img3 from "../../../../assets/images/navbar/HW.png";
import sun from "@assets/images/navbar/sun.png";
import { Auth } from "../../../../components/Auth/index";
import { Link } from "react-router-dom";
import DarkModeToggle from "@components/common/DarkModeToggle";
const Navbar = () => {
  const [authModal, setAuthModal] = useState(false);

  return (
    <div className=" flex  ">
      <div className=" flex  mx-auto gap-10 justify-between h-[50px] w-[80%] dark:bg-sky-900 ">
        <div className="flex  gap-4  mt-[30px]  ">
          <div
            className="flex  "
            onClick={() => {
              setAuthModal(true);
            }}
          >
            <button className="h-[40px] w-[40px] bg-darkwhite rounded-full  dark:bg-[#111827] ">
              <img
                className=" w-[20px] h-[20px] m-[10px]  "
                src={img1}
                alt="image "
              />
            </button>
          </div>

          {authModal === true && <Auth setAuthModal={setAuthModal} />}

          <div className="bordder">
            <DarkModeToggle />
          </div>
        </div>
        <div className="flex  gap-12 flex-row-reverse justify-around whitespace-nowrap mt-[37px] mx-[21%]  text-[#455a64] dark: text-slate-200 ">
          {/* <div className="flex flex-row-reverse    w-[40%]  mt-[30px]  text-[#455a64]"> */}
          <div>دوره‌ها</div>
          <div>اساتید</div>
          <div>ارتباط با ما</div>
          <div>اخبار و مقالات</div>
          {/* </div> */}
        </div>
        <div className="flex w-[40px]  whitespace-nowrap text-[#4079c4] mt-[35px] font-[YekanBakhBold] ">
         <span className="  "> Hello World </span> 
       
        <img className="Logo   " src={img3} alt="image " />
         </div>
      </div>
    </div>
  );
};

export default Navbar;
