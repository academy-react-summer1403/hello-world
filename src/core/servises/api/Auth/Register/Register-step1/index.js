import http from "../../../../interceptor/Interseptor.js";

const registerAPI = async (obj) => {
  try {
    const result = await http.post("/Sign/SendVerifyMessage", obj);
    return result

  } catch (error) {
    console.log(error);
  }
};

export default registerAPI;