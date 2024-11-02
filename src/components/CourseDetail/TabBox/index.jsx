import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Description from "./Description";
import Preview from "./Preview";
import Comment from "./Comment";
import { useEffect, useState } from "react";
import { getComment } from "@core/servises/api/Courses/Course";
import { Form, Formik, Field } from "formik";
import { useParams } from "react-router-dom";
import { addcomment } from "@core/servises/api/Courses/Course";

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

  const addcm = async (value) => {
    // const { id } = useParams();

    const addComent = {
      CourseId: id,
      Title: value.title,
      Describe: value.describe,
    };
    console.log("comentListt", addComent);

    const data = new FormData();
    const keys = Object.keys(addComent);
    keys.forEach((key) => {
      const item = addComent[key];
      data.append(key, item);
    });
    const coments = await addcomment(data);

    console.log(coments);
    // console.log("submit", submit);
  };

  return (
    <div className="w-full  flex justify-center  flex-wrap mt-[30px]  max-cc:pt-12  max-ff:w-[90%] overflow-x-visible max-ss:overflow-x-scroll ">
      <div className="w-[1200px] flex justify-end flex-wrap   bg-white shadow-lg rounded-[20px]  dark:bg-[#111827]">
        <Tabs defaultIndex={2} className="dark:bg-[#111827] pb-5    ">
          <TabList className="flex justify-end flex-wrap mb-5">
            <Tab className="w-[90px] h-10 text-center border-b-[3px] mt-2 border-[#607D8B] mr-8 text-[#607D8B] hover:cursor-pointer ">
              نظرات کاربران
            </Tab>
            <Tab className="w-[90px] h-10 text-center border-b-[3px] mt-2 border-[#607D8B] mr-8 text-[#607D8B] hover:cursor-pointer">
              پیش‌نمایش‌ها
            </Tab>
            <Tab className="w-[90px] h-10 text-center border-b-[3px] mt-2 border-[#607D8B] mr-8 text-[#607D8B] hover:cursor-pointer">
              توضیحات
            </Tab>
          </TabList>
          <TabPanel className="flex justify-center mr-9 flex-wrap max-h-[500px] overflow-hidden overflow-y-scroll  ">
            <div className="  relative w-[820px] ">
              <div>
                <Formik
                  initialValues={{ title: "", describe: "" }}
                  onSubmit={(value) => addcm(value)}
                >
                  <Form className="w-full">
                    <div className="w-full">
                      <div className="relative">
                        <div className=" text-start flex flex-wrap gap-y-2 border border-[#cdd5de] rounded-lg  shadow-md">
                          <Field
                            dir="rtl"
                            as="textarea"
                            name="title"
                            placeholder="عنوان "
                            className="relative border-b w-[100%] h-[50px] pr-12 "
                          />

                          <Field
                            dir="rtl"
                            as="textarea"
                            id="describe"
                            name="describe"
                            className="commentFormTextarea w-[500px] h-[100px] "
                            placeholder="نظر خودتو بنویس..."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-[60px] h-[40px] bg-bluee mt-2 rounded-[50px]  ">
                      <button
                        type="submit"
                        className="font-[YekanBakh] relative top-2 left-3.5 text-[15px] text-white mx-auto  "
                      >
                        ارسال{" "}
                      </button>
                    </div>
                  </Form>
                </Formik>
              </div>
              <div className=" flex flex-wrap justify-center ">
                {comment?.map((item, index) => {
                  console.log("item:", item);
                  return (
                    <Comment
                      key={index}
                      id={item?.id}
                      courseId={item?.courseId}
                      CommentId={item?.id}
                      author={item?.author}
                      insertDate={item?.insertDate}
                      title={item?.title}
                      describe={item?.describe}
                      pictureAddress={item?.pictureAddress}
                      likeCount={item?.likeCount}
                    />
                  );
                })}
                ;
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
