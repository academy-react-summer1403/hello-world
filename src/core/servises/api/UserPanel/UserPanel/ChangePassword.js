import { Result } from "postcss";
import http from "../../../interceptor/Interseptor";
const ChangePasswordAPI = async (obj) => {
  try {
    const result = await http.post(`/SharePanel/ChangePassword`, obj);
    return result;
  } catch (error) {
    console.log(Error);
  }
};
export const getSecurityInfo = async () => {
  try {
    const response = await http.get("/SharePanel/GetSecurityInfo");

    return response;
  } catch (error) {
    return false;
  }
};

export const setTwoStepAuth = async (data) => {
  try {
    const response = await http.put(`/SharePanel/EditSecurity`, data);
    console.log("rspanssss:", response);
    
    return response;
  } catch (error) {
    return false;
  }
};

export default ChangePasswordAPI;

