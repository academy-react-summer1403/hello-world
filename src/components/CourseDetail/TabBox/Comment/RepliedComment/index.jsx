import React from "react";
import { getReplyComment } from "@core/servises/api/Courses/Course";
import { useEffect, useState } from "react";
import Content from "./Content";

const RepliedComment = ({ courseId, commentId }) => {
  const [replied, setReplied] = useState([]);

  const getReply = async (courseId, commentId) => {
    const reply = await getReplyComment(courseId, commentId);
    console.log("reply:", reply);
    setReplied(reply);
  };

  useEffect(() => {
    getReply(courseId, commentId);
  }, []);

  return (
    <div>
      {replied?.map((item, index) => {
        return (
          <Content
            key={index}
            id={item?.id}
            courseId={item?.courseId}
            CommentId={item?.id}
            author={item?.author}
            insertDate={item?.insertDate}
            title={item?.title}
            describe={item?.describe}
            pictureAddress={item?.pictureAddress}
            likeCount={item?.likeCount}
          />
        );
      })}
    </div>
  );
};

export default RepliedComment;
