import http from "../../../../interceptor/Interseptor.js";

const registerAPI = async (obj) => {
  try {
    const result = await http.post("/Sign/SendVerifyMessage", obj);
  } catch (error) {
    console.log(error);
  }
};

export default registerAPI;