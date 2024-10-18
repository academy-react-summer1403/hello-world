import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Description from "./Description";
import Preview from "./Preview";
import Comment from "./Comment";
import { useEffect, useState } from "react";
import { getComment } from "@core/servises/api/Courses/Course";
const TabBox = ({ id }) => {
  const [comment, setComment] = useState([]);

  const getComments = async (id) => {
    const coments = await getComment(id);
    console.log("coments:", coments);
    setComment(coments);
  };

  useEffect(() => {
    getComments(id);
  }, []);

  return (
    <div className="w-full  flex justify-center  flex-wrap mt-[30px] ">
      <div className="w-[1150px] flex justify-end flex-wrap   bg-white shadow-lg rounded-[20px] ">
        <Tabs defaultIndex={2} className="pb-5">
          <TabList className="flex justify-end flex-wrap mb-5">
            <Tab className="w-[90px] h-10 text-center border-b-[3px] mt-2 border-[#607D8B] mr-8 text-[#607D8B] hover:cursor-pointer">
              نظرات کاربران
            </Tab>
            <Tab className="w-[90px] h-10 text-center border-b-[3px] mt-2 border-[#607D8B] mr-8 text-[#607D8B] hover:cursor-pointer">
              پیش‌نمایش‌ها
            </Tab>
            <Tab className="w-[90px] h-10 text-center border-b-[3px] mt-2 border-[#607D8B] mr-8 text-[#607D8B] hover:cursor-pointer">
              توضیحات
            </Tab>
          </TabList>
          <TabPanel className="flex justify-center mr-9 flex-wrap">
            <div className="  relative w-[820px] h-[900px]">
              <input
                className="Search w-[800px] h-[150px]  border  border-[#e2e8f0] mt-[20px] text-right rounded-3xl bg-white font-[YekanBakh] text-[20px] m-auto absolute right-0 "
                type="search"
                placeholder="...نظر خودتو بنویس "
              ></input>
              <div className="w-[100px] h-[50px] bg-bluee absolute top-[180px] right-[330px] rounded-3xl ">
                <span className="font-[YekanBakhBold] text-[20px] text-white absolute top-[10px] right-[30px] ">
                  {" "}
                  ارسال{" "}
                </span>
              </div>
              <div className="absolute top-[280px] right-0">
                {comment?.map((item, index) => {
                  console.log("item:", item);
                  return (
                    <Comment
                      key={index}
                      id={item?.id}
                      courseId={item?.courseId}
                      author={item?.author}
                      insertDate={item?.insertDate}
                      title={item?.title}
                      describe={item?.describe}
                      pictureAddress={item?.pictureAddress}
                    />
                  );
                })}
              </div>
            </div>
          </TabPanel>

          <TabPanel className="dv1   flex  justify-center mr-9 flex-wrap pt-5 ">
            <Preview />
          </TabPanel>

          <TabPanel className="flex justify-center mr-9 flex-wrap ">
            <Description />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default TabBox;
