import React from "react";
import "../../styles/Dashboard.css";
import AppointmentRequestItem from "./AppointmentRequestItem";

export default function AppointmentRequests({
  pendingAppointments,
  getAppointmentsByDoctor,
}) {
  return (
    <div className="overview-appointment-request-wrapper">
      {pendingAppointments &&
        pendingAppointments.map((appointment) => (
          <AppointmentRequestItem
            key={appointment._id}
            pendingAppointments={appointment}
            getAppointmentsByDoctor={getAppointmentsByDoctor}
          />
        ))}
    </div>
  );
}
