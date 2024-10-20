import React from 'react'
import close from "@assets/images/Auth/close.png"
import { resetConfirm } from '@core/servises/api/Auth/ForgetPassword/course.api';
import { forgetPass } from '@core/servises/api/Auth/ForgetPassword/course.api';
import { resetPass } from '@core/servises/api/Auth/ForgetPassword/course.api';
import { ValidationForgetPass } from '@core/validation/ForgetPassword';
import { ValidationResetPass } from '@core/validation/ForgetPassword';
import { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {  useParams } from "react-router-dom";
const ForgetPassword = ({setContent, setUserData, setAuthModal}) => {
    const [step, setStep] = useState(1);
    const [userInfo, setUserInfo] = useState();
  
    const params = useParams();
    // console.log("forgetttttttt");
  
    useEffect(() => {
      // console.log("params:",params)
      const func = async () => {
        if (params.configValue) {
          const info = await resetConfirm(params.configValue);
          console.log("info:", info);
          setUserInfo(info);
          // setAuthModal(true);
          // setContent("resetpassword");
          // console.log("aloooo")
          setStep(2);
        }
      };
      func()
    }, []);
  
    const onSubmit1 = (value) => {
      const obj = {
        email: value?.email,
        baseUrl: "http://localhost:5173",
      };
      forgetPass(obj);
      setStep(2);
    };
    const onSubmit2 = async (value) => {
      // console.log("value?.newPass:",value?.newPass)
      const obj = {
        userId: userInfo?.id,
        newPassword: value?.password,
        resetValue: userInfo?.message,
      };
      console.log("obj:", obj);
       const res= await resetPass(obj);
      //  console.log("res:",res);
    };
    return (
      <>
        {step === 1 ? (
          <div className="flex justify-center content-center flex-wrap h-[400px] ">
            <div className=" mb-[48px]  flex justify-between content-center items-center w-[85%]">
              <div
                onClick={() => {
                  setAuthModal(false);
                }}
                className="w-[48px] h-[48px] cursor-pointer rounded-[16px] bg-[#F1F7FF] flex justify-center items-center min-w-12 text-xl"
              >
                <img className="w-[24px] h-[24px]" src={close} alt="" />
              </div>
              <h1 className=" text-3xl myFontMiniBold text-[#263238]">
                فراموشی رمز
              </h1>
            </div>
  
            <Formik
              initialValues={{ email: "" }}
              onSubmit={onSubmit1}
              validationSchema={ValidationForgetPass}
            >
              <div className="flex mb-[112px] justify-center flex-wrap w-[85%]  ">
                <Form className="flex w-[100%] justify-center flex-wrap h-[60px]">
                  <div className=" w-[100%] h-[56px] mb-[50px]">
                    <Field
                      name="email"
                      placeholder=" آدرس ایمیل"
                      className=" w-[100%] h-[56px] border border-solid border-[#CFD8DC] rounded-[50px] text-end pr-4"
                    />
                    <ErrorMessage
                      name="email"
                      component={"B"}
                      className="text-[#2196F3] mt-2.5 text-right w-full pr-7  "
                    />{" "}
                  </div>
  
                  <button
                    type="submit"
                    className=" w-[208px] h-[56px] bg-[#2196F3] rounded-[80px] text-white"
                  >
                    دریافت کد تایید
                  </button>
                </Form>
              </div>
            </Formik>
  
            <div className="w-full"></div>
            <div className="w-[220px] text-[#455A64] text-[14px] flex justify-center">
              {" "}
              <span
                className="text-[#2196F3] text-[14px] cursor-pointer"
                onClick={() => setContent("login")}
              >
                {" "}
                وارد شوید{" "}
              </span>
              <div className="w-1"></div>
              حساب کاربری دارید؟
            </div>
          </div>
        ) : step === 2 ? (
          <div className="flex justify-center content-center flex-wrap h-[528px] ">
            <div className=" mb-[48px]  flex justify-between content-center items-center w-[85%]">
              <div
                onClick={() => {
                  setAuthModal(false);
                }}
                className="w-[48px] h-[48px] cursor-pointer rounded-[16px] bg-[#F1F7FF] flex justify-center items-center min-w-12 text-xl"
              >
                <img className="w-[24px] h-[24px]" src={close} alt="" />
              </div>
              <h1 className=" text-3xl myFontMiniBold text-[#263238]">
                ورود به حساب{" "}
              </h1>
            </div>
  
            <Formik
              initialValues={{ password: "" }}
              onSubmit={onSubmit2}
              validationSchema={ValidationResetPass}
            >
              <div className="flex mb-[160px] justify-center flex-wrap w-[85%]  ">
                <Form className="flex w-[100%] justify-center flex-wrap h-[180px]">
                  <div className=" w-[100%] h-[56px] mb-[30px]">
                    <Field
                      name="password"
                      placeholder="   رمز عبور جدید"
                      className=" w-[100%] h-[56px] border border-solid border-[#CFD8DC] rounded-[50px] text-end pr-5"
                    />
                    <ErrorMessage
                      name="password"
                      component={"B"}
                      className="text-[#2196F3] mt-1 text-right w-full pr-7  "
                    />{" "}
                  </div>
                  <div className=" w-[100%] h-[56px] mb-[50px]">
                    <Field
                      name="password"
                      placeholder=" تکرار رمز عبور"
                      className=" w-[100%] h-[56px] border border-solid border-[#CFD8DC] rounded-[50px] text-end pr-5"
                    />
                    <ErrorMessage
                      name="password"
                      component={"B"}
                      className="text-[#2196F3] mt-1 text-right w-full pr-7  "
                    />{" "}
                  </div>
  
                  <button
                    type="submit"
                    className=" w-[208px] h-[56px] bg-[#2196F3] rounded-[80px] text-white"
                  >
                    ساخت حساب کاربری{" "}
                  </button>
                </Form>
              </div>
            </Formik>
  
            <div className="w-full"></div>
            <div className="w-full"></div>
          </div>
        ) : (
          <></>
        )}
      </>
    );
}

export default ForgetPassword;
