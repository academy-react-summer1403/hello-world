import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import photo from "@assets/images/Profile/prof.jpg";
import EditAccount from "@core/servises/api/UserPanel/UserPanel/EditAccount";
import { getUserDashboard } from "@core/servises/api/UserPanel/UserPanel/Dashboard";
import { ConvertToPersianDate } from "@core/utils/convertDate";
import "../../../../../core/utils/Userpanel/Update.css";
import noImage from "@assets/images/Landing/Courses/noImage.jpg";
import { Box, Modal, Switch } from "@mui/material";
import {
  getSecurityInfo,
  setTwoStepAuth,
} from "@core/servises/api/UserPanel/UserPanel/ChangePassword";
import { ProfilImageModal } from "@core/utils/Userpanel/ProfilImageModal";

const ProfileContent = () => {
  const [user, setUser] = useState([]);
  const [security, setSecurity] = useState([]);
  const [checkBox, setCheckBox] = useState();
  const [showModal, setShowModal] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const getUser = async () => {
    const data = await getUserDashboard();
    console.log("rezalt.dash:", data);

    const obj = {
      LName: data.lName,
      FName: data.fName,
      NationalCode: data.nationalCode,
      BirthDay: data.birthDay, //&& ConvertToPersianDate(data.birthDay),
      UserAbout: data.userAbout,
      TelegramLink: data.telegramLink,
      HomeAdderess: data.homeAdderess,
      LinkdinProfile: data.linkdinProfile,
      email: data.email,
      Gender: data.gender,
      phoneNumber: data.phoneNumber,
      ReceiveMessageEvent: data.receiveMessageEvent,
      currentPictureAddress: data.currentPictureAddress,
    };

    setUser(obj);
  };
  const getSecInfo = async () => {
    const info = await getSecurityInfo();
    setSecurity(info);
    setCheckBox(security.twoStepAuth);
  };
  const twoStepVerification = async (valuse) => {
    const email = security.recoveryEmail;
    const data = {
      twoStepAuth: valuse,
      recoveryEmail: email,
      baseUrl: "http://localhost:5173/",
    };
    console.log(data);
    const res = await setTwoStepAuth(data);
    // if (res.success === true) {
    //   toast.success("رمز دومرحله ای فعال شد");
    // } else {
    //   toast.error("عملیات ناموفق");
    // }
  };
  const handleTwoAuth = (checked) => {
    twoStepVerification(checked);
  };
  // const settings = {
  //   width: 200,
  //   height: 200,
  //   value: userDash.profileCompletionPercentage,
  // };

  useEffect(() => {
    getUser();
    getSecInfo();
  }, []);

  const onSubmit = (values) => {
    const obj = {
      LName: values.LName,
      FName: values.FName,
      NationalCode: values.NationalCode,
      BirthDay: values.BirthDay,
      UserAbout: values.UserAbout,
      HomeAdderess: values.HomeAdderess,
      LinkdinProfile: values.LinkdinProfile,
      // "https://linkedin.com/in/mahdi-kazemi-0b4a61237",
      TelegramLink: values.TelegramLink,
      // "https://t.me/Privet_Mahdi",
      ReceiveMessageEvent: values.ReceiveMessageEvent,
      email: values.email,
      Gender: values.Gender,
      phoneNumber: values.phoneNumber,
      Latitude: 0,
      Longitude: 0,
    };
    console.log("obj vslurs form", obj);
    EditAccount(obj);
  };
  console.log("userrr", user);

  return (
    <>
      <div className="relative">
        <img
          src={
            user.currentPictureAddress &&
            user.currentPictureAddress.includes("classapi.sepehracademy.ir")
              ? user.currentPictureAddress
              : noImage
          }
          alt="images"
          className="rounded-[50%] w-[200px] h-[200px] mt-[20px] "
        />
        <span
          onClick={() => setShowModal(!showModal)}
          className="cursor-pointer  font-[YekanBakh] absolute right-[57px] text-gray4 "
        >
          {" "}
          ویرایش تصویر{" "}
        </span>
        {showModal && (
          <Modal
            open={showModal}
            onClose={() => setShowModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <ProfilImageModal />
            </Box>
          </Modal>
        )}
      </div>

      <div className="big flex  w-[1000px] h-[300px]  mt-[50px] relative">
        <Formik initialValues={user} enableReinitialize onSubmit={onSubmit}>
          <Form>
            <div className="  data  w-[250px] h-[40px]  absolute right-[10px] top-[10px]  ">
              <p className="text-right text-gray2">نام</p>
              <Field
                className="rounded-[10px] text-right border border-[#9b9b9b] w-full mt-1 h-9 pr-2 "
                name="LName"
                placeholder=""
              />
            </div>

            <div className="data  w-[250px] h-[40px]  absolute right-[370px] top-[10px]  ">
              <p className="text-right text-gray2">نام خانوادگی </p>

              <Field
                className="rounded-[10px] text-right border border-[#9b9b9b] w-full mt-1 h-9 pr-2 "
                name="FName"
                placeholder=""
              />
            </div>

            <div className="data  w-[250px] h-[40px]  absolute left-[20px] top-[10px]  ">
              <p className="text-right text-gray2">کد ملی</p>

              <Field
                className="rounded-[10px] text-right border border-[#9b9b9b] w-full mt-1 h-9 pr-2 "
                name="NationalCode"
                placeholder=""
              />
            </div>

            <div className="data  w-[250px] h-[40px]  absolute right-[10px] top-[170px]  ">
              <p className="text-right text-gray2">درباره من</p>

              <Field
                className="rounded-[10px] text-right border border-[#9b9b9b] w-full mt-1 h-9"
                name="UserAbout"
                placeholder=""
              />
            </div>

            <div className="data  w-[250px] h-[40px]  absolute right-[73%] top-[85px]  ">
              <p className="text-right text-gray2">تاریخ تولد</p>

              <Field
                className="rounded-[10px] text-right border border-[#9b9b9b] w-full mt-1 h-9 pr-2 "
                name="BirthDay"
                placeholder=""
              />
            </div>

            <div className="data  w-[250px] h-[40px]  absolute left-[16px] top-[170px]  ">
              <p className="text-right text-gray2">آدرس </p>

              <Field
                className="rounded-[10px] text-right border border-[#9b9b9b] w-full mt-1 h-9 pr-2 "
                name="HomeAdderess"
                placeholder=""
              />
            </div>

            <div className="data  w-[250px] h-[40px]  absolute right-[37%] top-[170px]  ">
              <p className="text-right text-gray2"> آدرس تلگرام</p>

              <Field
                className="rounded-[10px] text-right border border-[#9b9b9b] w-full mt-1 h-9 pr-2 "
                name="TelegramLink"
                placeholder=""
              />
            </div>

            <div className="data  w-[250px] h-[40px]  absolute right-[9px] top-[260px]  ">
              <p className="text-right text-gray2">آدرس لینکدین </p>

              <Field
                className="rounded-[10px] text-right border border-[#9b9b9b] w-full mt-1 h-9 pr-2 "
                name="LinkdinProfile"
                placeholder=""
              />
            </div>
            <div className="data  w-[250px] h-[40px]  absolute right-[1%] top-[85px]  ">
              <p className="text-right text-gray2">ایمیل </p>

              <Field
                className="rounded-[10px] text-right border border-[#9b9b9b] w-full mt-1 h-9 pr-2 "
                name="email"
                placeholder=""
              />
            </div>

            <div className="data  w-[250px] h-[40px]  absolute right-[37%] top-[85px]  ">
              <p className="text-right text-gray2">شماره همراه </p>

              <Field
                className="rounded-[10px] text-right border border-[#9b9b9b] w-full mt-1 h-9 pr-2 "
                name="phoneNumber"
                placeholder=""
              />
            </div>
            <div className="data  w-[250px] h-[40px]  absolute right-[37%] top-[260px]  ">
              <p className="text-right text-gray2"> جنسیت </p>

              <div className="text-right border-[#9b9b9b] relative left-[49%] ">
                <label
                  name="Gender"
                  className="w-1/2 flex justify-center items-center gap-2 text-right "
                >
                  <Field
                    as="select"
                    name="Gender"
                    style={{
                      backgroundColor: "var(--text-col5)",
                      borderColor: "var(--text-col3)",
                      borderRadius: 10,
                    }}
                    className="w-full border-b h-[50px] shadow-md focus:outline-none focus:ring focus:ring-textCol3"
                  >
                    <option value="true">مرد</option>
                    <option value="false">زن</option>
                  </Field>
                </label>
                <div className="py-8 flex justify-center items-center text-center gap-2  relative top-0 right-[30%]">
                  <Switch defaultChecked={checkBox} onChange={handleTwoAuth} />
                  <span className="text-base font-semibold text-[var(--text-col4)]">
                    رمز ورود دومرحله ای
                  </span>
                </div>
              </div>
            </div>

            <div className="data  w-[250px] h-[40px]  absolute left-[16px] top-[375px]  ">
              {/* <p className="text-right text-gray2"> اطلاع از اخرین اخبار </p> */}

              {/* <div className="w-full flex flex-nowrap justify-center mt-2">
                <label
                  name="ReceiveMessageEvent"
                  className="w-1/2 flex justify-center items-center gap-2 "
                >
                  <Field
                    type="radio"
                    name="ReceiveMessageEvent"
                    value="false"
                  />
                  خیر
                </label>
                <label
                  name="ReceiveMessageEvent"
                  className="w-1/2 flex justify-center items-center gap-2 "
                >
                  <Field type="radio" name="ReceiveMessageEvent" value="true" />
                  بله
                </label>
              </div> */}
            </div>

            <button
              type="submit"
              className="w-[220px] h-[50px]  bg-[#3f40ea] rounded-[10px] text-center absolute right-0 bottom-[-150px]"
            >
              {" "}
              <span className="  font-[YekanBakh] text-[20px] text-white leading-[50px] ">
                {" "}
                ثبت اطلاعات
              </span>{" "}
            </button>
          </Form>
        </Formik>
      </div>
      {/* <div className="w-[220px] h-[50px]  bg-[#3f40ea] rounded-[10px] text-center absolute right-[30px] bottom-[100px]">
        {" "}
        <span className="  font-[YekanBakh] text-[20px] text-white leading-[50px] ">
          {" "}
          ثبت اطلاعات
        </span>{" "}
      </div> */}
    </>
  );
};

export default ProfileContent;
