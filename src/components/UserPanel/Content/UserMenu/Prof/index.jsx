import React, { useEffect, useState } from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import ProfPic from "../../../../../assets/Images/Profile/prof.jpg";
import { Link } from "react-router-dom";
import { getUserDashboard } from "@core/servises/api/UserPanel/UserPanel/Dashboard";

const Prof = () => {
  const [userDash, setUserDash] = useState([]);

  const getUserDash = async () => {
    const data = await getUserDashboard();
    // console.log("report:", data);
    setUserDash(data);
  };

  // console.log(userDash.userImage[0].puctureAddress)

  useEffect(() => {
    getUserDash();
  }, []);

  return (
    <>
      <Link to="/" className="w-full h-[30px] mt-1 flex justify-end pr-4 pt-1 ">
        <BiHomeAlt2 className="w-7 h-7 text-[#fff] hover:cursor-pointer" />
      </Link>

      <div className="w-[97%] mb-5 h-[200px] border-b-2 border-[#9b8efa] flex justify-center flex-wrap ">
        <div className="w-[135px] h-[135px]  border-b-[4px] border-r-[4px]  border-[#d0ceff] border-dotted p-2 rounded-[50%]">
          <img
            // src={userDash.userImage[0].puctureAddress}
            alt="pic"
            className="rounded-[50%] mt-[-1px] ml-[2px]"
          />
        </div>

        <h2 className=" w-full text-center myFontMiniBold text-[#e7e7e7] text-[20px]">
        {userDash.lName}  {userDash.fName}{" "}
        </h2>
      </div>
    </>
  );
};

export default Prof;
