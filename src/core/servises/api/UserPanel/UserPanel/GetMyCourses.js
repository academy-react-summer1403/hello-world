import http from "../../../interceptor/Interseptor";

export const GetCourses = async () => {
  try {
    const response = await http.get(
      "/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate&Query="
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
