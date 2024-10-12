import http from "../../../../interceptor/Interseptor";

const getFiltertecnology = async() => {
    try{
        console.log("fetching started ...");

        const result = await http.get("/Home/GetTechnologies" );

        return result;
    }catch(error){
        console.log(error);
        return[];
    }
};

export {getFiltertecnology};