import React from 'react'
import { useParams } from 'react-router-dom'
import DoctorProfile from '../components/DoctorProfile/DoctorProfile'
import '../styles/Profile.css'


const DoctorProfilePage = () => {
  const param = useParams()

  return (
    <div className='component-wrapper'>
          <DoctorProfile />
    </div>
  )
}

export default DoctorProfilePage
