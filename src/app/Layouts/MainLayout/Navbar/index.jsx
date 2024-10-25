import React, { useState } from "react";
import img1 from "../../../../assets/images/navbar/login.png";
// import img2 from "../../../../assets/images/navbar/basket.png"
import img3 from "../../../../assets/images/navbar/HW.png";
import { Auth } from "../../../../components/Auth/index";
import { Link } from "react-router-dom";
import DarkModeToggle from "@components/common/DarkModeToggle";
import CustomizedMenus from "@core/utils/HamburgerMenu";
const Navbar = () => {
  const [authModal, setAuthModal] = useState(false);

  return (
    <div className=" flex dark:bg-[#1a1a2e] ">
      <div className=" flex  mx-auto gap-10 justify-between h-[50px] w-[80%] dark:bg-[#1a1a2e] ">
        <div className="flex  gap-4  mt-[30px]  ">
          <div
            className="flex  "
            onClick={() => {
              setAuthModal(true);
            }}
          >
            <button className="h-[40px] w-[40px] bg-white rounded-full  dark:bg-[#111827] ">
              <img
                className=" w-[20px] h-[20px] m-[10px]  "
                src={img1}
                alt="image "
              />
            </button>
          </div>

          {authModal === true && <Auth setAuthModal={setAuthModal} />}

          <div className="flex">
            <DarkModeToggle />
          </div>
        </div>
        <div className="flex  gap-12 flex-row-reverse justify-around whitespace-nowrap mt-[37px] mx-[21%] dark:text-slate-200 max-qq:hidden">
          {/* <div className="flex flex-row-reverse    w-[40%]  mt-[30px]  text-[#455a64]"> */}
          <div> خانه</div>
          <div>دوره‌ها</div>
          <div>اساتید</div>
          <div>ارتباط با ما</div>
          <div>اخبار و مقالات</div>
          {/* </div> */}
        </div>
        <div className=" hidden max-qq:block   mt-[27px] ">
          {" "}
          <CustomizedMenus />{" "}
        </div>
        <Link
          to="/"
          className="flex w-[4%]   whitespace-nowrap text-[#4079c4] mt-[35px] font-[YekanBakhBold] max-qq:hidden "
        >
          Hello World
        </Link>
        <img
          className="Logo h-[50%]  mt-[30px]  max-qq:hidden"
          src={img3}
          alt="image "
        />
      </div>
    </div>
  );
};

export default Navbar;
