import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../styles/Calendar.css";

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [confirmedAppointments, setConfirmedAppointments] = React.useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [modal, setModal] = useState(false);

  const getAppointmentsByDoctor = async (doctorId) => {
    try {
      let res = await fetch(
        `${process.env.REACT_APP_API_URL}/appointments/doctor/${doctorId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      let data = await res.json();

      if (res.status === 200) {
        console.log(data.data.appointments);
        const confirmedAppointments = data.data.appointments.filter(
          (appointment) => appointment.status === "confirmed"
        );
        setConfirmedAppointments(confirmedAppointments);
        console.log(confirmedAppointments);
      } else {
        console.log("response error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointmentsByDoctor(user.id);
  }, []);

  const showCalendarModal = () => setModal(true);
  const closeCalendarModal = () => setModal(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "50%",
      height: "50%",
      backgroundColor: "red",
      // background transparency: "0.5",
      borderRadius: "10px",
      padding: "20px",
      border: "none",
      outline: "none",
      boxShadow: "0px 0px 10px #000",
      zIndex: "10",
    },
  };

  return (
    <>
      <div className="calendar-wrapper">
       <div className="component-body">
          <Calendar
            localizer={localizer}
            events={confirmedAppointments}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            min={new Date(0, 0, 0, 9, 0, 0)}
            max={new Date(0, 0, 0, 19, 0, 0)}
            selectable={true}
            //onSelectEvent={(event) => PopoverComponent(event)}
            onSelectSlot={(slotInfo) => {
              setSelectedSlot(slotInfo);
              showCalendarModal();
            }}
          />
       </div>
      </div>

      <Modal
        isOpen={modal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeCalendarModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="doctor-booking-modal">
          <div className="doctor-booking-modal-title">
            Book appointment for {selectedSlot}
          </div>
          <div className="doctor-booking-modal-content">
            <div className="doctor-booking-modal-content-item">
              <div className="doctor-booking-modal-content-item-title">
                Start time
              </div>
              <div className="doctor-booking-modal-content-item-value">
                {/* {selectedSlot.start} */}
              </div>
            </div>
            <div className="doctor-booking-modal-content-item">
              <div className="doctor-booking-modal-content-item-title">
                End time
              </div>
              <div className="doctor-booking-modal-content-item-value">
                {/* {selectedSlot.end} */}
              </div>
            </div>
          </div>
          <div className="doctor-booking-modal-button-container">
            <button
              className="doctor-booking-modal-button"
              onClick={() => {
                navigate("/doctor/booking");
                closeCalendarModal();
              }}
            >
              Book
            </button>
            <button
              className="doctor-booking-modal-button"
              onClick={() => {
                closeCalendarModal();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default CalendarPage;
