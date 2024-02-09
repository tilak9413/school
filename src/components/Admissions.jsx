import React, { useState } from 'react'
import Navbar from '../comp/Navbar'
import Registration from '../comp/Registration'
import MeritList from '../comp/MeritList'
import Entranceexam from '../comp/Entranceexam'


function Admissions() {

 const [active , setactive] = useState(1)


  return (
    <>
      <div>
        <Navbar />
        <div className="d-flex welcome-bar bgcolordash rounded p-2 mx-2">
          <span className={`smallbolding border-end px-2 pointer ${active == 1 ? "activeaddmition" : ""} `} onClick={() => setactive(1)}>Registation </span>
          <span className={`smallbolding border-end px-2 pointer ${active == 2 ? "activeaddmition" : ""} `}onClick={ () => setactive(2)} >Entrance Exam</span>
          <span className={`smallbolding border-end px-2 pointer ${active == 3 ? "activeaddmition" : ""} `} onClick={ () => setactive(3)} >Merit List</span>
        </div>
        {
          active == 1 ? <Registration/> :  active == 2 ? <Entranceexam/> :  <MeritList/>
        }
      
      </div>
    </>
  )
}

export default Admissions