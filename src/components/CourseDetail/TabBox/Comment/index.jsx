import React from "react";

const Comment = (props) => {
  return (
    <>
      <div className="w-[800px] border">
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
      </div>
    </>
  );
};

export default Comment;
