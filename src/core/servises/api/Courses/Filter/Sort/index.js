import http from "../../../../interceptor/Interseptor";

const getFilterlevel = async() => {
    try{
        console.log("fetching started ...");

        const result = await http.get("/CourseLevel/GetAllCourseLevel" );

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getFilterlevel};