import React, { useEffect, useState } from "react";
import DoctorCard from "../components/Doctors/DoctorCard";
import '../styles/Doctors.css'
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";

const DoctorsPage = () => {
  const user = useSelector((state) => state.user);
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState({
    name: "",
  });

  useEffect(() => {
    getDoctors();
  }, []);

  const getDoctors = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/doctors`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = await res.json();
      setDoctors(data.doctors);
    } catch (error) {
      console.log(error);
    }
  };

  return (
<div className="component">
      <Sidebar />
      <div className="doctors-wrapper">
        <div className="doctors-content">
          <div className="doctors-search">
            <div className="doctors-search-header">Search Filter</div>
            <div className="doctors-search-container">
              <span>Gender</span>
              <div className="doctors-search-inputs">
                <div className="doctors-search-input">
                  <input type="checkbox" name="" id="" /> <span>Male Doctor</span>
                </div>
                <div className="doctors-search-input">
                  <input type="checkbox" name="" id="" />
                  <span> Female Doctor</span>
                </div>
              </div>
            </div>
  
            <div className="doctors-search-container">
              <span>Select Specialist</span>
              <div className="doctors-search-inputs">
                <div className="doctors-search-input">
                  <input type="checkbox" name="" id="" /> <span>Neurology</span>
                </div>
                <div className="doctors-search-input">
                  <input type="checkbox" name="" id="" /> <span>Orthopedic</span>
                </div>
                <div className="doctors-search-input">
                  <input type="checkbox" name="" id="" />
                  <span> Cardiology</span>
                </div>
                <div className="doctors-search-input">
                  <input type="checkbox" name="" id="" /> <span>Dentist</span>
                </div>
              </div>
            </div>
  
            <div className="doctors-search-container">
              <button className="doctors-search-btn">Search</button>
            </div>
          </div>
          <div className="doctors-list">
            {doctors &&
              doctors.map((doctor) => {
                return <DoctorCard doctor={doctor} />;
              })}
          </div>
        </div>
      </div>
</div>
  );
};

export default DoctorsPage;
