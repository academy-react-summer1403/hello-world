/* eslint-disable no-unused-vars */
import React from "react";
import close from "../../../../assets/images/Auth/close.png";
import codeAPI from "../../../../core/servises/api/Auth/Register/RegisterVerifiction-step2";
import {ValidationCode} from "../../../../core/validation/ValidationRegister";
import { ErrorMessage, Field, Form, Formik } from "formik";
// import CountdownTimer from "../../../../core/utils/Timer";

export const RegisterStep2 = ({
  setContent,
  userData,
  setAuthModal,
}) => {
  const onSubmit = async (values) => {  

    const obj = {
      verifyCode: values.verifyCode,
      phoneNumber: userData.phoneNumber,
    };
    try{
    const result =await codeAPI(obj);
    console.log("result:",result);
    setContent("creataccount");

    
  }catch(error){
    console.log("reore:",error);
    
  }
  };
  return (
    <>
      <div className="w-[460px] h-[483px] bg-[#ffffff] rounded-3xl flex flex-col justify-around">
        {/* title of register */}
        <div className="flex justify-evenly ">
          <div
            onClick={() => setAuthModal(false)}
            className=" w-[48px] h-[48px] bg-[#F1F7FF] rounded-2xl text-blue-600"
          >
            <img className="m-3" src={close} alt="" />
          </div>
          <div className=" w-[116px] h-[50px] text-3xl myFontMiniBold text-[#263238] ml-[30%]">
            کد تاییدیه
          </div>
        </div>
        <div className=" flex justify-evenly">
          <span className=" text-right text-[14px] text-[#455A64]">
            کد به شماره {userData.phoneNumber} ارسال شد، در صورت اشتباه بودن
            شماره آنرا{" "}
            <span
              onClick={() => setContent("register")}
              className=" text-right text-[14px] text-[#2196F3] cursor-pointer"
            >
              تغییر دهید
            </span>{" "}
          </span>
        </div>
        <Formik
          initialValues={{
            verifyCode: "",
          }}
          onSubmit={onSubmit}
          ValidationCode={ValidationCode}
        >
          {/* input of register */}
          <Form className="flex justify-center  flex-wrap ">
            <Field
              name="verifyCode"
              placeholder="کد "
              className="w-[356px] h-[56px] rounded-[50px] text-right pr-3 bg-inherit border border-slate-300 backdrop-brightness-200 text-black"
            />
            <ErrorMessage
              name="verifyCode"
              component={"p"}
              className="text-[#2196F3] mt-2.5 text-right w-full pr-7  "
            />{" "}
            {/* butten of register */}
            <div className="flex flex-col	 mt-3">
              {/* Timer => <CountdownTimer /> */}
              <button
                type="submit"
                className="w-[208px] h-[56px] bg-[#2196F3] rounded-[80px] p-[14px] "
              >
                ورود به حساب
              </button>
            </div>
          </Form>
        </Formik>
        <div className="flex items-end justify-center	">
          {" "}
          <p className="text-[#455A64] text-[12px] leading-5 font-medium text-center">
            کد ارسال نشد؟{" "}
            <span className="text-[#2196F3] text-[12px] leading-5 font-medium text-center">
              ارسال دوباره
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
