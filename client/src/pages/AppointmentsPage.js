import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Appointments from '../components/Appointments/Appointments'
import '../styles/AppointmentsPage.css'

const AppointmentsPage = () => {
    const user = useSelector((state) => state.user)
    const [appointments, setAppointments] = useState([])


    useEffect(() => {
        getAppointmentsByDoctor()
    }, [])


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
            setAppointments(data.data.appointments)
          } else {
            console.log("response error");
          }  
        } catch (error) {
          console.log(error)
        }
      }

    const cancelAppointment = async (id) => {
        try {
            let res = await fetch(`${process.env.REACT_APP_API_URL}/appointments/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`,
                },
                body: JSON.stringify({
                    status: 'cancelled'
                })
            })

            if (res.status === 200) {
                getAppointmentsByDoctor()
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
                    'Authorization': `Bearer ${user.token}`,
                },
            })

            if (res.status === 200) {
                getAppointmentsByDoctor()
            } else {
                console.log("response error");
            }
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div className='appointmentsPage-wrapper'>
          <div className='component-body'>
            <Appointments appointments={appointments} cancelAppointment={cancelAppointment} deleteAppointment={deleteAppointment} />
          </div>
    </div>
  )
}

export default AppointmentsPage