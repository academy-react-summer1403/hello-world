import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import photo from "@assets/images/Profile/prof.jpg";
import EditAccount from "@core/servises/api/UserPanel/UserPanel/EditAccount";
import { getUserDashboard } from "@core/servises/api/UserPanel/UserPanel/Dashboard";
import { ConvertToPersianDate } from "@core/utils/convertDate";

const ProfileContent = () => {
  const [user, setUser] = useState([]);

  const getUser = async () => {
    const data = await getUserDashboard();
    console.log("report:", data);

    const obj = {
      LName: data.lName,
      FName: data.fName,
      NationalCode: data.nationalCode,
      BirthDay: data.birthDay && ConvertToPersianDate(data.birthDay),
      UserAbout: data.userAbout,
      TelegramLink: data.telegramLink,
      HomeAdderess: data.homeAdderess,
      LinkdinProfile: data.linkdinProfile,
      email: data.email,
      Gender: data.gender,
      phoneNumber:data.phoneNumber,
      ReceiveMessageEvent: data.receiveMessageEvent,
    };

    setUser(obj);
  };
  // const settings = {
  //   width: 200,
  //   height: 200,
  //   value: userDash.profileCompletionPercentage,
  // };

  useEffect(() => {
    getUser();
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
      phoneNumber:values.phoneNumber,
      Latitude: 0,
      Longitude: 0,
    };
    console.log("obj vslurs form", obj);
    EditAccount(obj);
  };
  return (
    <>
      <div className="relative">
        <img
          src={photo}
          alt="images"
          className="rounded-[50%] w-[200px] h-[200px] mt-[20px] "
        />
        <span className="  font-[YekanBakh] absolute right-[57px] text-gray4 ">
          {" "}
          ویرایش تصویر{" "}
        </span>
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
