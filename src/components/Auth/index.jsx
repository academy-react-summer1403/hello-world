import { useState } from "react";
import { Login } from "./Login/index.jsx";
import { RegisterModal_Step1 } from "./Register/RegisterModal_Step1/index.jsx";
import { RegisterVerifiction_Step2 } from "./Register/RegisterVerifiction_Step2/index.jsx";
import { RegisterFinish_Step3 } from "./Register/RegisterFinish_Step3/index.jsx";
const Auth = ({ setAuthModal }) => {
  const [content, setContent] = useState("login");
  const [userData, setUserData] = useState([]);


  return (
    <div className="h-screen flex justify-center items-center bgblur">
      <div className="border-[#a8a8a8] border-[2px] fixed top-[28%] left-[40%] w-[450px] rounded-[30px] bg-white z-[10] shadow-2xl ">
        {content === "login" ? (
          <Login
            setContent={setContent}
            setAuthModal={setAuthModal}          />
        ) : content === "register" ? (
          <RegisterModal_Step1
            setContent={setContent}
            userData={userData}
            setUserData={setUserData}
            setAuthModal={setAuthModal}
          />
        ) : content === "entercode" ? (
          <RegisterVerifiction_Step2
            setContent={setContent}
            userData={userData}
            setUserData={setUserData}
            setAuthModal={setAuthModal}
          />
        ) : content === "creataccount" ? (
          <RegisterFinish_Step3
            setContent={setContent}
            userData={userData}
            setUserData={setUserData}
            setAuthModal={setAuthModal}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export { Auth };
