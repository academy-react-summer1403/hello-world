import http from "../../../interceptor/Interseptor";

const CourseReserve = async () => {
  try {
    const result = await http.get("/SharePanel/GetMyCoursesReserve");

    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default CourseReserve;
