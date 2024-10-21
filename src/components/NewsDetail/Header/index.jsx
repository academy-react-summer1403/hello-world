/* eslint-disable react/prop-types */
import nasher from "@assets/images/News/1215b2106df963d9ff66fbc22f9cf44c.jpg";

const NewsHeader = (props) => {
  return (
    <div className="bg-white2 dark:bg-[#1a1a2e]">
      <div className="flex justify-center ">
        <div className="flex gap-[15px]  w-[1400px] h-[400px] mt-[30px]  relative  ">
          <div className="text w-[900px] [h-400px] absolute max-xxl:right-0">
            <h1 className='text-right  font-["YekanBakhBold"] text-[30px] text-grayy dark:text-white
 '>
              {" "}
              {props?.title}
            </h1>
            <p className='text-right  font-["YekanBakh"] text-[15px] text-gray4  leading-[50px] dark:text-white'>
              {" "}
              {props?.googleDescribe}
            </p>
            <div className="flex justify-between items-center w-full ">
              <div className="flex items-center gap-3 rounded-xl shadow-[0_0px_30px_20px_rgba(0,0,0,0.1)] bg-darkwhite h-16 dark:bg-[#111827]">
                <div className="" /> <span className="dark:text-white">{props?.addUserFullName}</span>
                <img className="w-10 h-10 rounded-2xl mr-3" src={nasher} alt="" />
              </div>
              <div className=" w-44 h-6 ">
                <span className="text-[#2196F3]">
                  {" "}
                  بازدید : {props?.currentView}
                </span>
                <span className="text-[#2196F3] text-[5px] m-5">🔵</span>
                <span className="text-[#2196F3]">
                  {" "}
                  تاریخ : {props?.insertDate}
                </span>
              </div>
            </div>
          </div>
          <div className="image  w-[500px] h-[400px] max-xxl:hidden relative left-[67%] ">
            <img
              className="h-[400px] rounded-3xl"
              src={props?.currentImageAddress}
              alt="image"
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHeader;
