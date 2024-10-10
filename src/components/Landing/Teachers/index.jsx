import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import  Navigation from 'swiper'
import  Pagination from 'swiper'

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'
import vector from "@assets/images/Landing/Servises/Vector 20.png"
import p1 from "@assets/images/Landing/Teachers/S1.png"
const Teachers = () => {
  return (
    <div className='w-full h-[700px] bg-[#E3F2FD] flex justify-center flex-wrap mt-[100px]  '>
      <div className="slider-container bg-[#E3F2FD] slider   w-[1100px] h-[570px] m-auto    ">  
      <div className="w-full h-[17%] ">
          <div className="w-full h-20 text-center text-[#263238] text-4xl pt-4 font-['YekanBakhBold']  ">
            <h2 className="w-full">اساتید برتر</h2>
            <img className=" mx-auto mt-3" src={vector} alt="" />
          </div>
        </div>
       <div className='w-full h-[83%] '> 
        <Swiper 
        className='slider w-[100%] '
        modules= {{Navigation}}
        module={{Pagination}}
        navigation
        pagination
        loop={true}
        autoplay={{ delay:2000 }}
        >
            <SwiperSlide className='' >
            <div className="w-1/4  h-[440px]  float-left">
              <div className="w-[296px] h-[360px]  ">
                <img className="mt-[-10px]" src={p1} alt="#" />
                <div className=" flex justify-center flex-wrap ">
                  <h2 className=" w-full text-center myFontBold text-[22px] mt-[-15px]">
                    دکتر بحرالعلوم
                  </h2>
                  <p className="myFontMiniBold">
                    {" "}
                    برنامه نویسی تحت فرانت و بکند
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/4 h-[440px] float-left">
              <div className="w-[296px] h-[360px]   mt-20">
                <img className="mt-[-25px]" src={p1} alt="#" />
                <div className=" flex justify-center flex-wrap ">
                  <h2 className=" w-full text-center myFontBold text-[22px] mt-[-15px]">
                    مسعود هشمتی
                  </h2>
                  <p className="myFontMiniBold"> ریکت و انگلار</p>
                </div>
              </div>
            </div>
            <div className="w-1/4 h-[440px] float-left">
              <div className="w-[296px] h-[380px]  ">
                <img className="mt-[-10px]" src={p1} alt="#" />
                <div className=" flex justify-center flex-wrap ">
                  <h2 className=" w-full text-center myFontBold text-[22px] mt-[-15px]">
                    بهاره یزدانی
                  </h2>
                  <p className="myFontMiniBold"> طراحی محصول و رابط کاربری</p>
                </div>
              </div>
            </div>
            <div className="w-1/4 h-[440px] float-left">
              <div className="w-[296px] h-[380px] mt-20 ">
                <img className="mt-[-25px]" src={p1} alt="#" />
                <div className=" flex justify-center flex-wrap ">
                  <h2 className=" w-full text-center myFontBold text-[22px] mt-[-15px]">
                    سالار حیدری
                  </h2>
                  <p className="myFontMiniBold">
                    {" "}
                    node js , .netcore , database , بکند
                  </p>
                </div>
              </div>
            </div>
            


            </SwiperSlide>

            <SwiperSlide className='' >
            <div className="w-1/4  h-[440px]  float-left">
              <div className="w-[296px] h-[360px]  ">
                <img className="mt-[-10px]" src={p1} alt="#" />
                <div className=" flex justify-center flex-wrap ">
                  <h2 className=" w-full text-center myFontBold text-[22px] mt-[-15px]">
                    دکتر بحرالعلوم
                  </h2>
                  <p className="myFontMiniBold">
                    {" "}
                    برنامه نویسی تحت فرانت و بکند
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/4 h-[440px] float-left">
              <div className="w-[296px] h-[360px]   mt-20">
                <img className="mt-[-25px]" src={p1} alt="#" />
                <div className=" flex justify-center flex-wrap ">
                  <h2 className=" w-full text-center myFontBold text-[22px] mt-[-15px]">
                    مسعود هشمتی
                  </h2>
                  <p className="myFontMiniBold"> ریکت و انگلار</p>
                </div>
              </div>
            </div>
            <div className="w-1/4 h-[440px] float-left">
              <div className="w-[296px] h-[380px]  ">
                <img className="mt-[-10px]" src={p1} alt="#" />
                <div className=" flex justify-center flex-wrap ">
                  <h2 className=" w-full text-center myFontBold text-[22px] mt-[-15px]">
                    بهاره یزدانی
                  </h2>
                  <p className="myFontMiniBold"> طراحی محصول و رابط کاربری</p>
                </div>
              </div>
            </div>
            <div className="w-1/4 h-[440px] float-left">
              <div className="w-[296px] h-[380px] mt-20 ">
                <img className="mt-[-25px]" src={p1} alt="#" />
                <div className=" flex justify-center flex-wrap ">
                  <h2 className=" w-full text-center myFontBold text-[22px] mt-[-15px]">
                    سالار حیدری
                  </h2>
                  <p className="myFontMiniBold">
                    {" "}
                    node js , .netcore , database , بکند
                  </p>
                </div>
              </div>
            </div>
            


            </SwiperSlide>
           
           
        </Swiper>
        
        </div> 


      </div>
    </div>
  )
}

export default Teachers;
