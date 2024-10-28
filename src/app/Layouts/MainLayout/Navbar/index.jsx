import React, { useState } from "react";
import img1 from "../../../../assets/images/navbar/login.png";
// import img2 from "../../../../assets/images/navbar/basket.png"
import { useAuthStore } from "../../../../zustand/Auth/UserToken";
import img3 from "../../../../assets/images/navbar/HW.png";
import { Auth } from "../../../../components/Auth/index";
import { Link, NavLink } from "react-router-dom";
import DarkModeToggle from "@components/common/DarkModeToggle";
import LanguageSwitcher from "@components/common/translait/suicher";
import "@components/common/translait/index";
import { useTranslation } from "react-i18next";
import SwipeableTemporaryDrawer from "@core/utils/DrawerMenu";
import AnchorTemporaryDrawer from "@core/utils/DrawerMenu";
const Navbar = () => {
  const { t } = useTranslation();
  const [authModal, setAuthModal] = useState(false);
  const tokenAuth = useAuthStore((state) => state.tokenAuth);

  return (
    <div className="countainer mx-auto flex dark:bg-[#1a1a2e] ">
      <div className="    h-[70px] flex justify-evenly w-full dark:bg-[#1a1a2e] ">
        <div className="flex  gap-4  mt-[30px]  ">
          {/* <LanguageSwitcher /> */}
          <div
            className="flex  "
            onClick={() => {
              setAuthModal(true);
            }}
          >
            {!tokenAuth && (
              <div
                className="w-[100px] cursor-pointer h-11 bg-[#2196F3] text-[12px] items-center content-center text-center text-[#ffffff] rounded-full max-md:w-[100px] max-md:text-[10px] max-md:h-8 max-smm:w-[80px] max-smm:h-6 max-smm:text-[8px]"
                onClick={() => {
                  setAuthModal(true);
                }}
              >
                {t("ورود به حساب")}{" "}
              </div>
            )}

            {authModal === true && <Auth setAuthModal={setAuthModal} />}

            {tokenAuth && (
              <Link
                to="/UserProfileS"
                className="w-[100px] cursor-pointer h-11 border-[4px] border-[#3c8bcc] bg-[#59a9eb] text-[12px] items-center content-center text-center text-[#ffffff] rounded-full "
                onClick={() => {
                  setAuthModal(true);
                }}
              >
                {t("ورود به پنل")}
              </Link>
            )}
          </div>

          {authModal === true && <Auth setAuthModal={setAuthModal} />}

          <div className="flex  cursor-pointer">
            <DarkModeToggle />
          </div>
        </div>
        <div className="flex  gap-12 flex-row-reverse justify-around whitespace-nowrap mt-[37px]  dark:text-slate-200 max-lg:hidden">
          {/* <div className="flex flex-row-reverse    w-[40%]  mt-[30px]  text-[#455a64]"> */}
          <NavLink to="/" className="hover:text-[#4079c4]">
            {" "}
            {t("خانه")}
          </NavLink>
          <NavLink to="/CoursesPage" className="hover:text-[#4079c4]">
            {t("دوره‌ها")}
          </NavLink>
          <NavLink to="*" className="hover:text-[#4079c4]">
            {t("اساتید")}
          </NavLink>
          <NavLink to="/" className="hover:text-[#4079c4]">
            {t("ارتباط با ما")}
          </NavLink>
          <NavLink to="/NewsPage" className="hover:text-[#4079c4]">
            {t("اخبار و مقالات")}
          </NavLink>
          {/* </div> */}
        </div>
        <div dir="rtl" className=" hidden max-lg:block   mt-[30px] ">
         <AnchorTemporaryDrawer/>
        </div>
        
        <Link
          to="/"
          className="  flex   whitespace-nowrap text-[20px] text-[#4079c4] mt-[35px] font-[YekanBakhBold] max-lg:hidden "
        >
          Hello World
          
         </Link>
        {/* <img
          className="Logo h-[50%] border  mt-[30px]  max-qq:hidden"
          src={img3}
          alt="image "
        /> */}
       
      </div>
    </div>
  );
};

export default Navbar;
