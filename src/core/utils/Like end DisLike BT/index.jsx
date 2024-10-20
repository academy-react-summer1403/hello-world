/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

const likeBT = () => {
  const [likeconst, setLikeconst] = useState(50);
  const [dislikeconst, setDislikeconst] = useState(10);
  const [activBtn, setactivBtn] = useState("noon");
  // Handel a like or dislike button click
  const handleclick = () => {};

  return (
    <div className="btn-conainer">
      {/* BT for like */}
      <button
        className={`btn ${activBtn === "like" ? "like-active" : " "}`}
        onClick={() => handleclick("like")}
      >
        <span className="">thumb-up</span>
        like{likeconst}
      </button>
      {/* BT for dislike */}
      <button
        className={`btn ${activBtn === "dislike" ? "dislike-active" : " "}`}
        onClick={() => handleclick("dislike")}
      >
        <span className="">thumb-down</span>
        dislike{dislikeconst}
      </button>
    </div>
  );
};

export default likeBT;
