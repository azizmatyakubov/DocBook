import React, {useState} from 'react'

import Sidebar from '../components/Sidebar';
import DefaultSchedule from '../components/DefaultSchedule';
import CustomSchedule from '../components/CustomSchedule';

import { Container } from 'react-bootstrap';

import '../styles/Slots.css'


export default function Slots() {
    // const [selectedDay, setSelectedDay] = useState(null)
    const [selectedOption, setSelectedOption] = useState('default')

    const makeActive = (option) => {
        setSelectedOption(option)
    }

  return (
    <div className='component'>
      <Sidebar />
        <Container className='component-body mt-3'>
          
            
              <h5><b>How do you want to offer your availability for this event type?</b></h5>
              <div className='d-flex'>
                <div className={`${selectedOption === "default" ? "slots-btn slots-selected" : "slots-btn"} `} onClick={() => makeActive('default')}>Use default schedule</div>
                <div className={`${selectedOption === "custom" ? "slots-btn slots-selected" : "slots-btn"} `} onClick={() => makeActive('custom')}>Set custom hours</div>
              </div>
           

           <div className='slots-time'>
              {
                selectedOption === "default" ?
                <DefaultSchedule /> : <CustomSchedule />
              }
           </div>
        
        </Container>  
    </div>
  )
}
