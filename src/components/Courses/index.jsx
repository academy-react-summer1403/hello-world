import React from "react";
import Baner from "./Baner/index";
import List from "./List";

const CourseList = () => {
  return (
    <div className="bg-white2 dark:bg-[#1a1a2e] transition duration-300 ease-in-out">
      <Baner />
      <List />
    </div>
  );
};

export default CourseList;
