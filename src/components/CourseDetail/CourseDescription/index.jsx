import React from "react";
import { useParams } from "react-router-dom";
import ReserveCourseByUser from "@core/servises/api/Courses/ReserveCourseByUser";
import i1 from "@assets/images/CourseDetail/CourseDescription/Icon1.png";
import i2 from "@assets/images/CourseDetail/CourseDescription/Icon2.png";
import i3 from "@assets/images/CourseDetail/CourseDescription/Icon3.png";
import i4 from "@assets/images/CourseDetail/CourseDescription/Icon4.png";
import i5 from "@assets/images/CourseDetail/CourseDescription/Icon5.png";
import { faNumber } from "@core/utils/FaNumber";
import { ConvertToPersianDate } from "@core/utils/convertDate";
const CourseDescription = (props) => {
  const { id } = useParams();

  const onSubmit = async () => {
    const obj = { courseid: id };
    ReserveCourseByUser(obj);
  };

  return (
    <div className="dv2 bg-white rounded-[20px]   w-[400px]   h-[470px]">
      <div className="item flex  flex-wrap gap-[15px]    w-[300px]   h-[580px]  mx-[50px]          ">
        <div className="bigdiv  w-[300px]  ">
          <div className="dv1">
            <div className="title  text-center text-[24px] font-[YekanBakh]  text-grayy mt-[20px] pt-[10px] border-b-2 border-graylight  ">
              مشخصات دوره{" "}
            </div>
            <div className="info h-[70px] border-b-2 border-graylight relative leading-[70px] ">
              <img
                className="w-[30px] h-[30px] absolute right-0  top-[17px]  "
                src={i1}
                alt="image"
              />{" "}
              <h3 className="absolute right-[40px] text-gray4 "> ظرفیت </h3>
              <span className="i1 absolute text-grayy text-[16px] ">
                {" "}
                {props?.capacity && faNumber(props?.capacity.toString(), ",")}
              </span>
            </div>
            <div className="info h-[70px] border-b-2 border-graylight relative leading-[70px]   ">
              <img
                className="w-[30px] h-[30px] absolute right-0  top-[17px]  "
                src={i2}
                alt="image"
              />{" "}
              <h3 className="absolute right-[40px] text-gray4 ">وضعیت دوره </h3>
              <span className="i2 absolute text-grayy text-[16px]">
                {" "}
                در حال برگزاری
              </span>
            </div>
            <div className="info h-[70px] border-b-2 border-graylight relative leading-[70px] ">
              <img
                className="w-[30px] h-[30px] absolute right-0  top-[17px]  "
                src={i3}
                alt="image"
              />{" "}
              <h3 className="absolute right-[40px] text-gray4 ">تاریخ شروع</h3>
              <span className="i3 absolute text-grayy text-[16px]">
                {" "}
                {props?.startTime && ConvertToPersianDate(props?.startTime)}
              </span>
            </div>
            <div className="info h-[70px] border-b-2 border-graylight relative leading-[70px]">
              <img
                className="w-[30px] h-[30px] absolute right-0  top-[17px]  "
                src={i4}
                alt="image"
              />{" "}
              <h3 className="absolute right-[40px] text-gray4 ">
                {" "}
                تاریخ پایان{" "}
              </h3>
              <span className="i4 absolute text-grayy text-[16px]">
                {props?.endTime && ConvertToPersianDate(props?.endTime)}
              </span>
            </div>
            <div className="info h-[105px]  relative leading-[110px] ">
              {" "}
              <button onClick={onSubmit}>
                <img
                  className="w-[125px] h-[70px] absolute left-[190px] top-[17px]  "
                  src={i5}
                  alt="image"
                />
              </button>
              <span dir="rtl" className="i4 absolute text-bluee text-[24px]">
                {" "}
                {props?.cost &&
                  faNumber(props?.cost.toString(), ",")} تومان{" "}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="dv2  bg-white rounded-[20px] relative top-[-90px]     flex gap-[25px]   w-[400px]   h-[100px]    ">
        <div className=" h-[60px]  w-[200px] absolute right-[130px] top-[20px] ">
          <h3 className="text-right  text-gray3 font-[YekanBakhBold] ">
            {" "}
            دکتر بحرالعلوم
          </h3>
          <p className="text-right text-gray4 font-[YekanBakh] leading-[40px] text-[15px]">
            {" "}
            برنامه نویسی تحت فرانت و بکند
          </p>
        </div>
        <div className=" h-[60px]  w-[70px]  absolute right-[50px] top-[15px] ">
          <img className="rounded-[20px] to" alt="image" />{" "}
        </div>
      </div>
    </div>
  );
};

export default CourseDescription;
