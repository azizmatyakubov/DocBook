import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PatientInfo from "./PatientInfo";

const PatientProfile = () => {
  const [patient, setPatient] = useState({});
  const param = useParams();
  const myProfile = useSelector((state) => state.user);

  useEffect(() => {
    if (param.id) {
      getPatientById(param.id);
    } else {
      getPatientById(myProfile.user._id);
    }
  }, []);

  const getPatientById = async (id) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/users/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await res.json();
      setPatient(data.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <PatientInfo patient={patient} />
    </div>
  );
};

export default PatientProfile;
