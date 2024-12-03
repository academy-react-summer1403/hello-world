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

export default ChangePasswordAPI;
