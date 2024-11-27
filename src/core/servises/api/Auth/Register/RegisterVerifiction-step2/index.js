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
  console.log("verifay", obj, code);

  try {
    const result = await http.post(`/Sign/LoginTwoStep?VrifyCode=${code}`, obj);
    
    console.log("resasjhab", result);

    // alert("تایید انجام شد  ");
    return result;
  } catch (error) {
    if (error.response.status == 400) {
      alert("کد صحیح نمیباشد");
    }

    return Promise.reject(error);
  }
};
