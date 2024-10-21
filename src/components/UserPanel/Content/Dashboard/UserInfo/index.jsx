import React, { useEffect, useState } from "react";
import { getUserDashboard } from "@core/servises/api/UserPanel/UserPanel/Dashboard";
import { Link } from "react-router-dom";

const UserInfo = () => {
  const [userDash, setUserDash] = useState([]);

  const getUserDash = async () => {
    const data = await getUserDashboard();
    // console.log("report:", data);
    setUserDash(data);
  };

  useEffect(() => {
    getUserDash();
  }, []);

  return (
    <div className="w-full h-[35%] mt-5  flex justify-center items-center">
      <div className="w-[97%] h-[180px] border-[3px] border-[#d5d4fe] rounded-[20px] flex justify-center flex-row-reverse flex-wrap">
        <div className="w-1/3 h-[50%] flex justify-end pr-10 items-center content-center">
          <h2 className=" text-[#422dae]  text-[18px]">
            {" "}
            {userDash.lName} , {userDash.fName}{" "}
          </h2>
          <span className="w-1"></span>
          <span className="text-[#8787a7]"> : </span>
          <span className="w-1"></span>

          <h2 className=" text-[#8787a7]  text-[19px]">نام و نام خانوادگی</h2>
        </div>
        <div className="w-1/3 h-[50%] flex justify-end pr-10 items-center content-center">
          <h2 className=" text-[#422dae]   text-[18px]"> 1385/4/27 </h2>
          <span className="w-1"></span>
          <span className="text-[#8787a7]"> : </span>
          <span className="w-1"></span>

          <h2 className=" text-[#8787a7]   text-[19px]">تاریخ تولد </h2>
        </div>
        <div className="w-1/3 h-[50%] flex justify-end pr-10 items-center content-center">
          <h2 className=" text-[#422dae]   text-[18px]">
            {userDash.phoneNumber}{" "}
          </h2>
          <span className="w-1"></span>
          <span className="text-[#8787a7]"> : </span>
          <span className="w-1"></span>

          <h2 className=" text-[#8787a7]   text-[19px]">شماره همراه </h2>
        </div>
        <div className="w-1/3 h-[50%] flex justify-end pr-10 items-center content-center">
          <h2 className=" text-[#422dae]   text-[18px]">
            {" "}
            {userDash.nationalCode}{" "}
          </h2>
          <span className="w-1"></span>
          <span className="text-[#8787a7]"> : </span>
          <span className="w-1"></span>

          <h2 className=" text-[#8787a7]   text-[19px]">شماره ملی </h2>
        </div>
        <div className="w-1/3 h-[50%] flex justify-end pr-10 items-center content-center">
          <h2 className=" text-[#422dae]   text-[18px]">{userDash.email}</h2>
          <span className="w-1"></span>
          <span className="text-[#8787a7]"> : </span>
          <span className="w-1"></span>

          <h2 className=" text-[#8787a7]   text-[19px]">ایمیل </h2>
        </div>
        <div className="w-1/3 h-[50%] flex justify-start content-end items-end">
          <Link
            to="/UserProfileS/EditProfile"
            className="w-[125px] ml-[-2px] mb-[-2px] brbl2 brtr2 h-[55px] border-[#d5d4fe] myFontMiniBold text-[#4c2bbf] border-[3px] flex justify-center transition-[0.2s] items-center cursor-pointer hover:bg-[#e5e4fa]"
          >
            {" "}
            ویرایش
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
