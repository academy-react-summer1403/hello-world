import http from "../../../../interceptor/Interseptor.js";

const codeAPI = async (object) => {
  try {
    const res = await http.post("/Sign/VerifyMessage", object);
    // alert("تایید انجام شد  ");
  } catch (error) {
    if (error.response.status == 400) {
      alert("کد صحیح نمیباشد");
    }

    return Promise.reject(error);
  }
};

export default codeAPI;