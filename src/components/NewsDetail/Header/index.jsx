// import aks from "../../../assets/Images/BlogDetails/Rectangle 34.png";
// import aks2 from "../../../assets/Images/BlogDetails/view and date.png";
// import aks3 from "../../../assets/Images/BlogDetails/Teacher.png";

const NewsHeader = () => {
  return (
    <div className="bg-white2 ">
      <div className="flex justify-center ">
        <div className="flex gap-[15px]  w-[1400px] h-[400px] mt-[30px]  relative  ">
          <div className="text w-[900px] [h-400px] absolute max-xxl:right-0">
            <h1 className='text-right  font-["YekanBakhBold"] text-[30px] text-grayy  '>
              {" "}
              .چگونه مطالعه موثر را برای شما آسانتر کنیم
            </h1>
            <p className='text-right  font-["YekanBakh"] text-[15px] text-gray4 leading-[50px]  '>
              {" "}
              همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع خاص
              مثل آموزش از کتاب، ویدئو یا هر آنچه که برای آموزش است نخواهد بود و
              این مقاله به صورت جامع در مورد چگونگی آموزش دیدن و یادگیری
              است.همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع
              خاص مثل آموزش از کتاب، ویدئو یا هر آنچه که همانطور که از عنوان
              مقاله مشخص است، صحبت ما روی آموزش دیدن و یادگیری است.همانطور که از
              عنوان مقاله. قبل از هر چیزی باید بدانیم که نمیشه یک روند یا روش
              خاصی رو برای همه افراد که ذهنیت های متفاوتی هم از هم دارند، در نظر
              گرفت. ولی خب هدف تمامی این افراد آموزش دیدن و رسیدن به درک عمیقی
              از اون مطلب است ولی آیا برای تمامی افراد آموزش دیدن به این جا ختم
              میشود و همه به درک عمیقی از اون مطلب میرسند؟ قطعا خیر
            </p>
            <div className="relative">
              <img
                className="absolute right-[20px]  top-[50px] "
                src={"aks2"}
                alt="image"
              />{" "}
            </div>
            <div className="relative ">
              <img
                className="absolute left-[-30px] top-[-30px]"
                src={"aks3"}
                alt="image"
              />{" "}
            </div>
          </div>
          <div className="image  w-[500px] h-[400px] max-xxl:hidden relative left-[67%] ">
            <img className="h-[400px]" src={"aks"} alt="image" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHeader;
