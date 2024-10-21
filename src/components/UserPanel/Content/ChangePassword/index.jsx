import React from "react";
import HeadTitle from "./HeadTitle";
import ValidatonChangePassword from "@core/validation/ValidatonChangePassword";
import ChangePasswordAPI from "@core/servises/api/UserPanel/UserPanel/ChangePassword";
import { Formik, Form, Field } from "formik";

const ChangePassword = () => {
  const onSubmit = async (values) => {
    const obj = {
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
    };
    console.log("postTruh");
    ChangePasswordAPI(obj);
  };
  return (
    <div className="h-[850px] w-[76.5%] rounded-[23px] flex justify-center relative flex-wrap p-4 bg-[#ffffff] content-start">
      <HeadTitle />

      <Formik
        className="w-[60%] h-[500px] relative flex justify-center flex-wrap mt-28"
        initialValues={{ oldPassword: "", newPassword: "" }}
        onSubmit={(values) => onSubmit(values)}
        validationSchema={ValidatonChangePassword}
      >
        <Form className="data flex justify-center flex-wrap w-[97%] h-[50px] absolute top-[24%]  ">
          <h2 className="w-[90%] text-right text-[#7c7c7c] text-[18px] myFontMiniBold mt-1 mb-4 mr-2">
            رمز عبور فعلی
          </h2>
          <Field
            className="rounded-[10px] border-[2px] border-[#a0a0a0] w-[90%] h-[50px]  text-right pr-2"
            name="oldPassword"
            placeholder=""
          ></Field>

          <h2 className="w-[90%] text-right text-[#7c7c7c] text-[18px] myFontMiniBold mt-8 mb-4 mr-2">
            رمز عبور جدید
          </h2>
          <Field
            className="rounded-[10px] border-[2px] border-[#a0a0a0] w-[90%] h-[50px]  text-right pr-2"
            name="newPassword"
            placeholder="   "
          ></Field>
          <h2 className="w-[90%] text-right text-[#7c7c7c] text-[18px] myFontMiniBold mt-8 mb-4 mr-2">
            تکرار رمز عبور جدید
          </h2>
          <Field
            className="rounded-[10px] border-[2px] border-[#a0a0a0] w-[90%] h-[50px]  text-right pr-2"
            name="Username"
            placeholder="   "
          ></Field>

          <button
            type="submit"
            className="w-[38%] h-[60px] rounded-[15px] text-[#fff] myFontMiniBold text-[17px] pt-1 bg-[#3f40ea] m-auto mt-12"
          >
            ثبت اطلاعات
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ChangePassword;
