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

export const getComment = async (id) => {
  try {
    //console.log("Fetching started...");

    const result = await http.get(`/Course/GetCourseCommnets/${id}`);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
