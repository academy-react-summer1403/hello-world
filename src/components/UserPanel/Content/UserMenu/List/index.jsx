import React from "react";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { GoCommentDiscussion } from "react-icons/go";
import { LuBookMarked, LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineBookmarks } from "react-icons/md";
import { RiShieldKeyholeLine } from "react-icons/ri";
import { BsPostcardHeart } from "react-icons/bs";
import { BsBookmarkHeart } from "react-icons/bs";

import { Link } from "react-router-dom";
import { useAuthStore } from "../../../../../zustand/Auth/UserToken";

const show = () => {};
const List = () => {
  const logout = useAuthStore((state) => state.logout);
  const onSubmit = () => {
    logout();
    localStorage.removeItem("token");
  };

  return (
    <>
      <div className="w-full h-[495px] pr-1">
        <Link
          className="  w-full h-[50px] my-3.5 flex justify-end p-1 rounded-[10px] transition-[0.1s] hover:bg-[#6033ff]"
          to="/UserProfileS"
        >
          <h3 className="text-[#fdfbff] mt-2 text-[17px]">داشبرد</h3>
          <LuLayoutDashboard className="text-[#fdfbff] ml-2.5 mt-1 w-8 h-8" />
        </Link>
        <Link
          className="w-full h-[50px] my-3.5 flex justify-end p-1 rounded-[10px] transition-[0.1s] hover:bg-[#6033ff]"
          to="EditProfile"
        >
          <h3 className="text-[#fdfbff] mt-2 text-[17px]"> ویرایش پروفایل</h3>
          <CgProfile className="text-[#fdfbff] ml-2.5 mt-1 w-8 h-8" />
        </Link>
        <Link
          className="w-full h-[50px] my-3.5 flex justify-end p-1 rounded-[10px] transition-[0.1s] hover:bg-[#6033ff]"
          to="MyList"
        >
          <h3 className="text-[#fdfbff] mt-2 text-[17px]"> دوره های من</h3>
          <LuBookMarked className="text-[#fdfbff] ml-2.5 mt-1 w-8 h-8" />
        </Link>
        <Link
          className="w-full h-[50px] my-3.5 flex justify-end p-1 rounded-[10px] transition-[0.1s] hover:bg-[#6033ff]"
          to="MyReserve"
        >
          <h3 className="text-[#fdfbff] mt-2 text-[17px]">
            {" "}
            دوره های رزرو شده
          </h3>
          <MdOutlineBookmarks className="text-[#fdfbff] ml-2.5 mt-1 w-8 h-8" />
        </Link>
        <Link
          className="w-full h-[50px] my-3.5 flex justify-end p-1 rounded-[10px] transition-[0.1s] hover:bg-[#6033ff]"
          to="Myfvcardlist"
        >
          <h3 className="text-[#fdfbff] mt-2 text-[17px]"> دوره های موردعلاقه</h3>
          <BsBookmarkHeart className="text-[#fdfbff] ml-2.5 mt-1 w-8 h-8" />
        </Link>
        <Link
          className="w-full h-[50px] my-3.5 flex justify-end p-1 rounded-[10px] transition-[0.1s] hover:bg-[#6033ff]"
          to="CommentPage"
        >
          <h3 className="text-[#fdfbff] mt-2 text-[17px]"> مقالات موردعلاقه</h3>
          <BsPostcardHeart className="text-[#fdfbff] ml-2.5 mt-1 w-8 h-8" />
        </Link>
        <Link
          className="w-full h-[50px] my-3.5 flex justify-end p-1 rounded-[10px] transition-[0.1s] hover:bg-[#6033ff]"
          to="ChangePassword"
        >
          <h3 className="text-[#fdfbff] mt-2 text-[17px]"> تغییر رمز عبور</h3>
          <RiShieldKeyholeLine className="text-[#fdfbff] ml-2.5 mt-1 w-8 h-8" />
        </Link>
        <Link
          className="w-full h-[50px] my-3.5 flex justify-end p-1 rounded-[10px] transition-[0.1s] hover:bg-[#6033ff]"
          to="CommentPage"
        >
          <h3 className="text-[#fdfbff] mt-2 text-[17px]"> نظرات ثبت شده </h3>
          <GoCommentDiscussion className="text-[#fdfbff] ml-2.5 mt-1 w-8 h-8" />
        </Link>
        
      </div>

      <div className="w-full h-[500px]">
        <Link
          onClick={onSubmit}
          className="w-full h-[50px]  my-3.5 flex gap-2 justify-end items-center pr-2 rounded-[13px] transition-[0.1s] bg-[#6033ff] hover:bg-[#6454f1]"
          to="/"
        >
          <h3 className="text-[#fdfbff] text-[15px]"> خروج از حساب </h3>
          <FiLogOut className="text-[#fdfbff] w-5 mt-3" />
        </Link>
      </div>
    </>
  );
};

export default List;
