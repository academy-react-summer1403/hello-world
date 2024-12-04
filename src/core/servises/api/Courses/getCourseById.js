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
export const ArchiveCourseAPI = async (obj) => {

  try {
    const result = await http.post("/Course/AddCourseFavorite", obj);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const DeleteArchiveCourseAPI = async (obj) => {
  try {
    const result = await http.delete("/Course/DeleteCourseFavorite", {
      data: obj,
    });
    return result;
  } catch (error) {
    console.log(error);
  }

};
export const LikeCourseAPI = async (params) => {
  try {
    const result = await http.post(`/Course/AddCourseLike?CourseId=${params.id}`);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const DeleteLikeCourseAPI = async (obj) => {
  try {
    const result = await http.delete("/Course/DeleteCourseLike", {
      data: obj,
    });
    console.log(result , "Successfully deleted")
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const DissLikeCourseAPI = async (params) => {
  try {
    const result = await http.post(`/Course/AddCourseDissLike?CourseId=${params.id}`);
    console.log(result , "Successfully added")
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};