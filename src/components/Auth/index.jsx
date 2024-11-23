import "@app/App.css";
import { useState } from "react";
import { Login } from "./Login/index.jsx";
import { RegisterStep1 } from "./Register/Step1/index.jsx";
import { RegisterStep2 } from "./Register/Step2/index.jsx";
import { RegisterStep3 } from "./Register/Step3/index.jsx";
import ForgetPassword from "./ForgetPassword/index.jsx";
import ParticlesComponent from "./particles.jsx";
import { Verificationcode } from "./VerificatonCode/index.jsx";
const Auth = ({ setAuthModal }) => {
  const [content, setContent] = useState("login");
  const [userData, setUserData] = useState();
  const [userDatas, setUserDatas] = useState();
  console.log("user:", userDatas);

  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="border-[#a8a8a8] border-[2px] fixed top-[28%] left-[40%] w-[450px] rounded-[30px] bg-white z-[100] shadow-2xl ">
        <ParticlesComponent id="particles" />
        {content === "login" ? (
          <Login
            setContent={setContent}
            setAuthModal={setAuthModal}
            setUserDatas={setUserDatas}
          />
        ) : content === "" ? (
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
        ) : content === "register" ? (
          <Verificationcode
            setContent={setContent}
            userDatas={userDatas}
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
