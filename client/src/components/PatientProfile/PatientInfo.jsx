import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

const PatientInfo = ({ patient }) => {
  console.log(patient, "patient");
  return (
    <div className="doctor-info-wrapper">
      <div className="doctor-info-image">
        <img src={patient.image} alt="doctor" />
      </div>
      <div className="doctor-info-content">
        <h3>
          Patient {patient.name} {patient.surname}
        </h3>

        <div className="doctor-contact-container">
          <div className="doctor-contact-item">
            <AiFillPhone />
            <span> 729123456</span>
          </div>
          <div className="doctor-contact-item">
            <MdAlternateEmail />
            <span> {patient.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
