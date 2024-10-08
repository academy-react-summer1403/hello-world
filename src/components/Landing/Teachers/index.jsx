import React from 'react'
import vector from "@assets/images/Landing/Servises/Vector 20.png"
const Teachers = () => {
  return (
    <div className='w-full h-[700px] bg-[#E3F2FD] flex justify-center flex-wrap mt-[100px]  '>
      <div className="slider-container bg-[#E3F2FD] slider ">  
      <div className="w-full h-[17%] ">
          <div className="w-full h-20 text-center text-[#263238] text-4xl pt-4 myFontBold  ">
            <h2 className="w-full">اساتید برتر</h2>
            <img className=" mx-auto mt-3" src={vector} alt="" />
          </div>
        </div>
       <div className='w-full h-[83%] border border-sky-500'> 
        
        
        </div> 


      </div>
    </div>
  )
}

export default Teachers;
