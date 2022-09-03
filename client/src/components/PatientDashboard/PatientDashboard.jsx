import React from "react";
import "./PatientDashboard.css";

import Header from "../Header";
import { Container, Row, Col } from "react-bootstrap";
import Appointments from "../Appointments/Appointments";

const PatientDashboard = () => {
  return (
    <div className="patient-dashboard-wrapper">
      <Appointments />
    </div>
  );
};

export default PatientDashboard;
