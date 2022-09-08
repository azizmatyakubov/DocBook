import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SidebarItem = ({ isActive, makeActive, icon, text }) => {
  return (
    <div
      className={`${
        isActive === text
          ? "sidebar-active sidebar-menu-item"
          : "sidebar-menu-item"
      }`}
      onClick={() => makeActive(text)}
    >
      <span className="sidebar-icon">
        <FontAwesomeIcon icon={icon} />
      </span>
      <span className="sidebar-text">{text}</span>
    </div>
  );
};

export default SidebarItem;
