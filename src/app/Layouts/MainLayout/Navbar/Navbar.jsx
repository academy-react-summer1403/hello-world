import React, { useState } from "react";
import img1 from "../../../../assets/images/navbar/login.png";
// import img2 from "../../../../assets/images/navbar/basket.png"
import img3 from "../../../../assets/images/navbar/HW.png";
import { Auth } from "../../../../components/Auth/index";

const Navbar = () => {
  const [authModal, setAuthModal] = useState(false);

  return (
    <div className=" w-full flex justify-center h-[50px]   ">
      <div className="w-[90%] flex justify-start    ">
        <div
          className="flex w-[30%] "
          onClick={() => {
            setAuthModal(true);
          }}
        >
          <img className="h-[40px] pt-2 " src={img1} alt="image " />
        </div>

        {authModal === true && <Auth setAuthModal={setAuthModal} />}

        <div className="flex flex-row-reverse justify-between whitespace-nowrap w-[40%] pt-[10px] ">
          <div>دوره‌ها</div>
          <div>اساتید</div>
          <div>ارتباط با ما</div>
          <div>اخبار و مقالات</div>
        </div>
        <div className="flex w-[30%] py-2 justify-end text-[#4079c4] ">
          Hello World
          <img className="Logo h-full w-[10%]  " src={img3} alt="image " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
