import { Result } from "postcss";
import http from "../../../interceptor/Interseptor";
const ChangePasswordAPI = async () => {
  try {
    const result = await http.post(`/SharePanel/ChangePassword`);
    return result;
  } catch (error) {
    console.log(Error);
  }
};

export default ChangePasswordAPI;
