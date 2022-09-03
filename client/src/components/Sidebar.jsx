import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { CgMenu } from "react-icons/cg";
import Offcanvas from "react-bootstrap/Offcanvas";
import SidebarDoctor from "./SidebarDoctor";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="sidebar">
        <div onClick={handleShow}>
          <CgMenu fontSize="1.5em" color="#98a1ab" />
        </div>
      </div>
      <div className="d-none d-lg-block">
        <SidebarDoctor />
      </div>

      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>DocBook</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SidebarDoctor />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
