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

const NewsContent = (props) => {
  return (
    <div className="bg-white2 dark:bg-[#1a1a2e]">
      <div className="  flex justify-center  ">
        <div className="w-[900px] mt-[25px]">
          <h1 className='text-right  font-["YekanBakhBold"] text-[30px] text-grayy dark:text-white'>
            {" "}
            {props?.googleTitle}
          </h1>
          <p className='text-right  font-["YekanBakh"] text-[15px] text-gray4  leading-[40px] dark:text-white '>
            {props?.describe}
          </p>
        </div>
      </div>
      <div className=" h-16 flex justify-center  items-center ">
        <div className="flex justify-end items-center rounded-2xl bg-slate-100 pr-5  dark:bg-[#111827]">
          <div className="flex justify-start items-center ml-3 gap-4">
            <div>
              <RiInstagramFill className="text-blue1" />
            </div>
            <div>
              <SlSocialFacebook className="text-blue1"/>
            </div>
            <div>
              <LiaTelegram className="text-blue1"/>
            </div>
          </div>
          <div className="flex justify-end items-center  w-[820px] h-16">
            <span className="w-[75px] h-[25px] text-base dark:text-white">
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
              <span className="text-xl">{props?.currentDissLikeCount}</span>
              <AiOutlineDislike className="w-6 h-6 ml-2" />
            </div>
            <div className="flex justify-center items-center w-20 h-11 rounded-3xl bg-slate-100">
              <span className="text-xl">{props?.currentLikeCount}</span>
              <AiOutlineLike className="w-6 h-6 ml-2" />
            </div>
          </div>
          <span className="dark:text-white">آیا از این مقاله راضی بودید؟</span>
        </div>
        <div className=" flex justify-start items-center flex-nowrap flex-row-reverse gap-4 w-80 h-8 ">
          <div>
            <Stack>
              <Rating name="size-medium" value={props?.currentRate} />
            </Stack>
          </div>
          <div>
            <span className="text-xs dark:text-white">امتیاز 20 نفر</span>
          </div>
          <div className="w-20 h-8 bg-[#2196F3] rounded-full text-[#ffff] text-center pt-2 text-xs ">
            ثبت دیدگاه{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsContent;
