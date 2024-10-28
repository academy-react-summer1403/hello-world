import { useState } from "react";
import { Login } from "./Login/index.jsx";
import { RegisterStep1 } from "./Register/Step1/index.jsx";
import { RegisterStep2 } from "./Register/Step2/index.jsx";
import { RegisterStep3 } from "./Register/Step3/index.jsx";
import ForgetPassword from "./ForgetPassword/index.jsx";
const Auth = ({ setAuthModal }) => {
  const [content, setContent] = useState("login");
  const [userData, setUserData] = useState([]);


  return (
    <div className="h-screen flex justify-center items-center bgblur">
      <div className="border-[#a8a8a8] border-[2px]  fixed top-[15%] left-[35%] w-[450px] rounded-[30px] bg-white z-[10] shadow-2xl ">
        {content === "login" ? (
          <Login
            setContent={setContent}
            setAuthModal={setAuthModal}/>
        ) : content === "register" ? (
          <RegisterStep1
            setContent={setContent}
            userData={userData}
            setUserData={setUserData}
            setAuthModal={setAuthModal}
          />
        ) : content === "entercode" ? (
          <RegisterStep2
            setContent={setContent}
            userData={userData}
            setUserData={setUserData}
            setAuthModal={setAuthModal}
          />
        ) : content === "creataccount" ? (
          <RegisterStep3
            setContent={setContent}
            userData={userData}
            setUserData={setUserData}
            setAuthModal={setAuthModal}
          />
        ) : content === "resetpassword" ? (
          <ForgetPassword
            setContent={setContent}
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
