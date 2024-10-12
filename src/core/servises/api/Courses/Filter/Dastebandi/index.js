import http from "../../../../interceptor/Interseptor";

const getFiltercourse = async() => {
    try{
        console.log("fetching started ...");

        const result = await http.get("/CourseType/GetCourseTypes" );

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getFiltercourse};