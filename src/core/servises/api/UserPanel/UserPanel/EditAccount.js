import http from "../../../interceptor/Interseptor";

const EditAccount = async (obj) => {

  const formData = new FormData();
  formData.append("Lname", obj.LName);
  formData.append("Fname", obj.FName);
  formData.append("NationalCode", obj.NationalCode);
  formData.append("BirthDay", obj.BirthDay);
  formData.append("UserAbout", obj.UserAbout);
  formData.append("HomeAdderess", obj.HomeAdderess);
  formData.append("LinkdinProfile", obj.LinkdinProfile);
  formData.append("TelegramLink", obj.TelegramLink);
  formData.append("ReceiveMessageEvent", obj.ReceiveMessageEvent);
  formData.append("Gender", obj.Gender);
  formData.append("Latitude", obj.Latitude);
  formData.append("Longitude", obj.Longitude);

  try {
    const result = await http.put("/SharePanel/UpdateProfileInfo", formData);
  } catch (error) {
    console.log(error);
  }
};

export default EditAccount;
