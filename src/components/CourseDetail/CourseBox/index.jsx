import React from "react";
import { faNumber } from "@core/utils/FaNumber";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
const CourseBox = () => {
  return (
    <div className="h-12 flex justify-end  items-center gap-32  max-cc:hidden ">
      <div className=" flex w-[361px] h-12 justify-end items-center gap-2">
        <div className="flex justify-end items-center gap-4">
          <div className="flex justify-center items-center w-20 h-11 rounded-3xl bg-grayyy ">
            <span className="text-xl">{faNumber("")}</span>
            <AiOutlineDislike className="w-6 h-6 ml-2 " />
          </div>
          <div className="flex justify-center items-center w-20 h-11 rounded-3xl bg-grayyy ">
            <span className="text-xl">{faNumber("22")}</span>
            <AiOutlineLike className="w-6 h-6 ml-2" />
          </div>
        </div>
        <span className="font-[] text-[16px] text-gray4">
          آیا از این دوره راضی بودید؟
        </span>
      </div>
      <div className=" flex justify-start items-center flex-nowrap flex-row-reverse gap-4 w-80 h-8 ">
        <div>
          <Stack spacing={1}>
            <Rating name="size-medium" defaultValue={2} />
          </Stack>
        </div>
        <div>
          <span className="text-xs ">امتیاز {faNumber("20")} نفر</span>
        </div>
        <div className="w-20 h-8 bg-[#2196F3] border rounded-full text-[#ffff] text-center pt-2 text-xs ">
          ثبت دیدگاه{" "}
        </div>
      </div>
    </div>
  );
};

export default CourseBox;
