import React from "react";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { FiActivity } from "react-icons/fi";
import { Container, Row, Col } from "react-bootstrap";
import "./DoctorCard.css";
// import BookModal from "../BookModal";

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  const bookDoctor = (event) => {
    event.preventDefault();
    navigate(`/book/${doctor.id}`);
  };

  return (
    <Container className="doctor-card">
      <Row className="flex">
        <Col xs={5} md={2}>
          <div className="doctorCard-image-container">
            <img src={doctor.image} alt="doctor" className="doctor-image" />
          </div>
        </Col>
        <Col xs={7} md={8}>
          <div className="back">
            <h3>
              Dr. {doctor.name} {doctor.surname}
            </h3>
            <div className="doctorCard-doctor-specialty">
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
        </Col>
        <Col xs={12} md={2}>
          <div>
            <button
              className="gray-btn"
              onClick={() => navigate("/doctor/" + doctor._id)}
            >
              View profile
            </button>
            <button
              className="blue-btn"
              onClick={() => navigate("/doctor/" + doctor._id)}
            >
              Book now
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DoctorCard;
