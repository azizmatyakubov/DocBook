import React, {useState} from 'react'

import DefaultSchedule from '../components/DefaultSchedule';
import CustomSchedule from '../components/CustomSchedule';

import '../styles/Slots.css'

export default function Slots() {
    // const [selectedDay, setSelectedDay] = useState(null)
    const [selectedOption, setSelectedOption] = useState('default')

    const makeActive = (option) => {
        setSelectedOption(option)
    }

  return (
    <div className='component-wrapper'>
        <div className='component-body'>
          <div className='slots-content'>
            <div className='slots-content-w50'>
              <h5>How do you want to offer your availability for this event type?</h5>
              <div className='slots-content-w50'>
                <div className={`${selectedOption === "default" ? "slots-btn slots-selected" : "slots-btn"} `} onClick={() => makeActive('default')}>Use default schedule</div>
                <div className={`${selectedOption === "custom" ? "slots-btn slots-selected" : "slots-btn"} `} onClick={() => makeActive('custom')}>Set custom hours</div>
              </div>
            </div>

           <div className='slots-content-w50'>
              {
                selectedOption === "default" ?
                <DefaultSchedule /> : <CustomSchedule />
              }
           </div>
           </div>
        </div>  
    </div>
  )
}
