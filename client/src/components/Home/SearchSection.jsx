import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";

const SearchSection = () => {
  return (
    <div className="search-section-wrapper">
      <div className="search-section">
        <h3 className="search-section-title">Find a doctor & book online</h3>
        <div className="search-section-inputs">
          <div className="search-section-input-container">
            <input
              type="text"
              placeholder="Search Location"
              className="search-section-input"
            />
            <span>
              <BiCurrentLocation />
            </span>
          </div>
          <div className="search-section-input-container">
            <input
              type="text"
              placeholder="Search Doctors"
              className="search-section-input"
            />
            <span>
              <BsFillPersonFill />
            </span>
          </div>
        </div>
        <button className="search-section-button">Search doctor</button>
        <p className="search-section-paragraph">
          Discover the best doctors nearest to you. Finding the right doctor is
          a matter of choice. We have a large network of doctors in the area.
        </p>
      </div>
      <div className="search-section-banner">
        <img src="./images/search-section-banner.png" alt="" srcSet="" />
      </div>
    </div>
  );
};

export default SearchSection;
