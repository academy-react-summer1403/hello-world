import http from "@core/servises/interceptor/Interseptor";
const ReserveCourseByUser = async (obj) => {
  try {
    if (localStorage.getItem("token")) {
      const result = await http.post("/CourseReserve/ReserveAdd", obj);
    }
  } catch (error) {
    // console.log(error);
    alert("Please enter");
  }
};

export default ReserveCourseByUser;
