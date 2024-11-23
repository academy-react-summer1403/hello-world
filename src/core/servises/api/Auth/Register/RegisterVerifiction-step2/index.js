import http from "../../../../interceptor/Interseptor.js";

const codeAPI = async (obj) => {
  try {
    const result = await http.post("/Sign/VerifyMessage", obj);
    alert("تایید انجام شد  ");
    return result;
  } catch (error) {
    if (error.response.status == 400) {
      alert("کد صحیح نمیباشد");
    }

    return Promise.reject(error);
  }
};

export default codeAPI;

export const VrifyCode = async (obj, code) => {
  try {
    const result = await http.post(`/Sign/LoginTwoStep`, obj, {
      headers: {
        VrifyCode: code,
      },
    });
    console.log("resasjhab", result);

    alert("تایید انجام شد  ");
    return result;
  } catch (error) {
    if (error.response.status == 400) {
      alert("کد صحیح نمیباشد");
    }

    return Promise.reject(error);
  }
};
