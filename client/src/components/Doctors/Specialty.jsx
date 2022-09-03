import React from "react";
import "./Specialty.css";

const Specialty = () => {
  return (
    <div className="specialty-wrapper">
      <div className="specialty-header">Specialty</div>
      <div className="specialty-body">
        <div className="specialty-body-item">
          <input type="checkbox" name="dermotologist" id="" /> Dermatologist
        </div>
        <div className="specialty-body-item">
          <input type="checkbox" name="immunologists" id="" /> Immunologists
        </div>
        <div className="specialty-body-item">
          <input type="checkbox" name="gastroenterologists" id="" />{" "}
          Gastroenterologists
        </div>
        <div className="specialty-body-item">
          <input type="checkbox" name="neurologist" id="" /> Neurologist
        </div>
      </div>
    </div>
  );
};

export default Specialty;
