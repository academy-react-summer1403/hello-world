/* eslint-disable react/prop-types */
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { faNumber } from "../../../Core/Utils/FaNumber";
import { LiaShareAltSolid } from "react-icons/lia";
import { RiInstagramFill } from "react-icons/ri";
import { SlSocialFacebook } from "react-icons/sl";
import { LiaTelegram } from "react-icons/lia";

const NewsContent = (props) => {
  return (
    <div className="bg-white2 ">
      <div className="  flex justify-center  ">
        <div className="w-[900px]  h-[550px]  mt-[25px]">
          <h1 className='text-right  font-["YekanBakhBold"] text-[30px] text-grayy'>
            {" "}
            {props?.googleTitle}
          </h1>
          <p className='text-right  font-["YekanBakh"] text-[15px] text-gray4  leading-[40px] '>
            {props?.describe}
          </p>
          <div className="leading-[40px]">
            <h1 className="text-center">توصیه های قبل کار</h1>
            <p className='text-right  font-["YekanBakhBold"] text-[20px] text-grayy  '>
              {" "}
              افزایش انرژی: کافئین به‌عنوان یک محرک عصبی عمل می‌کند و با ورود به
              جریان خون، کافئین به مغز می‌رود و سیستم عصب مرکزی را تحریک می‌کند.
              این احتشام ممکن است احساس افزایش انرژی و کاهش خستگی را در شما به
              ارمغان بیاورد{" "}
            </p>
            <p className='text-right  font-["YekanBakhBold"] text-[20px] text-grayy '>
              {" "}
              افزایش هوشیاری: مصرف قهوه می‌تواند تمرکز و هوشیاری شمارا بهبود
              بخشد. کافئین می‌تواند عملکرد مغزی را بهبود دهد و به شما کمک کند در
              موقعیت‌های مختلف ازجمله مطالعه، کار، و مذاکره بهتر عمل کنید{" "}
            </p>
            <p className='text-right  font-["YekanBakhBold"] text-[20px] text-grayy '>
              {" "}
              افزایش سطح انرژی بدن: کافئین می‌تواند به افزایش سطح هورمون‌هایی
              مانند اپینفرین (آدرنالین) کمک کند. این هورمون‌ها به تنظیم مقدار
              قند خون و افزایش فعالیت قلب و عروق کمک می‌کنند، که نتیجه آن افزایش
              انرژی و تحرک در بدن است
            </p>
          </div>
        </div>
      </div>

      <div className="  flex justify-center  ">
        <div className="w-[850px] h-[400px] mt-[20px] rounded-xl ">
          {" "}
          <img src={props?.currentImageAddress} alt="aks4" />{" "}
        </div>
      </div>

      <div className="  flex justify-center  ">
        <div className="w-[800px]  h-[100px]  mt-[100px] ">
          <p className='text-right  font-["YekanBakh"] text-[15px] text-grayy '>
            {" "}
            این مثال برای آموزش از روی کتاب بود ولی برای ویدئو یا پادکست یا هر
            آنچه که میتوانید از آن مطلبی یاد بگیرید هم صدق میکند. شما در مثال
            بالا با هر بار از نو آموزش دیدن، هم مطلب را مرور میکنید و هم نکته
            هایی مهم که در طول آموزش متوجه نشده بودین را متوجه میشوید و این اصل
            قضیه است.
          </p>
          <p className='text-right  font-["YekanBakh"] text-[15px] text-grayy leading-[40px]  '>
            {" "}
            .امیدوارم مقاله مفیدی برای شما واقع بوده باشه
          </p>
        </div>
      </div>
      <div className=" h-16 flex justify-center  items-center ">
        <div className="flex justify-end items-center rounded-2xl bg-slate-100 pr-5">
          <div className="flex justify-start items-center ml-3 gap-4">
            <div>
              <RiInstagramFill />
            </div>
            <div>
              <SlSocialFacebook />
            </div>
            <div>
              <LiaTelegram />
            </div>
          </div>
          <div className="flex justify-end items-center  w-[820px] h-16">
            <span className="w-[75px] h-[25px] text-base ">اشتراک گزاری</span>{" "}
            <LiaShareAltSolid className="w-[20px] h-[20px] ml-2" />
          </div>
        </div>
      </div>
      <div className="h-12 flex justify-center  items-center gap-32 mt-3">
        <div className=" flex w-[361px] h-12 justify-end items-center gap-2">
          <div className="flex justify-end items-center gap-4">
            <div className="flex justify-center items-center w-20 h-11 rounded-3xl bg-slate-100">
              <span className="text-xl">{props?.currentDissLikeCount}</span>
              <AiOutlineDislike className="w-6 h-6 ml-2" />
            </div>
            <div className="flex justify-center items-center w-20 h-11 rounded-3xl bg-slate-100">
              <span className="text-xl">{props?.currentLikeCount}</span>
              <AiOutlineLike className="w-6 h-6 ml-2" />
            </div>
          </div>
          <span>آیا از این مقاله راضی بودید؟</span>
        </div>
        <div className=" flex justify-start items-center flex-nowrap flex-row-reverse gap-4 w-80 h-8 ">
          <div>
            <Stack >
              <Rating name="size-medium" value={props?.currentRate} />
            </Stack>
          </div>
          <div>
            <span className="text-xs ">امتیاز 20 نفر</span>
          </div>
          <div className="w-20 h-8 bg-[#2196F3] border rounded-full text-[#ffff] text-center pt-2 text-xs ">
            ثبت دیدگاه{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsContent;
