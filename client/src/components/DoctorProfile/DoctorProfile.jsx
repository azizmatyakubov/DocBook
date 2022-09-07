import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DoctorProfile.css";
import { Container, Row, Col } from "react-bootstrap";
import DoctorInfo from "./DoctorInfo";
import DoctorBooking from "./DoctorBooking";
import DoctorBody from "./DoctorBody";
import { useSelector } from "react-redux";

const DoctorProfile = () => {
  const user = useSelector((state) => state.user);
  const token = localStorage.getItem("token");
  const [doctor, setDoctor] = useState({});
  const param = useParams();

  useEffect(() => {
    if (param.id) {
      getDoctorById(param.id);
    } else {
      getDoctorById(user.id);
    }
  }, []);

  const getDoctorById = async (id) => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/doctors/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      setDoctor(data.doctor);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex">
      <Container className="mt-3">
        <Row>
          <Col md={7}>
            <DoctorInfo doctor={doctor} />
            <DoctorBody doctor={doctor} />
          </Col>
          <Col md={5}>
            <DoctorBooking doctor={doctor} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DoctorProfile;
