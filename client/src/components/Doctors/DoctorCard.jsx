import React from "react";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { FiActivity } from "react-icons/fi";
import "./DoctorCard.css";
// import BookModal from "../BookModal";

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  // const bookDoctor = (event) => {
  //   event.preventDefault();
  //   navigate(`/book/${doctor.id}`);
  // };

  return (
    <div className="doctorCard-wrapper">
      <div className="doctorCard-image-container">
        <img src={doctor.image} alt="doctor" className="doctor-image" />
      </div>
      <div className="doctorCard-info-container">
        <h3 className="doctorCard-doctor-name">
          Dr. {doctor.name} {doctor.surname}
        </h3>
        <div className="doctorCard-doctor-specialty">
          {" "}
          <FiActivity /> {doctor.specialization}
        </div>

        <div className="doctorCard-rating">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar /> <span>(64)</span>
        </div>

        <div className="doctorCard-additional-images">
          <img src="/images/doctor-avatar.jpg" alt="" />
          <img src="/images/doctor-avatar.jpg" alt="" />
          <img src="/images/doctor-avatar.jpg" alt="" />
          <img src="/images/doctor-avatar.jpg" alt="" />
        </div>
      </div>
      <div className="doctorCard-right">
        <button
          className="doctorCard-btn"
          onClick={() => navigate("/doctor/" + doctor._id)}
        >
          View profile
        </button>
        <button
          className="doctorCard-btn"
          onClick={() => navigate("/doctor/" + doctor._id)}
        >
          Book now
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
