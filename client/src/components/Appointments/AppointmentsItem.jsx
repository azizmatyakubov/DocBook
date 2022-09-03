import React from "react";
import moment from "moment";

const AppointmentsItem = ({
  appointment,
  cancelAppointment,
  deleteAppointment,
}) => {
  return (
    <div className="appointments-list-body">
      <div className="appointments-list-items">
        <div className="appointments-list-item">
          {appointment.patient.name} {appointment.patient.surname}{" "}
        </div>
        <div className="appointments-list-item">
          {moment(appointment.start).format("LL")} {""}
        </div>
        <div className="appointments-list-item">
          {moment(appointment.start).format("HH:mm")}
          {"-"}
          {moment(appointment.end).format("HH:mm")}
        </div>
        <div
          className={
            appointment.status === "confirmed"
              ? "appointments-list-item-green"
              : "appointments-list-item-red"
          }
        >
          {appointment.status}
        </div>
      </div>
      {appointment.status === "confirmed" ? (
        <div
          className="appointments-list-btn"
          onClick={() => cancelAppointment(appointment._id)}
        >
          Cancel
        </div>
      ) : (
        <div
          className="appointments-list-btn-delete"
          onClick={() => deleteAppointment(appointment._id)}
        >
          Delete
        </div>
      )}
    </div>
  );
};

export default AppointmentsItem;
