import React from "react";
import HeadTitle from "./HeadTitle";
import UserInfo from "./UserInfo";
import BuyItems from "./BuyItems";
import PieColor from "./Chart/index";

const Dashboard = () => {
  return (
    <div className="h-[850px] w-[76.5%] rounded-[23px] flex justify-center relative flex-wrap p-4 bg-[#ffffff] content-start">
      <HeadTitle />
      <UserInfo />
      <BuyItems />
      <PieColor />
    </div>
  );
};

export default Dashboard;
