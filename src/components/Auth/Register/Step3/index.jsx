/* eslint-disable no-unused-vars */
import { ErrorMessage, Field, Form, Formik } from "formik";
import close from "../../../../assets/images/Auth/close.png";
import Creataccount from "../../../../core/servises/api/Auth/Register/RegisterFinish-step3/index.js";
import ValidationCreat from "../../../../core/validation/ValidationRegister/ValidationCreat/index.jsx";

import React, { useState } from "react";

export const RegisterStep3 = ({
  setContent,
  setUserData,
  userData,
  setAuthModal,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  const onSubmit = (values) => {
    // User Phone Save ----

    const obj = {
      gmail: values.gmail,
      password: values.password,
      phoneNumber: userData.phoneNumber,
    };
    Creataccount(obj);
  };

  return (
    <>
      <div className="w-[420px] h-[528px] bg-[#ffffff] rounded-3xl flex flex-col justify-evenly">
        {/* title */}
        <div className="flex justify-evenly ">
          <div className=" w-[48px] h-[48px] bg-[#F1F7FF] rounded-2xl text-blue-600">
            <img className="m-3" src={close} alt="" />
          </div>
          <div className=" w-[270px] h-[50px] text-3xl myFontMiniBold text-[#263238]">
          ورود به حساب
          </div>
        </div>
        <Formik
          initialValues={{
            gmail: "",
            password: "",
          }}
          onSubmit={onSubmit}
          validationSchema={ValidationCreat}
        >
          {/* input */}
          <Form className="flex justify-center  flex-wrap gap-5	">
            <Field
               name="gmail"
                placeholder=" ایمیل"
              className="w-[356px] h-[56px] rounded-[50px] text-right pr-3 bg-inherit border border-slate-300 backdrop-brightness-200 text-black"
            />
            <ErrorMessage
             name="gmail"
             component={"p"}
              className="text-[#2196F3] mt-2.5 text-right w-full pr-7  "
            />{" "}
            <Field
              name="password"
                placeholder=" رمز عبور"
              className="w-[356px] h-[56px] rounded-[50px] text-right pr-3 bg-inherit border border-slate-300 backdrop-brightness-200 text-black"
            />
            <ErrorMessage
       name="password"
       component={"p"}
              className="text-[#2196F3] mt-2.5 text-right w-full pr-7  "
            />{" "}
            <Field
              name="password"
                placeholder=" تکرار رمز عبور"
              className="w-[356px] h-[56px] rounded-[50px] text-right pr-3 bg-inherit border border-slate-300 backdrop-brightness-200 text-black"
            />
            <ErrorMessage
              name="password"
              component={"p"}
              className="text-[#2196F3] mt-2.5 text-right w-full pr-7  "
            />{" "}
            {/* butten  */}
            <div className="mt-7">
              <button
                type="submit"
                className="w-[208px] h-[56px] bg-[#2196F3] rounded-[80px] p-[14px] "
              >
                ساخت حساب کاربری
              </button>
            </div>
           <div>
            <label className="text-[#455A64] text-right	">
        <input
        className="float-right m-[8px]"
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
من را به خاطر بسپار
      </label>
      </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};
