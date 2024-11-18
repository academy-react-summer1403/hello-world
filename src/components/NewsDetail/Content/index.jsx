/* eslint-disable react/prop-types */
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { faNumber } from "../../../Core/Utils/FaNumber";
import { LiaShareAltSolid } from "react-icons/lia";
import { RiInstagramFill } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";
import { LiaTelegram } from "react-icons/lia";
import videoClip from "../../../assets/images/video/videoblocks-closeup-coding-on-screen-man-hands-coding-html-and-programming-on-screen-monitors-development-web-developer_stbx3oft8__39d63a896a683c098f74b06b32648925__P360.mp4"

const NewsContent = (props) => {
  console.log("props:",props)

  
  return (
    <div className="bg-white2 dark:bg-[#1a1a2e] transition duration-300 ease-in-out">
      <div className="  flex justify-center  ">
        <div className="w-[60%] mt-[25px]">
          <h1
            dir="rtl"
            className='text-right  font-["YekanBakhBold"] text-[30px] text-grayy max-mini1:text-[15px] dark:text-white transition duration-300 ease-in-out'
          >
            {" "}
            {props?.googleTitle}
          </h1>
          <p
            dir="rtl"
            className='text-right  font-["YekanBakh"] text-[15px] text-gray4 max-mini1:text-[10px] max-mini1:leading-[20px]  leading-[40px] transition duration-300 ease-in-out dark:text-white '
          >
            {props?.describe}
          </p>
        </div>
      </div>
      <div className=" h-16 flex justify-center w-[100%]  items-center  max-cc:hidden  ">
        <div className="flex justify-end items-center rounded-2xl bg-slate-100 pr-5  transition duration-300 ease-in-out  dark:bg-[#111827]">
          <div className="flex justify-start items-center ml-3 gap-4">
            <div>
              <RiInstagramFill className="text-blue1" />
            </div>
            <div>
              <SlSocialFacebook className="text-blue1" />
            </div>
            <div>
              <LiaTelegram className="text-blue1" />
            </div>
          </div>
          <div className="flex justify-end items-center  w-[820px] h-16">
            <span className="w-[75px] h-[25px] text-base text-gray4 dark:text-white">
              اشتراک گزاری
            </span>{" "}
            <LiaShareAltSolid className="w-[20px] h-[20px] ml-2 text-blue1" />
          </div>
        </div>
      </div>
      <div className="h-12 flex justify-center  items-center gap-32 mt-3">
        <div className=" flex w-[361px] h-12 justify-end items-center gap-2">
          <div className="flex justify-end items-center gap-4">
            <div className="flex justify-center items-center w-20 h-11 rounded-3xl bg-slate-100">
              <span className="text-xl text-gray4">
                {props?.currentDissLikeCount &&
                  faNumber(props?.currentDissLikeCount.toString(), ",")}
              </span>
              <AiOutlineDislike className="w-6 h-6 ml-2" />
            </div>
            <div className="flex justify-center items-center w-20 h-11 rounded-3xl bg-slate-100">
              <span className="text-xl text-gray4">
                {props?.currentLikeCount &&
                  faNumber(props?.currentLikeCount.toString(), ",")}
              </span>
              <AiOutlineLike className="w-6 h-6 ml-2" />
            </div>
          </div>
          <span className="dark:text-white text-gray4 max-md:text-[10px] max-md:whitespace-nowrap transition duration-300 ease-in-out">
            آیا از این مقاله راضی بودید؟
          </span>
        </div>
        <div className=" flex justify-start items-center flex-nowrap flex-row-reverse gap-4 w-80 h-8 max-min:hidden ">
          <div>
            {props?.currentRate ? <Stack>
              <Rating name="size-medium" value={props?.currentRate} />
            </Stack>: <Stack>
              <Rating name="size-medium" value={0} />
            </Stack>}
          </div>
          <div>
            <span className="text-xs dark:text-white transition duration-300 ease-in-out max-md:text-[10px] max-md:whitespace-nowrap">
              امتیاز 20 نفر
            </span>
          </div>
          <div className="w-20 h-8 bg-[#2196F3] rounded-full text-[#ffff] text-center pt-2 text-xs ">
            ثبت دیدگاه{" "}
          </div>
        </div>
      </div>

      <div className=" h-[500px] flex justify-center  items-center mt-3 ">
        <div className=" bg-[#AA69FF] h-[400px] md:w-1/3  rounded-[32px] overflow-hidden shadow-[0_0_20px_10px_rgba(0,0,0,0.1)] border border-[#2a466c]">
          <video
            src={videoClip}
            autoPlay
            loop
            controlsList="download"
            className="min-w-full min-h-full scale-y-[1.7] scale-x-[1.3]  "
          ></video>
        </div>
      </div>
    </div>
  );
};

export default NewsContent;
