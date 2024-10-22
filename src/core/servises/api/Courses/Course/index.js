import http from "../../../interceptor/Interseptor";

export const getCourseList = async (count) => {
  try {
    console.log("fetching started...");

    const result = await http.get(
      "/Home/GetCoursesWithPagination?SortingCol=Active&SortType=DESC&TechCount=0",
      { params: count }
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

export const getReplyComment = async (courseId, commentId) => {
  try {
    const response = await http.get(
      `/Course/GetCourseReplyCommnets/${courseId}/${commentId}`
    );

    return response.data;
  } catch (error) {
    return false;
  }
};

export const addReplyComment = async (a) => {
  try {
    console.log("Fetching started...");
    const result = await http.post("/Course/AddReplyCourseComment", a);
    //console.log(result);

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};