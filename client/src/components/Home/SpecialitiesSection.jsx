import React from "react";
import DoctorCard from "./DoctorCard";
import { Container, Row, Col } from "react-bootstrap";

const SpecialitiesSection = () => {
  return (
    <div className="specialities-section-wrapper">
      <div className="specialities-title">Doctors</div>
      <div className="specialities-navbar">
        <div className="specialities-navbar-item specialities-active">All </div>
        <div className="specialities-navbar-item">Neurology </div>
        <div className="specialities-navbar-item">Orthopedic </div>
        <div className="specialities-navbar-item">Cardiologist </div>
        <div className="specialities-navbar-item">Dentist </div>
      </div>
      <div className="specialities-cards-wrapper">
        <Container fluid>
          <Row>
            <Col xs="12" sm="6" md="3">
              <DoctorCard />
            </Col>
            <Col xs="12" sm="6" md="3">
              <DoctorCard />
            </Col>
            <Col xs="12" sm="6" md="3">
              <DoctorCard />
            </Col>
            <Col xs="12" sm="6" md="3">
              <DoctorCard />
            </Col>
          </Row>
        </Container>
        <div className="home-btn">See more</div>
      </div>
    </div>
  );
};

export default SpecialitiesSection;
