// import React, { useState } from 'react'
// import React, { useState } from 'react'
import React from 'react'
import '../assets/styledashboradcss/attendence.css'
import Navbar from '../comp/Navbar'
import Attendancestudent from '../comp/studentAttendance'
import Attendancestaff from '../comp/StaffAttendence'
function Attendence() {
  const [active,setactive]=React.useState(0)

  return (
    <>
    <div className='container-fluid'>
      <Navbar />
      <div className="d-flex welcome-bar bgcolordash rounded p-2  mx-2">
        <span className={`smallbolding border-end px-2 pointer ${active == 0 ? "activeaddmition" : ""} `} onClick={() => setactive(0)}>Student Attendance </span>
        <span className={`smallbolding border-end px-2 pointer ${active == 1 ? "activeaddmition" : ""} `}onClick={ () => setactive(1)} > Staff Attendance</span>
      
      </div>
      {
        active == 1 ? <Attendancestudent/> :  <Attendancestaff/>
      }
     </div>
    
   
  </>

  )
  }

export default Attendence
