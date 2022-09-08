import React from "react";
import moment from "moment";
import "../styles/Schedule.css";

const DefaultSchedule = () => {
  const [slots, setSlots] = React.useState([]);
  const [start, setStart] = React.useState("10-00");
  const [end, setEnd] = React.useState("17-00");

  const [week, setWeek] = React.useState([
    { start: "10:00", end: "18:00" },
    { start: "11:00", end: "16:00" },
    { start: "12:00", end: "19:00" },
    { start: "09:00", end: "14:00" },
    { start: "14:00", end: "18:00" },
  ]);

  const result = [];

  function getTimeStops(start, end, length) {
    let startTime = moment(start, "HH:mm");
    let endTime = moment(end, "HH:mm");

    if (endTime.isBefore(startTime)) {
      endTime.add(1, "day");
    }

    let timeStops = [];

    while (startTime <= endTime) {
      timeStops.push({
        start: new moment(startTime).format("HH:mm"),
        end: new moment(startTime).add(length, "minutes").format("HH:mm"),
      });
      startTime.add(length, "minutes");
    }
    return timeStops;
  }

  const postSlots = async (id) => {
    let res = await fetch(`${process.env.REACT_API_URL}/doctors/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        result,
      }),
    });

    let data = await res.json();
    console.log(data);
  };

  const createSlots = () => {
    for (let i = 0; i < week.length; i++) {
      let timeStops = getTimeStops(week[i].start, week[i].end, "30");
      result.push(timeStops);
    }
  };

  return (
    <div className="default-schedule-wrapper">
      <h6>Weekly hours</h6>

      <div className="default-schedule-week">
        <div className="schedule-week">
          <input type="checkbox" className="schedule-checkbox" />
          <span className="default-schedule-weekday">MONDAY</span>
        </div>
        <div className="schedule-inputs">
          <input
            type="text"
            className="default-schedule-input"
            value={"09:00"}
            disabled={true}
          />
          <input
            type="text"
            className="default-schedule-input"
            value={"17:00"}
            disabled={true}
          />
        </div>
      </div>
      <div className="default-schedule-week">
        <div className="schedule-week">
          <input type="checkbox" className="schedule-checkbox" />
          <span className="default-schedule-weekday">TUESDAY</span>
        </div>
        <div className="schedule-inputs">
          <input
            type="text"
            className="default-schedule-input"
            value={"09:00"}
            disabled={true}
          />
          <input
            type="text"
            className="default-schedule-input"
            value={"17:00"}
            disabled={true}
          />
        </div>
      </div>
      <div className="default-schedule-week">
        <div className="schedule-week">
          <input type="checkbox" className="schedule-checkbox" />
          <span className="default-schedule-weekday">WEDNESDAY</span>
        </div>
        <div className="schedule-inputs">
          <input
            type="text"
            className="default-schedule-input"
            value={"09:00"}
            disabled={true}
          />
          <input
            type="text"
            className="default-schedule-input"
            value={"17:00"}
            disabled={true}
          />
        </div>
      </div>
      <div className="default-schedule-week">
        <div className="schedule-week">
          <input type="checkbox" className="schedule-checkbox" />
          <span className="default-schedule-weekday">THURSDAY</span>
        </div>
        <div className="schedule-inputs">
          <input
            type="text"
            className="default-schedule-input"
            value={"09:00"}
            disabled={true}
          />
          <input
            type="text"
            className="default-schedule-input"
            value={"17:00"}
            disabled={true}
          />
        </div>
      </div>
      <div className="default-schedule-week">
        <div className="schedule-week">
          <input type="checkbox" className="schedule-checkbox" />
          <span className="default-schedule-weekday">FRIDAY</span>
        </div>
        <div className="schedule-inputs">
          <input
            type="text"
            className="default-schedule-input"
            value={"09:00"}
            disabled={true}
          />
          <input
            type="text"
            className="default-schedule-input"
            value={"17:00"}
            disabled={true}
          />
        </div>
      </div>

      <button className="btn btn-primary schedule-create-btn">Create</button>
    </div>
  );
};

export default DefaultSchedule;
