import http from "@core/servises/interceptor/Interseptor";

export const getCourseById = async (id) => {
  try {
    //console.log("Fetching started...");

    const result = await http.get(`/Home/GetCourseDetails?CourseId=${id}`);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};
