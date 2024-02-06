import React from 'react'
import { RiAccountPinCircleFill } from "react-icons/ri";
import { HiOfficeBuilding } from "react-icons/hi";
import { MdPlaylistAddCircle } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { MdClass } from "react-icons/md";
import { FaHandPointer } from "react-icons/fa"
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { PiExamFill } from "react-icons/pi";
import { FaMoneyCheck } from "react-icons/fa";

import { MdDashboard } from "react-icons/md";
import Dashborad from './Dashborad';


function Home() {
  return ( 
    <div className='bg-light'>
      <div className='container-fluid'>
        <div className='row col-sm-12'>
          <div style={{ height: "100vh" }} className='col-sm-2 p-1  align-items-center bg-white text-dark'>
            <div className='d-flex align-items-center gap-3 p-3'>
              <img className='img-fluid logosize' src="public\image\logo-removebg-preview.png" alt="" />
              <span>ABC PUBLIC SCHOOL</span>
            </div>
            <div className='mt-4'>
              <ul className='list-items d-grid gap-4 fs-5 '>
                <li className='align-items-center'> <MdDashboard className='iconcolor' />Dashoard</li>
                <li> <HiOfficeBuilding className='iconcolor' /> Office</li>
                <li>  <MdPlaylistAddCircle className='iconcolor'/> Admissions</li>
                <li> <PiStudentBold className='iconcolor'/>   Students</li>
                <li> <MdClass className='iconcolor'/> Class</li>
                <li> <FaHandPointer className='iconcolor' />  Attendance</li>
                <li> <FaMoneyCheckDollar className='iconcolor'/> Fees</li>
                <li>  <PiExamFill className='iconcolor' /> Exams</li>
                <li> <FaMoneyCheck className='iconcolor'/>  Staff payroll</li>
                <li> <RiAccountPinCircleFill className='iconcolor' /> Account</li>
              </ul>
            </div>
          </div>
          <div className='col-sm-10 border '>
          
     <Dashborad/>

          
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
