import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import AppointmentList from '../components/Dashboard/AppointmentList'
import InfoSquare from '../components/InfoSquare'
import AppointmentRequests from '../components/Dashboard/AppointmentRequests'
import '../styles/Dashboard.css'
import Sidebar from '../components/Sidebar'

export default function Dashboard() {
  const user = useSelector(state => state.user)
  const [confirmedAppointments, setConfirmedAppointments] = useState([])
  const [pendingAppointments, setAppointmentRequests] = useState([])

  const getAppointmentsByDoctor = async () => {
    try {
      let res = await fetch(`${process.env.REACT_APP_API_URL}/appointments/doctor/${user.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`,
        },
      })
  
      let data = await res.json()
  
      if (res.status === 200) {
      const confirmedAppointments = data.data.appointments.filter(
        (appointment) => appointment.status === "confirmed"
      )
      setConfirmedAppointments(confirmedAppointments)
      // filter out pending appointments
      const pendingAppointments = data.data.appointments.filter(
        (appointment) => appointment.status === "pending"
      )
      setAppointmentRequests(pendingAppointments)
      } else {
        console.log("response error");
      }  
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect( ()  => {
   // getAppointmentsByDoctor(user.id)
  }, []);


  return (
    <div className='component'>
      <Sidebar />
      <Container>
          <div >
              <Container fluid>
                <Row>
                  <Col xs={6} md={3}><InfoSquare icon="people" text="Patients" number="664" /></Col>
                  <Col xs={6} md={3}><InfoSquare icon="price" text="Income" number="$2,111" /> </Col>
                  <Col xs={6} md={3}><InfoSquare icon="date" text="Appointments" number="211" /> </Col>
                  <Col xs={6} md={3}><InfoSquare icon="heart" text="Treatments" number="250" /> </Col>
                </Row>
                <Row>
                 
                  <Col md={6}>
                    <h6>Appointments</h6>
                    <AppointmentList confirmedAppointments={confirmedAppointments}  />
                  </Col>
                  <Col md={6}>
                    <h6>Appointment Reqeusts</h6>
                    <AppointmentRequests pendingAppointments={pendingAppointments} getAppointmentsByDoctor={getAppointmentsByDoctor} />
                  </Col>
                </Row>
              </Container>
          </div>
          </Container>
        </div>
      
  )
}
