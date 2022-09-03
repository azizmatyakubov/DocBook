import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";

// icons
import { MdDashboard } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdMoreTime } from "react-icons/md";
import { IoMdExit } from "react-icons/io";
import { SiGooglemeet } from "react-icons/si";

const SidebarDoctor = () => {
  const [isActive, setIsActive] = useState("dashboard");
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();

  const makeActive = (text) => {
    setIsActive(text);
    navigate(`/${text}`);
  };

  const logout = () => {
    navigate("/login");
  };

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-header">
        <div className="sidebar-logo-container">
          {/* <img className="sidebar-image" src={user.image} alt="sidebar" /> */}
        </div>
        <h1 className="sidebar-header-text">Hello My</h1>
      </div>

      <nav className="sidebar-menu">
        {/* Dashboard  */}
        <div
          className={`${
            isActive === "dashboard"
              ? "sidebar-menu-item sidebar-active"
              : "sidebar-menu-item"
          } `}
          onClick={() => makeActive("dashboard")}
        >
          <span className="sidebar-icon">
            <MdDashboard />
          </span>
          <span className="sidebar-text">Dashboard</span>
        </div>

        {/* Dashboard  */}
        <div
          className={`${
            isActive === "appointments"
              ? "sidebar-menu-item-active"
              : "sidebar-menu-item"
          } `}
          onClick={() => makeActive("appointments")}
        >
          <span className="sidebar-icon">
            <SiGooglemeet />
          </span>
          <span className="sidebar-text">Appointments</span>
        </div>

        {/* Doctors  */}
        <div
          className={`${
            isActive === "doctors"
              ? "sidebar-menu-item-active"
              : "sidebar-menu-item"
          } `}
          onClick={() => makeActive("doctors")}
        >
          <span className="sidebar-icons">
            <MdPeople className="sidebar-icon" />
          </span>
          <span className="sidebar-text">Doctors</span>
        </div>

        {/* Calendar  */}
        <div
          className={`${
            isActive === "calendar"
              ? "sidebar-menu-item-active"
              : "sidebar-menu-item"
          } `}
          onClick={() => makeActive("calendar")}
        >
          <span className="sidebar-icons">
            <BsFillCalendarDateFill className="sidebar-icon" />
          </span>
          <span className="sidebar-text">Calendar</span>
        </div>

        {/* Slots  */}
        <div
          className={`${
            isActive === "slots"
              ? "sidebar-menu-item-active"
              : "sidebar-menu-item"
          } `}
          onClick={() => makeActive("slots")}
        >
          <span className="sidebar-icons">
            <MdMoreTime className="sidebar-icon" />
          </span>
          <span className="sidebar-text">Slots</span>
        </div>

        {/* Profile  */}
        <div
          className={`${
            isActive === "doctor"
              ? "sidebar-menu-item-active"
              : "sidebar-menu-item"
          } `}
          onClick={() => makeActive("doctor")}
        >
          <span className="sidebar-icons">
            <CgProfile className="sidebar-icon" />
          </span>
          <span className="sidebar-text">Profile</span>
        </div>
      </nav>

      <div>
        <div className="sidebar-btn" onClick={() => logout()}>
          <span className="sidebar-icons">
            <IoMdExit className="sidebar-icon" />
          </span>
          <span className="sidebar-text">Log out</span>
        </div>
      </div>
    </div>
  );
};

export default SidebarDoctor;
