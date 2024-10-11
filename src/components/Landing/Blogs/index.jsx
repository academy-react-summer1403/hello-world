import React from 'react'
import { Link } from "react-router-dom";
import vector from "@assets/images/Landing/Servises/Vector 20.png"

const Blogs = () => {
  return (
    <div className="w-full flex justify-center pt-20 ">
    <div className="w-[1200px] h-[830px] flex justify-center flex-wrap ">
      <div className="w-full h-20 text-center text-[#263238] text-4xl pt-2 myFontBold max-xl:mb-10">
        <h2 className="w-full font-['YekanBakhBold'] ">اخبار و مقالات</h2>
        <img className="m-auto mt-4" src={vector} alt="" />
      </div>

      </div>
      </div>
  )
}

export default Blogs;
