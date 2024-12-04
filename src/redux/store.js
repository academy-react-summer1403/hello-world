import { configureStore } from "@reduxjs/toolkit";
import reservCourse from "./reserved-courses";
import userProfil from "./userProfil";

const store = configureStore({
  reducer: {
    reservCourse,
    userProfil,
  },
});

export default store;
