import React from "react";
import styled from "styled-components";
import AppointmentListItem from "./AppointmentListItem";

export default function AppointmentList({ confirmedAppointments }) {
  return (
    <AppointmentListContainer>
      {confirmedAppointments &&
        confirmedAppointments.map((appointment) => (
          <AppointmentListItem
            key={appointment._id}
            appointment={appointment}
          />
        ))}
    </AppointmentListContainer>
  );
}

const AppointmentListContainer = styled.div`
  width: 100%;
  background-color: #fff;
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${(props) => (props.active ? "#e5f9fd;" : "")};
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
  max-height: 65vh;
`;
