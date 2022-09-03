import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import "../../styles/Dashboard.css";
// Icons
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function AppointmentRequestItem({
  pendingAppointments,
  getAppointmentsByDoctor,
  doctorId,
}) {
  const confirmAppointment = async (appointmentId) => {
    try {
      let res = await fetch(
        `${process.env.REACT_APP_API_URL}/appointments/${appointmentId}`,
        {
          method: "PUT",
          body: JSON.stringify({
            status: "confirmed",
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      let data = await res.json();

      if (res.status === 200) {
        console.log(data.data.appointment);
        getAppointmentsByDoctor();
      } else {
        console.log("response error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      let res = await fetch(
        `${process.env.REACT_APP_API_URL}/appointments/${appointmentId}`,
        {
          method: "PUT",
          body: JSON.stringify({
            status: "cancelled",
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      let data = await res.json();

      if (res.status === 200) {
        console.log(data.data.appointment);
        getAppointmentsByDoctor(doctorId);
      } else {
        console.log("response error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="overview-appointment-list-wrapper ">
      <div className="overview-patient-avatar">
        <img src={pendingAppointments.patient.image} alt="" srcset="" />
      </div>
      <div className="overview-patient-info">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <div className="overview-patient-name">
            {pendingAppointments.patient.name}{" "}
            {pendingAppointments.patient.surname}
          </div>
        </Link>
        <div className="overview-treatment-type">Medical check up</div>
        <div className="overview-request-time">
          {moment(pendingAppointments.start).format("LL")}{" "}
          <span>{moment(pendingAppointments.start).format("HH:mm")} - </span>
          <span>{moment(pendingAppointments.end).format("HH:mm")}</span>
        </div>
      </div>
      <div className="overview-appointment-btn">
        <div
          className="overview-appointment-accept"
          onClick={() => confirmAppointment(pendingAppointments._id)}
        >
          <AiOutlineCheckCircle />
        </div>
        <div
          className="overview-appointment-reject"
          onClick={() => cancelAppointment(pendingAppointments._id)}
        >
          Cancel
        </div>
      </div>
    </div>
  );
}
