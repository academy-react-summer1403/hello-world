import React, { useState } from "react";
import noImage from "@assets/images/Landing/Courses/noImage.jpg";
import heart from "@assets/images/CourseDetail/Comments/heart.png";
import { faNumber } from "@core/utils/FaNumber";
import messages from "@assets/images/CourseDetail/Comments/messages.svg";
import AddReply from "./AddReply";
import { ConvertToPersianDate } from "@core/utils/convertDate";
const Comment = (
  props,
  pictureAddress,
  likeCount,
  CommentId,
  courseId,
  insertDate
) => {
  const [isReplyComment, setIsReplyComment] = useState(false);

    console.log("pictureAddress", pictureAddress);

  return (
    <>
      <div className="w-[780px]  rounded-xl flex content-end flex-col	flex-wrap ">
        <div dir="rtl" className="flex flex-wrap-reverse justify-between  ">
          <div
            dir="rtl"
            className=" flex flex-wrap-reverse items-center  gap-2  "
          >
            <img
              className="h-8 w-8 rounded-3xl"
              src={
                props?.pictureAddress &&
                props?.pictureAddress.includes("classapi.sepehracademy.ir")
                  ? props?.pictureAddress
                  : noImage
              }
              alt=""
            />
            <span className="text-gray3"> {props?.author}</span>
          </div>
          <span className="flex justify-start text-[12px] text-gray4">
            {props?.insertDate && ConvertToPersianDate(props?.insertDate)}
          </span>
        </div>

        <div className="  flex justify-end">
          <span dir="rtl" className=" text-xs text-right text-gray4 mt-3">
            {props?.describe}
          </span>
        </div>
        <div className="  flex gap-3  flex-wrap flex-row-reverse w-[70%]">
          <div
            className="flex justify-end gap-1 items-center mt-2 cursor-pointer"
            // onClick={handleCommentLike}
          >
            {" "}
            <img className="w-[15px] h-[15px] " src={heart} />
            <span className="commentLikeDislikeCount text-red-400 ">
              {props?.likeCount && faNumber(props?.likeCount.toString(), ",")}
            </span>
          </div>

          <div
            className="flex gap-1 mt-2 cursor-pointer"
            onClick={() => {
              setIsReplyComment(!isReplyComment);
            }}
          >
            <span className="commentAnswerText"></span>
            <img src={messages} />
          </div>
          <div className="">
            {isReplyComment === true && (
              <AddReply
                setIsReplyComment={setIsReplyComment}
                CommentId={CommentId}
                courseId={courseId}
              />
            )}
          </div>

          <div className="flex  mt-2 cursor-pointer">
            <span className="commentAnswerText"></span>
            <img src={messages} />
          </div>
        </div>
        <div className=" flex justify-end mt-8   "></div>
      </div>
    </>
  );
};

export default Comment;
{
  /* <div className="w-[800px] border">
        <div className="it1  h-[100px]  relative  ">
          <div>
            <img className="absolute right-0" alt="image" />
            <span className="absolute right-[45px] top-[5px] text-grayy ">
              {props?.title}
            </span>
          </div>
          <span className="text-gray4 font-[YekanBakh] text-[12px] mr-1 ">
            {" "}
            {props?.insertDate}
          </span>{" "}
          <span className="text-gray4 font-[YekanBakh] text-[12px] absolute top-[5px] ">
            {" "}
          </span>
          <span className="text-right text-gray4 font-[YekanBakh] text-[15px] absolute  right-0 top-[40px] ">
            {props?.describe}
          </span>
        </div>
      </div> */
}
