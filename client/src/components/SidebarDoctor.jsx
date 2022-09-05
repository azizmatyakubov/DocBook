import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";


// icons
import { IoMdExit } from "react-icons/io";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faUserMd } from "@fortawesome/free-solid-svg-icons"; 
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";




import SidebarItem from "./SidebarItem";

const SidebarDoctor = () => {
  const [isActive, setIsActive] = useState("Dashboard");
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();

  const makeActive = (text) => {
    setIsActive(text);
    navigate(`/${text}`);
  };

  const logout = () => {
    localStorage.removeItem("user");
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
        
        
        <SidebarItem isActive={isActive} makeActive={makeActive} icon={faChartLine} text="Dashboard" />
        <SidebarItem isActive={isActive} makeActive={makeActive} icon={faCalendar} text="Calendar" />
        <SidebarItem isActive={isActive} makeActive={makeActive} icon={faUserMd} text="Doctors" />
        <SidebarItem isActive={isActive} makeActive={makeActive} icon={faCalendar} text="Appointments" />
        <SidebarItem isActive={isActive} makeActive={makeActive} icon={faCirclePlus} text="Slots"/>
        <SidebarItem isActive={isActive} makeActive={makeActive} icon={faCalendar} text="Profil"/>

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
