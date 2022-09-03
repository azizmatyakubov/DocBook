import React, { useState } from "react";
import { useNavigate } from "react-router";
import Calendar from "react-calendar";
import moment from "moment";
import Confirm from "./Confirm";
import { useEffect } from "react";

const DoctorBooking = ({ doctor }) => {
  const [date, setDate] = useState(new Date());
  const [slots, setSlots] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [startSlot, setStartSlot] = useState(null);
  const [endSlot, setEndSlot] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    let indexOfDay = moment(date).isoWeekday() - 1;

    if (indexOfDay > 5) {
      indexOfDay = null;
    } else {
      doctor.availability && setSlots(doctor.availability[indexOfDay]);
    }
  }, [doctor.availability, date]);

  return (
    <div className="doctor-booking-wrapper">
      <div className="doctor-booking-title">Book appointment</div>
      <div className="doctor-booking-calendar-container">
        <Calendar
          className="doctor-booking-calendar"
          value={date}
          onChange={setDate}
        />
      </div>

      <div className="doctor-booking-time">
        {slots &&
          slots.map((time, index) => {
            return (
              <div
                key={index}
                className="doctor-booking-time-item"
                onClick={() => {
                  let newDate = moment(date).format("YYYY-MM-DD");
                  let n = new Date(2022, 6, 28, 10, 0, 0);
                  console.log(n === new Date(`${newDate}T${time.start}`));
                  console.log(n);
                  console.log(new Date(`${newDate}T${time.start}`));

                  setStartSlot(new Date(`${newDate}T${time.start}`));
                  setEndSlot(new Date(`${newDate}T${time.end}`));
                }}
              >
                <div
                  className={
                    selectedSlot === time.start
                      ? "doctor-booking-slot-selected"
                      : "doctor-booking-slot"
                  }
                  onClick={() => setSelectedSlot(time.start)}
                >
                  {time.start} - {time.end}
                </div>
              </div>
            );
          })}
      </div>

      <div className="doctor-booking-button">
        <Confirm startSlot={startSlot} endSlot={endSlot} doctor={doctor} />
      </div>
    </div>
  );
};

export default DoctorBooking;
