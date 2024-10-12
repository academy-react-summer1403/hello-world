import http from "../../../../interceptor/Interseptor";

const getFilterteacher = async() => {
    try{
        console.log("fetching started ...");

        const result = await http.get("/Home/GetTeachers" );

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getFilterteacher};