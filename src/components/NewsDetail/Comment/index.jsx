// import aks5 from "../../../assets/Images/BlogDetails/Sign in Course.png";

const Comments = () => {
  return (
    <div className="bg-white2 ">
      <div className="  flex justify-center  ">
        <div className="w-[900px]  h-[900px]  mt-[25px] mb-[50px]  relative bg-white rounded-[20px] shadow[0px_0px_50px_0px_graylight] ">
          <h1 className='text-center font-["YekanBakhBold"] text-[40px] text-grayy  mt-[20px]   '>
            {" "}
            نظر کاربران درباره این مقاله{" "}
          </h1>
          <input
            className="Search w-[800px] h-[100px]  border-solid border-2 border-graylight-500 mt-[20px] text-right rounded-3xl bg-white font-[YekanBakhBold] text-[20px] m-auto absolute right-[50px] "
            type="search"
            placeholder="... نظرتو بگو "
          ></input>
          <div className="w-[200px] h-[200px] bg-bluee absolute top-[190px] right-[300px] ">
            <img src={""} alt="image" />
          </div>
          <div className="absolute top-[280px] right-[50px] "></div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
