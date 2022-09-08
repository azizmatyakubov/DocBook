import React from 'react'
import { useParams } from 'react-router-dom'
import DoctorProfile from '../components/DoctorProfile/DoctorProfile'
import Sidebar from '../components/Sidebar'
import '../styles/Profile.css'


const DoctorProfilePage = () => {
  const param = useParams()

  return (
    <div className='component'>
          <Sidebar />
          <DoctorProfile />
    </div>
  )
}

export default DoctorProfilePage
