import React from "react";


import { Container, Row, Col } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

const DoctorInfo = ({ doctor }) => {
  return (
    <Container className="doctor-info">
      <Row>
        <Col xs={12} md={5}>
          <img src={doctor.image} alt="doctor" className="doctor-info-image" />
        </Col>
        <Col xs={12} md={7}>
          <div className="doctor-info-content">
            <h3>
              Dr. {doctor.name} {doctor.surname}
            </h3>
            <div className="doctor-rating">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <span>(64)</span>
            </div>
            <div className="doctor-specialization">{doctor.specialization}</div>

            <div className="doctor-contact-container">
              <div className="doctor-contact-item">
                <MdAlternateEmail />
                <span> {doctor.email}</span>
              </div>
              <div className="doctor-contact-item">
                <BsBuilding />
                <span> {doctor.country}</span>
              </div>
              <div className="doctorCard-additional-images">
                <img src="/images/doctor-avatar.jpg" alt="" />
                <img src="/images/doctor-avatar.jpg" alt="" />
                <img src="/images/doctor-avatar.jpg" alt="" />
                <img src="/images/doctor-avatar.jpg" alt="" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DoctorInfo;
