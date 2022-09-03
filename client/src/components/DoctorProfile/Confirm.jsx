import React, { useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import "./Confirm.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiFillStar } from "react-icons/ai";
import { GoClock } from "react-icons/go";
import { useSelector } from "react-redux";

const Confirm = ({ startSlot, endSlot, doctor }) => {
  const user = useSelector((state) => state.user);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const makeAppointment = async () => {
    try {
      let res = await fetch(`${process.env.REACT_APP_API_URL}/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          patient: user.id,
          doctor: doctor._id,
          start: startSlot,
          end: endSlot,
        }),
      });
      let data = await res.json();

      if (res.status === 201) {
        handleClose();
        toast("Appointment made successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button onClick={handleShow} className="doctor-booking-button-submit">
        Book Appointment
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Appointment details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <div className="doctor-info-wrapper">
            <div className="doctor-info-image">
              <img src={doctor.image} alt="doctor" />
            </div>
            <div className="confirm-doctor-info-content">
              <h3>
                Dr. {doctor.name} {doctor.surname}
              </h3>
              <div className="doctor-rating">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div className="doctor-specialization">
                {doctor.specialization}
              </div>

              <div className="confirm-appointment-details-date">
                <p className="confirm-appointment-date">
                  <GoClock />
                  <b className="confirm-appoointment-date-bold"> From: </b>
                  {moment(startSlot).format("MMMM Do YYYY, h:mm")}
                </p>
                <p className="confirm-appointment-date">
                  <GoClock />
                  <b className="confirm-appoointment-date-bold"> To: </b>{" "}
                  {moment(endSlot).format("MMMM Do YYYY, h:mm")}
                </p>
              </div>
            </div>
          </div>

          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Your message to doctor</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group controlId="formFileDisabled" className="mb-3">
              <Form.Label>Files</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={makeAppointment}>
            Book
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Confirm;
