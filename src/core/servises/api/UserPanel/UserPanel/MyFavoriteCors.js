import http from "../../../interceptor/Interseptor";

export const MyFavoriteCors = async () => {
  try {
    const response = await http.get(
      "/SharePanel/GetMyFavoriteCourses"
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
