import Http from "../../../../interceptor/Interseptor";

const Creataccount = async (obj) => {
  console.log("ddd", obj);
  
  try {
    const result = await Http.post("/Sign/Register", obj);
  } catch (error) {
    console.log(error);
  }
};

export default Creataccount;
