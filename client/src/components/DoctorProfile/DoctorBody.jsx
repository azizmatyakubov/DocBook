import React from "react";

const DoctorBody = ({ doctor }) => {
  return (
    <div className="doctor-body-wrapper">
      <div className="doctor-body-menu">
        <div className="doctor-body-menu-item">Overview</div>
        <div className="doctor-body-menu-item">Contact</div>
        <div className="doctor-body-menu-item">Review</div>
      </div>
      <div className="doctor-body-overview">
        <h4>
          Overview of {doctor.name} {doctor.surname}{" "}
        </h4>
        <p>{doctor.bio}</p>
      </div>
      <div className="doctor-body-reviews">
        <h4>Reviews</h4>
      </div>
    </div>
  );
};

export default DoctorBody;
