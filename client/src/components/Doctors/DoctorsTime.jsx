import React from "react";

const DoctorsTime = () => {
  return (
    <div className="specialty-wrapper">
      <div className="specialty-header">Apppointment availability</div>
      <div className="specialty-body">
        <div className="specialty-body-item">
          <input type="checkbox" name="dermotologist" id="" /> Free doctors only
        </div>
        <div className="specialty-body-item">
          <input type="checkbox" name="immunologists" id="" /> Unavailable
          doctors only
        </div>
      </div>
    </div>
  );
};

export default DoctorsTime;
