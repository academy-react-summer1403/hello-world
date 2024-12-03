import React from "react";
import { getCommentReplies } from "@core/servises/api/News";
import { useEffect, useState } from "react";
import Content from "./Content";

const RepliedComment = ({ newsId,CommentId  }) => {
  const [replied, setReplied] = useState([]);

  const getReply = async (newsId ,CommentId) => {
    const reply = await getCommentReplies(newsId,CommentId );
    console.log("reply:", reply);
    setReplied(reply);
  };

  useEffect(() => {
    getReply(newsId,CommentId );
  }, []);

  return (
    <div>
      {replied?.map((item, index) => {
        return (
          <Content
            key={index}
            id={item?.id}
            newsId={item?.newsId}
            CommentId={item?.CommentId}
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
