import React from "react";
import HeadTitle from "./HeadTitle";
import ProfileContent from "./ProfileContent";

const EditProfile = () => {
  return (
    <div className="h-[850px] w-[76.5%] rounded-[23px] flex justify-center relative flex-wrap p-4 bg-[#ffffff] content-start">
      <HeadTitle />
      <ProfileContent />
    </div>
  );
};

export default EditProfile;
