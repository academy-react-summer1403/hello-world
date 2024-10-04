import http from "../../../interceptor/Interseptor";

export const getReport = async (count) => {
  try {
    const result = await http.get("/Home/LandingReport");

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
