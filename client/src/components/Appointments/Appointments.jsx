import React from "react";
import "./Appointments.css";
import AppointmentsItem from "./AppointmentsItem";

const Appointments = ({
  appointments,
  cancelAppointment,
  deleteAppointment,
}) => {
  return (
    <div className="appointments-wrapper">
      <div className="appointments-header">
        <h1 className="appointments-header-text-selected">Appointments</h1>
      </div>
      <div className="appointments-list-container">
        <div className="appointments-list-header">
          <div className="appointments-list-items">
            <div className="appointments-list-item">Doctor</div>
            <div className="appointments-list-item">Date</div>
            <div className="appointments-list-item">Time</div>
            <div className="appointments-list-item">Status</div>
          </div>
        </div>
        {appointments &&
          appointments.map((appointment, i) => {
            return (
              <AppointmentsItem
                key={i}
                appointment={appointment}
                cancelAppointment={cancelAppointment}
                deleteAppointment={deleteAppointment}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Appointments;
