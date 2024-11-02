import http from "../../../interceptor/Interseptor";

export const getCourseList = async (params) => {
  try {
    console.log("fetching started...");
    const result = await http.get(
      "/Home/GetCoursesWithPagination?SortingCol=Active&TechCount=0",
      { params: params }
    );

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const addcomment = async (data) => {
  try {
    const result = await http.post("/Course/AddCommentCourse", data);
    //console.log(result);

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
    const result = await http.get(
      `/Course/GetCourseReplyCommnets/${courseId}/${commentId}`
    );

    return result;
  } catch (error) {
    return false;
  }
};

export const addReplyComment = async (a) => {
  try {
    const result = await http.post("/Course/AddReplyCourseComment", a);
    //console.log(result);

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
