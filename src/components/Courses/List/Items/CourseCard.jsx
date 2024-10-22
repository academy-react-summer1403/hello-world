import heart from "@assets/Images/Tutorial/heart.png";
import { useState } from "react";
import { faNumber } from "@core/utils/FaNumber";
import Clock from "@assets/Images/Tutorial/clock.png";
import Dars from "@assets/Images/Tutorial/dars.png";
import Date from "@assets/Images/Tutorial/date.png";
import noImage from "@assets/images/Courses/noImage.png";
import { Link } from "react-router-dom";

const CourseCard = ({
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
          <Link to={`/CourseDetailPage/${id}`}>{title}</Link>{" "}
        </h3>
        <Link to={`/CourseDetailPage/${id}`} className="infoBax dark:bg-[#1a1a2e]">
          <div className="MiniData dark:text-white text-[#263238]">
            {" "}
            <h3> ساعت 14</h3>
            <img src={Clock} />
          </div>
          <div className="MiniData dark:text-white text-[#263238]">
            {" "}
            <h3> 1آذر 402</h3>
            <img src={Date} />
          </div>
          <div className="MiniData dark:text-white text-[#263238] ">
            <h3> {levelName}</h3>
            <img src={Dars} />
          </div>
        </Link>
        <div className="textInfo">
          <Link to="/CourseDetailsS" className="LeftInfo">
            <h3 className="text-[#263238]">
              {" "}
              <>دانش آموز</>{" "}
            </h3>
            <h1 className="text-[#263238]">
              {" "}
              {currentRegistrants &&
                faNumber(currentRegistrants.toString(), ",")}
            </h1>

            <h4 className="text-[#263238]">تومان</h4>

            <h2 className="text-[#2196F3]">
              {" "}
              {cost && faNumber(cost.toString(), ",")}
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
              <h2 className="text-[#F44336]">
                {" "}
                {likeCount && faNumber(likeCount.toString(), ",")}
              </h2>
              <img src={heart} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* // other Fake //////////////////////////// */}
    </>
  );
};

export default CourseCard;
