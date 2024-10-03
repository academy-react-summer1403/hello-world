import React from "react";
import { useState } from "react";
import { Login } from "./Login/index.jsx";

const Auth = ({setAuthModal}) => {
  const [content, setContent] = useState("login");

  return (
    <div className="h-screen flex justify-center items-center bgblur">
      <div className="border-[#a8a8a8] border-[2px] fixed top-[28%] left-[40%] w-[450px] rounded-[30px] bg-white z-[10] shadow-2xl ">
        {content === "login" ? (
          <Login setContent={setContent} setAuthModal={setAuthModal} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export { Auth };
