import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Appointments from '../components/Appointments/Appointments'
import Sidebar from '../components/Sidebar'

import useFetch from '../hooks/useFetch'

import '../styles/AppointmentsPage.css'

const AppointmentsPage = () => {
    const user = useSelector((state) => state.user)
    const token = localStorage.getItem('token')
    const [appointments, setAppointments] = useState([])

   const { response, error, loading } = useFetch(`${process.env.REACT_APP_API_URL}/appointments/doctor/${user.user}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })

    useEffect(() => {
      if (response) {
        setAppointments(response.appointments)
      }
    }, [response])



    

    const cancelAppointment = async (id) => {
        try {
            let res = await fetch(`${process.env.REACT_APP_API_URL}/appointments/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    status: 'cancelled'
                })
            })

            if (res.status === 200) {
                //getAppointmentsByDoctor()
            } else {
                console.log("response error");
            }
        } catch (error) {
            console.log(error)
        }
    }

    const deleteAppointment = async (id) => {
        try {
            let res = await fetch(`${process.env.REACT_APP_API_URL}/appointments/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            })

            if (res.status === 200) {
               // getAppointmentsByDoctor()
            } else {
                console.log("response error");
            }
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div className='component'>
      <Sidebar />
        <Container className="mt-3">
            <Appointments appointments={appointments} cancelAppointment={cancelAppointment} deleteAppointment={deleteAppointment} />
        </Container>
    </div>
  )
}

export default AppointmentsPage