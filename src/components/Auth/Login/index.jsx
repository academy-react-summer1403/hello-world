import { Formik, Form, Field, ErrorMessage } from "formik";
import close from "../../../assets/images/Auth/close.png";
import loginAPI from "../../../core/servises/api/Auth/Login.js";
import ValidationLogin from "../../../core/validation/Login/index.jsx";
import { useAuthStore } from "../../../zustand/Auth/UserToken/index.jsx";

import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import LoadingButton from "@mui/lab/LoadingButton";

import Stack from "@mui/material/Stack";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setContent, setAuthModal, setUserDatas }) => {
  const [open, setOpen] = React.useState(false);
  const [errortoast, setErrortoast] = useState();
  const [loading, setLoading] = React.useState(false);

  const setTokenAuth = useAuthStore((state) => state.setTokenAuth);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const obj = {
      password: values.password,
      phoneOrGmail: values.phoneOrGmail,
    };
    setUserDatas(values);

    const res = await loginAPI(obj);
    console.log("result login step1", res);

    if (res && res.message.includes("پیامک")) {
      // setTokenAuth(res);
      setContent("verify");
      setOpen(true);
      setLoading(true);
      // setErrortoast(true);
      // setAuthModal(false);
      // setTimeout(setAuthModal, 2500);
    } 
    if (res && res.message.includes("موفقیت")) {
      // setTokenAuth(res);
      // setContent("verify")
      navigate("/UserProfileS");
      setOpen(true);
      setLoading(true);
      // setErrortoast(true);
      // setAuthModal(false);
      // setTimeout(setAuthModal, 2500);
    } 
  };

  // toast

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // loading

  // function handleClickLoading() {
  //   setLoading(true);
  // }

  return (
    <>
      {" "}
      <div className=" flex justify-center flex-wrap h-[490px] ] ">
        <div className="  mb-[24px]  flex justify-between content-center items-center w-[85%] ">
          <div
            onClick={() => {
              setAuthModal(false);
            }}
            className="w-[24px] h-[24px] cursor-pointer rounded-[16px] bg-[#F1F7FF] flex justify-center items-center min-w-6 text-xl"
          >
            <img
              className=" w-[24px] h-[24px] cursor-pointer rounded-[16px] bg-[#F1F7FF] flex justify-center items-center text-xl"
              src={close}
              alt=""
            />
          </div>
          <h1 className=" text-3xl myFontMiniBold text-[#263238]">
            ورود به حساب
          </h1>
        </div>
        <Formik
          initialValues={{ phoneOrGmail: "", password: "" }}
          onSubmit={(values) => onSubmit(values)}
          validationSchema={ValidationLogin}
        >
          <div className="flex mb-[122px] justify-center flex-wrap w-[85%]  ">
            <Form className="flex w-[100%] justify-center flex-wrap h-[60px]">
              <div className=" w-[100%] h-[120px] mb-[-35px] text-end">
                <Field
                  name="phoneOrGmail"
                  placeholder="ایمیل یا شماره موبایل"
                  className=" w-[100%] h-[56px] border border-solid border-[#CFD8DC] rounded-[50px] text-end pr-4 mb-1"
                />
                <ErrorMessage
                  name="phoneOrGmail"
                  component={"A"}
                  className="text-[#2196F3] mt-2.5 text-right w-full pr-7  "
                />{" "}
              </div>
              <div className=" w-[100%] h-[120px]mb-[]-35px text-end">
                <Field
                  name="password"
                  type="password"
                  placeholder="رمز عبور"
                  className=" w-[100%] h-[56px] border border-solid border-[#CFD8DC] rounded-[50px] text-end pr-4 mb-1"
                />
                <ErrorMessage
                  name="password"
                  component={"A"}
                  className="text-[#2196F3] mt-2.5 text-right w-full pr-7  "
                />{" "}
              </div>
              <div className="w-[220px] h-[37px] text-[14px] flex justify-center pt-7 pb-8">
                <input type="checkbox" />
                <span
                  className="text-[#2196F3] text-[14px] cursor-pointer"
                  onClick={() => setContent("resetpassword")}
                >
                  رمز عبور را فراموش کردم
                </span> 
              </div>
              <LoadingButton
                // onClick={handleClickLoading}
                loading={loading}
                loadingPosition="center"
                variant="contained"
                className=" !w-[208px] !font-[YekanBakh] !h-[56px] bg-[#2196F3] !rounded-[80px] !text-white"
              >
                <Button
                  // onClick={handleClick}
                  type="submit"
                  className="!w-[208px] !h-[56px] !font-[YekanBakh] !text-white"
                >
                  {" "}
                  ورود به حساب
                </Button>
              </LoadingButton>{" "}
              {/* <Button onClick={handleClick} type="submit">
                <LoadingButton
                  onClick={handleClickLoading}
                  loading={loading}
                  loadingPosition="center"
                  variant="contained"
                  className=" !w-[208px] !font-[YekanBakh] !h-[56px] bg-[#2196F3] !rounded-[80px] !text-white"
                >
                  ورود به حساب
                </LoadingButton>
              </Button> */}
            </Form>
          </div>
        </Formik>

        <div className="w-full"></div>
        <div className="w-[220px] text-[#455A64] text-[14px] flex justify-center">
          {" "}
          <span
            className="text-[#2196F3] text-[14px] cursor-pointer"
            onClick={() => setContent("register")}
          >
            {" "}
            ثبت نام{" "}
          </span>
          <div className="w-1 "></div>
          <p className="cursor-default">حساب کاربری ندارید؟</p>{" "}
        </div>
      </div>
      {errortoast === true ? (
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
            className=" !font-[YekanBakh]"
          >
            ورود شما با موفقیت انجام شد
          </Alert>
        </Snackbar>
      ) : errortoast === false ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert
            variant="filled"
            dir="rtl"
            severity="error"
            className="!font-[YekanBakh] absolute top-[510px] w-full"
          >
            {"-"}
            {" اطلاعات وارد شده نادرست است  "}
          </Alert>
        </Stack>
      ) : (
        <></>
      )}
    </>
  );
};
export { Login };
