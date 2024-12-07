import React, { useState } from "react";
import noImage from "@assets/images/Landing/Courses/noImage.jpg";
import heart from "@assets/images/CourseDetail/Comments/heart.png";
import { faNumber } from "@core/utils/FaNumber";
import messages from "@assets/images/CourseDetail/Comments/messages.svg";
import AddReply from "./AddReply";
import { ConvertToPersianDate } from "@core/utils/convertDate";
import RepliedComment from "./RepliedComment";
const Comment = (
  props,
  pictureAddress,
  likeCount,
  CommentId,
  courseId,
  insertDate
) => {
  const [isReplyComment, setIsReplyComment] = useState(false);
  const [RepliedCm, setRepliedCm] = useState(false);
  const [reply, setReply] = useState(true);

  const setdesignReply = () => {
    setReply(!reply);
  };

  console.log(reply);
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
            <span className="dark:text-white transition duration-300 ease-in-out text-gray3">
              {" "}
              {props?.author}
            </span>
          </div>
          <span className="flex justify-start text-[12px] dark:text-white transition duration-300 ease-in-out text-gray4">
            {props?.insertDate && ConvertToPersianDate(props?.insertDate)}
          </span>
        </div>

        <div className="  flex justify-end">
          <span
            dir="rtl"
            className=" text-xs text-right dark:text-white transition duration-300 ease-in-out text-gray4 mt-3"
          >
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
            className="flex gap-1 mt-2 cursor-pointer dark:text-white transition duration-300 ease-in-out"
            onClick={() => {
              setIsReplyComment(!isReplyComment);
            }}
          >
            <span className="commentAnswerText"></span>
            <span className="text-[15px] text-gray4"> {reply ? "پاسخ" : "انصراف"}</span>

            <img src={messages} />
          </div>
          <div className="">
            {isReplyComment === true && (
              <AddReply
                onClick={setdesignReply}
                setIsReplyComment={setIsReplyComment}
                CommentId={props?.CommentId}
                courseId={props?.courseId}
              />
            )}
          </div>

          <div
            className="flex  mt-2 cursor-pointer"
            onClick={() => {
              setRepliedCm(!RepliedCm);
            }}
          >
            <span className="commentAnswerText"></span>
            <span className="text-[15px] text-gray4"> {RepliedCm ? "انصراف" : "ریپلای‌ها"}</span>
            <img src={messages} />
          </div>
          <div className="">
            {RepliedCm === true && (
              <RepliedComment
                setRepliedCm={setRepliedCm}
                CommentId={props?.CommentId}
                courseId={props?.courseId}
              />
            )}
          </div>
        </div>
        <div className=" flex justify-end mt-8   "></div>
      </div>
    </>
  );
};

export default Comment;
