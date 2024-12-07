import React, { useEffect, useState } from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { FcPaid } from "react-icons/fc";
import { FaRegEye } from "react-icons/fa";
import Pic from "../../../../../../assets/Images/Profile/items.png";
import { Box, Modal } from "@mui/material";
import PaymentModal from "@components/UserPanel/Content/payment/PaymentModal";
import { GetCourses } from "@core/servises/api/UserPanel/UserPanel/GetMyCourses";
// import { GetCourses } from "../../../../../../Core/Services/Api/UserPanel/GetMyCourses";
import noImage from "@assets/images/Landing/Courses/noImage.jpg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Items = ({
  tumbImageAddress,
  courseTitle,
  termName,
  paymentStatus,
  fullName,
  cost,
  courseId,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    GetCourses();
  }, []);

  return (
    <div className="w-[100%] h-[55px] hover:bg-[#e5e0ff] transition-[0.1s] rounded-[7px] mb-2 flex justify-center flex-wrap">
      <div className="w-1/6 h-full flex justify-start gap-3 pl-10 flex-wrap text-[#36343f] text-center pt-[17px]">
        <button
          onClick={handleOpen}
          className="w-[27px] h-full flex justify-center"
        >
          <FcPaid className="w-7 h-7 mt-[-2.7px] " />
        </button>
        {open && (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <PaymentModal
                cost={cost}
                id={courseId}
                name={courseTitle}
                handleClose={handleClose}
              />
            </Box>
          </Modal>
        )}
        <button className="w-[27px] h-full flex justify-center">
          <MdOutlineDeleteSweep className="w-7 h-7 mt-[-2.7px] text-[#f9314b]" />
        </button>
        <button className="w-[27px] h-full flex justify-center">
          <FaRegEye className="w-6 h-6 mt-[-1px] text-[#8680ca]" />
        </button>
      </div>
      <div className="w-1/6 h-full text-[#36343f] myFont text-center pt-[17px]">
        {paymentStatus}
      </div>
      <div className="w-1/6 h-full text-[#36343f] myFont text-center pl-5 pt-[17px]">
        {termName}
      </div>
      <div className="w-1/6 h-full text-[15px] myFont text-[#36343f] text-center pl-10 flex items-center justify-center">
        {" "}
        {fullName}
      </div>
      <div className="w-1/6 h-full myFont text-[#36343f] text-center pl-10 flex items-center justify-center">
        {courseTitle}
      </div>
      <div className="w-1/6 h-full text-[#36343f] text-center pl-16 pt-[7px]">
        <img
          className="w-[60px] rounded-[10px] h-[40px]"
          src={tumbImageAddress ? tumbImageAddress : noImage}
          alt="photo"
        />
      </div>
    </div>
  );
};

export default Items;
