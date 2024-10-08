import heart from "../../../../../assets/Images/Tutorial/heart.png";
import { useState } from "react";
import { faNumber } from "../../../../../core/utils/FaNumber";
import Date from "../../../../../assets/Images/Tutorial/dars.png";
import noImage from "../../../../../assets/images/Courses/noImage.png";
import { Link } from "react-router-dom";

const One = ({
  view,
  title,
  teacherName,
  cost,
  tumbImageAddress,
  levelName,
  currentRegistrants,
  describe,
  id,
  likeCount,
}) => {
  const [like, setLike] = useState("disslike");
  // console.log("id:",id)
  const ButtonClick = (arg) => {
    setLike(arg);
  };
  // console.log("cost:", cost);

  return (
    <>
      <div className={view === "knrhm" ? `knrhm` : `zirhm`}>
        <img
          className="max-w-[265px] w-[265px]"
          src={tumbImageAddress ? tumbImageAddress : noImage}
          alt=""
        />
        <h3 className=" text-[16px] text-[#263238]">
          <Link to={`/CourseDetailsS/${id}`}>{title}</Link>{" "}
        </h3>
        <Link to={`/CourseDetailsS/${id}`} className="infoBax">
          <div className="Date bg-no-repeat bg-[center_right_10px] text-[#263238]">
            {" "}
            ساعت 14
          </div>
          <div className="Clock bg-no-repeat bg-[center_right_10px] text-[#263238]">
            {" "}
            1آذر 402
          </div>
          <div className="Dars bg-no-repeat bg-[center_right_5px] text-[#263238] ">
            {levelName}
            <img src={Date} alt="عکس دوره" />
          </div>
        </Link>
        <div className="textInfo">
          <Link to="/CourseDetailsS" className="LeftInfo">
            <h2 className="text-[#263238]">دانش آموز {currentRegistrants} </h2>
            <h2 className="text-[#263238]">
              {" "}
              {cost && faNumber(cost.toString(), ",")} تومان{" "}
            </h2>
          </Link>
          <div className="RightInfo">
            <h2 className=" text-[#263238]">{teacherName}</h2>
            <h3 className=" text-[#777777]">{describe}</h3>
            <div
              className={like === "disslike" ? `disslike` : `like`}
              onClick={() => {
                like === "like" ? ButtonClick("disslike") : ButtonClick("like");
              }}
            >
              <img src={heart} alt="" />
              <h2 className="text-[#F44336]">{likeCount}</h2>
            </div>
          </div>
        </div>
      </div>
      {/* // other Fake //////////////////////////// */}
    </>
  );
};

export default One;
