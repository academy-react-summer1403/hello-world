import React, { useEffect, useState } from "react";
import HeadTitle from "./HeadTitle";
import ChangePasswordAPI from "@core/servises/api/UserPanel/UserPanel/Comment";

const Comment = () => {
  const [userComment, setUserComment] = useState([]);

  const getUserComment = async () => {
    const data = await ChangePasswordAPI();
    console.log("report Comment:", data);
    setUserComment(data);
  };

  useEffect(() => {
    getUserComment();
  }, []);

  return (
    <div className="h-[850px] w-[76.5%] rounded-[23px] flex justify-center relative flex-wrap p-4 bg-[#ffffff] content-start">
      <HeadTitle />

    </div>
  );
};

export default Comment;
