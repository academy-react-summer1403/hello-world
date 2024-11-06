import React from "react";
import { Form, Formik, Field } from "formik";
import { addReplyComment } from "@core/servises/api/News";

const AddReply = ({ setIsReplyComment, parentId, newsId }) => {
  const replyCm = async (value) => {
    const comentListt = {
      parentId: parentId,
      newsId: newsId,
      Title: value.title,
      Describe: value.describe,
    };
    console.log("comentListt", comentListt);

    const data = new FormData();
    const keys = Object.keys(comentListt);
    keys.forEach((key) => {
      const item = comentListt[key];
      data.append(key, item);
    });
    const coments = await addReplyComment(data);

    console.log(coments);
    console.log("submit", submit);
  };
  return (
    <div
      className=" "
      onClick={() => {
        setIsReplyComment(true);
      }}
    >
      <Formik
        initialValues={{ title: "", describe: "" }}
        onSubmit={(value) => replyCm(value)}
      >
        <Form className="w-full">
          <div className="w-full">
            <div className="relative">
              <div className=" text-start flex flex-wrap gap-y-2 border dark:bg-[#1a1a2e] dark:border-[#cdd5dea8] border-[#cdd5de] rounded-lg  shadow-md">
                <Field
                  dir="rtl"
                  as="textarea"
                  name="title"
                  placeholder="عنوان "
                  className="relative border-b w-[100%] h-[50px] pr-12 dark:bg-[#1a1a2e]"
                />

                <Field
                  dir="rtl"
                  as="textarea"
                  id="describe"
                  name="describe"
                  className="commentFormTextarea w-[500px] h-[100px] dark:bg-[#1a1a2e] "
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
  );
};

export default AddReply;