import http from "../../../interceptor/Interseptor";

export const getCourseList = async (count) => {
  try {
    console.log("fetching started...");

    const result = await http.get(
      "/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&Tech",
      { params: count }
    );

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
