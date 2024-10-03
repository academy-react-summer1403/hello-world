import Http from "../../interceptor/Interseptor";
const loginAPI = async (obj) => {
  try {
    const result = await Http.post(`/Sign/Login`, obj);
    console.log("result:", result.token);
    localStorage.setItem("token", result.token);
    return result.token;
  } catch (error) {
    console.log(Error);
  }
};
export default loginAPI;
