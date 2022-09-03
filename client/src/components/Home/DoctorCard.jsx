import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { GoLocation, GoVerified } from "react-icons/go";
import { FaMoneyBill } from "react-icons/fa";

const DoctorCard = () => {
  return (
    <div className="doctor-card-wrapper">
      <div className="doctor-card-image-wrapper">
        <img
          className="img-fluid"
          src="https://template.doccure.io/html/template2/assets/img/doctors/doctor-05.jpg"
          alt="doctor-image"
        />
      </div>
      <div className="doctor-card-content-wrapper">
        <div className="doctor-card-name">
          Dr. John Doe
          <span>
            <GoVerified />
          </span>
        </div>
        <div className="doctor-card-speciality">Neurology</div>
        <div className="doctor-card-rating">
          <AiFillStar className="star-icon" />
          <AiFillStar className="star-icon" />
          <AiFillStar className="star-icon" />
          <AiFillStar className="star-icon" />
          <AiOutlineStar className="star-icon" />
          <span>(64)</span>
        </div>
        <div className="doctor-card-address">
          <div>
            <GoLocation /> <span>Michigan, USA</span>
          </div>
          <div>
            <FaMoneyBill /> <span>$150 - $250</span>
          </div>
        </div>
        <div className="doctor-card-price"></div>
      </div>
      <div className="doctor-card-btn-group">
        <div className="doctor-card-btn">View Profile</div>
        <div className="doctor-card-btn">Book Appointment</div>
      </div>
    </div>
  );
};

export default DoctorCard;
