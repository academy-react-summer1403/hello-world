import React, { useEffect, useState } from "react";
import Titr from "./Titr";
import Items from "./Items";
import CorsCommentAPI from "@core/servises/api/UserPanel/UserPanel/Comment";
const Dore = () => {
  const [userComment, setUserComment] = useState([]);

  const getUserComment = async () => {
    const data = await CorsCommentAPI();
    console.log("report Comment:", data.myCommentsDtos);
    setUserComment(data.myCommentsDtos);
  };

  useEffect(() => {
    getUserComment();
  }, []);

  return (
    <div className="w-[95%] h-[520px] max-h-[520px]  mt-8 flex justify-center flex-wrap content-start">
      <Titr />
      {userComment.map((item, index) => {
        return (
          <Items
            key={index}
            courseTitle={item.courseTitle}
            title={item.title}
            replyCount={item.replyCount}
            insertDate={item.insertDate}
            accept={item.accept}
          />
        );
      })}
    </div>
  );
};

export default Dore;
