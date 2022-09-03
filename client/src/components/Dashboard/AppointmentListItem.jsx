import React from "react";
import moment from "moment";
import "../../styles/Dashboard.css";

export default function AppointmentListItem({ appointment }) {
  return (
    <div className="overview-appointment-list-wrapper ">
      <div className="overview-patient-avatar">
        <img src={appointment.patient.image} alt="" srcset="" />
      </div>
      <div className="overview-patient-info">
        <div className="overview-patient-name">
          {appointment.patient.name} {appointment.patient.surname}
        </div>
        <div className="overview-treatment-type">Medical check up</div>
      </div>
      <div className="overview-appointment-time">
        <div className="overview-appointment-time-item">
          <div className="overview-appointment-time-header">
            {moment(appointment.start).format("LL")}
          </div>
          <span>{moment(appointment.start).format("HH:mm")} - </span>
          <span>{moment(appointment.end).format("HH:mm")}</span>
        </div>
      </div>
    </div>
  );
}
