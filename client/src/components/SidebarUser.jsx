import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";

// icons
import { MdDashboard } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdMoreTime } from "react-icons/md";
import { IoMdExit } from "react-icons/io";
const Sidebar = () => {
  const [isActive, setIsActive] = useState("dashboard");

  const navigate = useNavigate();

  const makeActive = (text) => {
    setIsActive(text);
    if (text === "dashboard") {
      navigate("/patient-dashboard");
    } else {
      navigate(`/${text}`);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-header">
        <div className="sidebar-logo-container">
          <img
            className="sidebar-image"
            src="./images/hospital-logo.png"
            alt="sidebar"
          />
        </div>
        <h1 className="sidebar-header-text">name surname</h1>
      </div>

      <div className="sidebar-nav-container">
        {/* Dashboard  */}
        <div
          className={`${
            isActive === "dashboard"
              ? "sidebar-btn sidebar-active-btn"
              : "sidebar-btn"
          } `}
          onClick={() => makeActive("dashboard")}
        >
          <span className="sidebar-btn-icon">
            <MdDashboard />
          </span>
          <span className="sidebar-btn-text">Dashboard</span>
        </div>

        {/* Doctors  */}
        <div
          className={`${
            isActive === "doctors"
              ? "sidebar-btn sidebar-active-btn"
              : "sidebar-btn"
          } `}
          onClick={() => makeActive("doctors")}
        >
          <span className="sidebar-btn-icon">
            <MdPeople />
          </span>
          <span className="sidebar-btn-text">Doctors</span>
        </div>

        {/* Profile  */}
        <div
          className={`${
            isActive === "profile"
              ? "sidebar-btn sidebar-active-btn"
              : "sidebar-btn"
          } `}
          onClick={() => makeActive("profile")}
        >
          <span className="sidebar-btn-icon">
            <CgProfile />
          </span>
          <span className="sidebar-btn-text">Profile</span>
        </div>
      </div>

      <div className="sidebar-footer">
        <div className="sidebar-btn" onClick={() => logout()}>
          <span className="sidebar-btn-icon">
            <IoMdExit />
          </span>

          <span className="sidebar-btn-text">Log out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
