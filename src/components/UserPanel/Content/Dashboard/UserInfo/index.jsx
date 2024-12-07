import React, { useEffect, useState } from "react";
import { getUserDashboard } from "@core/servises/api/UserPanel/UserPanel/Dashboard";
import { Link } from "react-router-dom";
import { faNumber } from "@core/utils/FaNumber";
import { FaCheck } from "react-icons/fa";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
// import { LuGauge } from "react-icons/lu";
// import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const UserInfo = () => {
  const [userDash, setUserDash] = useState([]);

  const getUserDash = async () => {
    const data = await getUserDashboard();
    // console.log("report:", data);
    setUserDash(data);
  };
  // const settings = {
  //   width: 200,
  //   height: 200,
  //   value: userDash.profileCompletionPercentage,
  // };

  useEffect(() => {
    getUserDash();
  }, []);

  return (
    <div className="w-full h-[35%]  flex justify-end items-center">
      <div className="w-[75%] h-[180px] border-[3px] border-[#d5d4fe] rounded-[20px] flex justify-center flex-row-reverse flex-wrap">
        <div className="w-1/3 h-[50%] flex justify-end  items-center content-center">
          <h2 className=" text-[#422dae]  text-[18px]">
            {" "}
            {userDash.lName} , {userDash.fName}{" "}
          </h2>
          <span className="w-1"></span>
          <span className="text-[#8787a7]"> : </span>
          <span className="w-1"></span>

          <h2 className=" text-[#8787a7]  text-[19px]">نام و نام خانوادگی</h2>
        </div>
        <div className="w- h-[50%] flex justify-end pr-10 items-center content-center">
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
        <div className=" w-[18%] h-[21%] absolute left-[5%] top-[17.7%] border-[3px] border-[#d5d4fe] rounded-[20px] ">
          <div className="w-28 mx-auto ab pt-4">
            <CircularProgressbarWithChildren
              value={userDash.profileCompletionPercentage}
              styles={{
                trail: {
                  stroke: "white",
                },
                path: {
                  stroke: `${
                    userDash.profileCompletionPercentage === 100
                      ? "rgb(76, 175, 80)"
                      : userDash.profileCompletionPercentage >= 60
                      ? "rgb(255,152,0)"
                      : "rgb(244, 67, 54)"
                  }`,
                },
              }}
            >
              {userDash.profileCompletionPercentage === 100 ? (
                <FaCheck className="text-5xl text-green-500" />
              ) : (
                <p
                  className={`text-2xl font-semibold ${
                    userDash.profileCompletionPercentage >= 60
                      ? "text-orange-500"
                      : "text-red-500"
                  }`}
                >
                  {userDash.profileCompletionPercentage}%
                </p>
              )}
            </CircularProgressbarWithChildren>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            {userDash.profileCompletionPercentage === 100 ? (
              <p
                className={`font-bold text-green-500 xl:text-base md:text-[12px]`}
              >
                پروفایل شما تکمیل است
              </p>
            ) : (
              <>
                <p
                  className={`font-bold ${
                    userDash.profileCompletionPercentage >= 60
                      ? "text-orange-500"
                      : "text-red-500"
                  }`}
                >
                  پروفایل شما تکمیل نیست
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
