import http from "../../../interceptor/Interseptor";

export const MyFavoriteNews = async () => {
  try {
    const response = await http.get(
      "/SharePanel/GetMyFavoriteNews"
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
