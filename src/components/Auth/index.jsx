
import"@app/App.css"
import { useState } from "react";
import { Login } from "./Login/index.jsx";
import { RegisterStep1 } from "./Register/Step1/index.jsx";
import { RegisterStep2 } from "./Register/Step2/index.jsx";
import { RegisterStep3 } from "./Register/Step3/index.jsx";
import ForgetPassword from "./ForgetPassword/index.jsx";
import ParticlesComponent from "./particles.jsx";
const Auth = ({ setAuthModal }) => {
  const [content, setContent] = useState("login");
  const [userData, setUserData] = useState([]);


  return (

    <div className="h-screen flex justify-center items-center ">
      <div className="border-[#a8a8a8] border-[2px] fixed top-[28%] left-[40%] w-[450px] rounded-[30px] bg-white z-[10] shadow-2xl ">
        <ParticlesComponent id="particles" />
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
