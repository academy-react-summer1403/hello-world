import http from "../../../interceptor/Interseptor";

export const getCourseList = async (params) => {
  try {
    console.log("fetching started...");

    const result = await http.get(
      "/Home/GetCoursesWithPagination?PageNumber=2&SortingCol=Active&SortType=DESC&TechCount=0",
      { params: params }
    );

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
