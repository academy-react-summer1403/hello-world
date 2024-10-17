// import aks5 from "../../../assets/Images/BlogDetails/Sign in Course.png";
import { useState } from "react";
import img from "@assets/images/News/1215b2106df963d9ff66fbc22f9cf44c.jpg";
import heart from "@assets/Images/Tutorial/heart.png";
import { Button } from "@mui/material";

const Comments = () => {
  const [like, setLike] = useState("disslike");
  // console.log("id:",id)
  const ButtonClick = (arg) => {
    setLike(arg);
  };
  return (
    <div className="">
      <div className="  flex justify-center  ">
        <div className="w-[900px]  h-[900px]  mt-[25px] mb-[50px]  relative rounded-[20px] shadow-2xl ">
          <h1 className='text-center font-["YekanBakhBold"] text-2xl text-grayy  mt-[20px]   '>
            {" "}
            نظر کاربران درباره این مقاله{" "}
          </h1>
          <input
            className="Search w-[800px] h-[100px] shadow-md mt-[20px] text-right rounded-3xl bg-white font-[YekanBakhBold] text-[20px] m-auto absolute right-[50px] "
            type="search"
            placeholder="نظر خودتو بنویس..."
          ></input>
          <div className="w-[80px] h-[48px]  absolute top-[190px] right-[300px] ">
            <Button variant="contained" size="large" className="rounded-xl">
              ارسال
            </Button>
          </div>
          <div className="absolute top-[280px] right-[50px] flex justify-end flex-wrap gap-5 ">
            <div className="w-[780px] ">
              <div className=" flex justify-end items-center gap-3 ">
                <span>محمد زمانی</span>
                <img className="h-8 w-8 rounded-3xl" src={img} alt="" />
              </div>
              <div className=" flex justify-end">
                <span className=" text-sm text-right mt-3">
                  .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون
                </span>
              </div>
              <div className=" flex justify-end mt-3 shadow-md">
                <div
                  className={like === "disslike" ? `disslike` : `like`}
                  onClick={() => {
                    like === "like"
                      ? ButtonClick("disslike")
                      : ButtonClick("like");
                  }}
                >
                  <span className=" absolute right-6"> 7 </span>
                  <img className="h-4 w-4" src={heart} alt="" />
                </div>
              </div>
            </div>
            <div className="w-[780px] ">
              <div className=" flex justify-end items-center gap-3 ">
                <span>محمد زمانی</span>
                <img className="h-8 w-8 rounded-3xl" src={img} alt="" />
              </div>
              <div className=" flex justify-end">
                <span className=" text-sm text-right mt-3">
                  .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون
                </span>
              </div>
              <div className=" flex justify-end mt-3 shadow-md">
                <div
                  className={like === "disslike" ? `disslike` : `like`}
                  onClick={() => {
                    like === "like"
                      ? ButtonClick("disslike")
                      : ButtonClick("like");
                  }}
                >
                  <span className=" absolute right-6"> 7 </span>
                  <img className="h-4 w-4" src={heart} alt="" />
                </div>
              </div>
            </div>
            <div className="w-[780px] ">
              <div className=" flex justify-end items-center gap-3 ">
                <span>محمد زمانی</span>
                <img className="h-8 w-8 rounded-3xl" src={img} alt="" />
              </div>
              <div className=" flex justify-end">
                <span className=" text-sm text-right mt-3">
                  .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون
                </span>
              </div>
              <div className=" flex justify-end mt-3 shadow-md">
                <div
                  className={like === "disslike" ? `disslike` : `like`}
                  onClick={() => {
                    like === "like"
                      ? ButtonClick("disslike")
                      : ButtonClick("like");
                  }}
                >
                  <span className=" absolute right-6"> 7 </span>
                  <img className="h-4 w-4" src={heart} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
