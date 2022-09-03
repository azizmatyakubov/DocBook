import React from "react";
import { RiHospitalFill } from "react-icons/ri";
import { MdLocalPharmacy } from "react-icons/md";
import { ImLab } from "react-icons/im";

const Tile = ({ logo, title, paragraph }) => {
  return (
    <div className="tile-wrapper">
      <div className="tile-logo">
        {logo === "RiHospitalFill" ? (
          <RiHospitalFill />
        ) : logo === "MdLocalPharmacy" ? (
          <MdLocalPharmacy />
        ) : logo === "ImLab" ? (
          <ImLab />
        ) : null}
      </div>
      <div className="tile-content">
        <h3 className="tile-title">Find a doctor</h3>
        <p className="tile-paragraph">
          We have the best specialists to deliver top-notch diagnostic services
          for you.
        </p>
        <p className="tile-book">Learn more</p>
      </div>
    </div>
  );
};

export default Tile;
