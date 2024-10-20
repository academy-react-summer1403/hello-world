import http from "@core/servises/interceptor/Interseptor"

export const forgetPass = async (obj) => {
    try {
      const response = await http.post(`/Sign/ForgetPassword`, obj);
  
      return response;
    } catch (error) {
      return false;
    }
  };



  export const resetConfirm = async (ConfigValue) => {
    try {
      //console.log("Fetching started...");
      const result = await http.get(`Sign/Reset/${ConfigValue}`);
  
      return result;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  export const resetPass = async (value) => {
    try {
      const response = await http.post("/Sign/Reset", value);
  
      return response;
    } catch (error) {
      return false;
    }
  };