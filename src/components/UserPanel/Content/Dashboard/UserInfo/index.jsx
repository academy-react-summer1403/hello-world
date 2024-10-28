import React, { useEffect, useState } from "react";
import { getUserDashboard } from "@core/servises/api/UserPanel/UserPanel/Dashboard";
import { Link } from "react-router-dom";
import { faNumber } from "@core/utils/FaNumber";

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
    <div className="w-full h-[52%] mt-5  flex justify-end pr-5 items-start">
      <div className="w-[410px] bg-[#f3f3f3] h-[410px] rounded-[4px] shadow-2xl flex flex-wrap justify-center">
        <div className="w-full h-[50px] bg-[#9f95f3] rounded-t-[4px] text-center items-center flex justify-center">
          اطلاعات کاربری
        </div>
        <div className="w-full mb-4 h-[310px]">
          {/* /// */}

          <div className="w-full  flex justify-center items-center">
            {" "}
            <div className="w-[110px] h-[110px] rounded-[50%]">
              <img
                src={userDash.currentPictureAddress}
                alt="pic"
                className="rounded-[50%]"
              />
            </div>
          </div>

          {/* /// */}

          <div className="w-full my-4 flex justify-center items-center">
            <h2 className="  text-[#422dae] inline-block text-[17px]">
              {" "}
              {userDash.lName} , {userDash.fName}{" "}
            </h2>{" "}
            <span className="w-1"></span>
            <span className="text-[#8787a7]"> : </span>
            <span className="w-1"></span>
            <h2 className=" text-[#8787a7]  inline-block  text-[17px]">
              نام و نام خانوادگی
            </h2>
          </div>

          {/* /// */}

          <div className="w-full  my-4 flex justify-center items-center">
            {" "}
            <h2 className=" text-[#422dae]   text-[17px]">
              {userDash.phoneNumber &&
                faNumber(userDash.phoneNumber.toString())}
            </h2>
            <span className="w-1"></span>
            <span className="text-[#8787a7]"> : </span>
            <span className="w-1"></span>
            <h2 className=" text-[#8787a7]   text-[18px]">شماره همراه </h2>
          </div>

          {/* /// */}

          <div className="w-full  my-4 flex justify-center items-center">
            {" "}
            <h2 className=" text-[#422dae]   text-[17px]"> 1385/4/27 </h2>
            <span className="w-1"></span>
            <span className="text-[#8787a7]"> : </span>
            <span className="w-1"></span>
            <h2 className=" text-[#8787a7]   text-[18px]">تاریخ تولد </h2>
          </div>

          <div className="w-full  my-4 flex justify-center items-center">
            {" "}
            <h2 className=" text-[#422dae]   text-[17px]">{userDash.email}</h2>
            <span className="w-1"></span>
            <span className="text-[#8787a7]"> : </span>
            <span className="w-1"></span>
            <h2 className=" text-[#8787a7]   text-[18px]">ایمیل </h2>
          </div>

          {/* /// */}

          <div className="w-full  my-4 flex justify-center items-center">
            {" "}
            <h2 className=" text-[#422dae]   text-[17px]">
              {" "}
              {userDash.nationalCode &&
                faNumber(userDash.nationalCode.toString())}
            </h2>
            <span className="w-1"></span>
            <span className="text-[#8787a7]"> : </span>
            <span className="w-1"></span>
            <h2 className=" text-[#8787a7]   text-[18px]">شماره ملی </h2>
          </div>
        </div>
      </div>
      {/* <div className="w-[97%] h-[180px] border-[3px] border-[#d5d4fe] rounded-[20px] flex justify-center flex-row-reverse flex-wrap">
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
            {userDash.phoneNumber && faNumber(userDash.phoneNumber.toString())}
          </h2>
          <span className="w-1"></span>
          <span className="text-[#8787a7]"> : </span>
          <span className="w-1"></span>

          <h2 className=" text-[#8787a7]   text-[19px]">شماره همراه </h2>
        </div>
        <div className="w-1/3 h-[50%] flex justify-end pr-10 items-center content-center">
          <h2 className=" text-[#422dae]   text-[18px]">
            {" "}
            {userDash.nationalCode &&
              faNumber(userDash.nationalCode.toString())}
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
      </div> */}
    </div>
  );
};

export default UserInfo;
