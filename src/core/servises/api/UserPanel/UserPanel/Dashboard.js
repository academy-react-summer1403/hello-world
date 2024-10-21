import http from "../../../interceptor/Interseptor";

export const getUserDashboard = async () => {
  try {
    const result = await http.get("/SharePanel/GetProfileInfo");

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
