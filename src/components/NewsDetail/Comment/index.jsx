// import aks5 from "../../../assets/Images/BlogDetails/Sign in Course.png";
import img from "@assets/images/News/1215b2106df963d9ff66fbc22f9cf44c.jpg";
import { Button } from "@mui/material";

const Comments = () => {
  return (
    <div className="">
      <div className="  flex justify-center  ">
        <div className="w-[900px] h-[891px] overflow-y-scroll mt-[25px] mb-[50px]  rounded-[20px] shadow-2xl  ">
          <h1 className='text-center font-["YekanBakhBold"] text-2xl text-grayy  mt-[20px]   '>
            {" "}
            نظر کاربران درباره این مقاله{" "}
          </h1>
          <input
            className=" flex Search w-[800px] h-[100px] shadow-md mt-[20px] text-right rounded-3xl bg-white font-[YekanBakhBold] text-[20px] m-auto  right-[50px] "
            type="search"
            placeholder="نظر خودتو بنویس..."
          ></input>
          <div className=" flex justify-center mt-4">
            <Button variant="contained" size="large" className="w-20 h-12 rounded-[30px]">
              ارسال
            </Button>
          </div>
          <div className="flex justify-center mt-2 ">
            <div className="w-[780px] shadow-2xl rounded-xl ">
              <div className=" flex justify-end items-center gap-3 ">
                <span>محمد زمانی</span>
                <img className="h-8 w-8 rounded-3xl" src={img} alt="" />
              </div>
              <div className=" flex justify-end">
                <span className=" text-sm text-right mt-3">
                  .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون
                </span>
              </div>
              <div className=" flex justify-end mt-3 shadow-md">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
