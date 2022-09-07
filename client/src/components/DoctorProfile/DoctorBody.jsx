import React from "react";

import Scroll, { Element } from "react-scroll";
const ScrollLink = Scroll.Link;

const DoctorBody = ({ doctor }) => {
  return (
    <div className="doctor-body-wrapper">
      <div className="doctor-body-menu">
        <ScrollLink
          to="Overview"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="doctor-body-menu-item"
          className="doctor-body-menu-item"
        >
          {" "}
          Overview
        </ScrollLink>
        <ScrollLink
          to="Reviews"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="doctor-body-menu-item"
          className="doctor-body-menu-item"
        >
          Reviews
        </ScrollLink>
        <ScrollLink
          to="Slots"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="doctor-body-menu-item"
          className="doctor-body-menu-item"
        >
          Slots
        </ScrollLink>
      </div>
      <div className="doctor-body-overview">
        <h4 id="Overview">
          <b>Overview</b>
        </h4>
        <p>{doctor.bio}</p>
      </div>
      <div className="doctor-body-reviews">
        <h4 id="Reviews">Reviews</h4>
        <p>{doctor.bio}</p>
      </div>
    </div>
  );
};

export default DoctorBody;
