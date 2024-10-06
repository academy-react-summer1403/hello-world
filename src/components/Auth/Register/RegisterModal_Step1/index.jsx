  /* eslint-disable no-unused-vars */
  import React from "react";
  import close from "../../../../assets/images/Auth/close.png";
  import { ErrorMessage, Field, Form, Formik } from "formik";
import ValidationRegister from "../../../../core/validation/ValidationRegister/ValidationRegister";
import registerAPI from "../../../../core/servises/api/Auth/Register/Register-step1";
  export const RegisterModal_Step1 = ({ setContent, setUserData, setAuthModal }) => {
    const onSubmit = async (values) => {
      // User Phone Save ----

      setUserData(values);

      // Next Step ----

      setContent("entercode");

      // Api ----

      const obj = { phoneNumber: values.phoneNumber };
      registerAPI(obj);
    };
    return (
      <>
        <div className=" h-[380px] bg-[#ffffff] rounded-3xl flex flex-col justify-evenly">
          {/* title of register */}
          <div className="flex justify-evenly ">
            <div onClick={() => {
            setAuthModal(false);
          }} className=" w-[48px] h-[48px] bg-[#F1F7FF] rounded-2xl text-blue-600">
              <img className="m-3" src={close} alt="" />
            </div>
            <div className=" w-[270px] h-[50px] text-3xl myFontMiniBold text-[#263238]">
              ساخت حساب کاربری
            </div>
          </div>
          <Formik
          initialValues={{
            phoneNumber: "",
          }}
          onSubmit={onSubmit}
          validationSchema={ValidationRegister}
          >
            {/* input of register */}
            <Form className="flex justify-center  flex-wrap ">
              <Field
                name="phoneNumber"
                placeholder="شماره موبایل"
                className="w-[356px] h-[56px] rounded-[50px] text-right pr-3 bg-inherit border border-slate-300 backdrop-brightness-200 text-black"
              />
              <ErrorMessage
                  name="phoneNumber"
                  component={"p"}
                  className="text-[#2196F3] mt-2.5 text-right w-full pr-7  "
                />{" "}
            {/* butten of register */}
            <div className="mt-7">
              <button
                type="submit"
                className="w-[208px] h-[56px] bg-[#2196F3] rounded-[80px] p-[14px] "
              >
                دریافت کد تایید
              </button>
            </div>
            </Form>
          </Formik>
              <div className="flex items-end justify-center	">
                {" "}
                <p className="text-[#455A64] text-[12px] leading-5 font-medium text-center">
                  حساب کاربری دارید؟{" "}
                  <span className="text-[#2196F3] text-[12px] leading-5 font-medium text-center">
                    وارد شوید
                  </span>
                </p>
              </div>
        </div>
      </>
    );
  };
