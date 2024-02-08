import React from 'react'
import { RiAccountPinCircleFill } from "react-icons/ri";
import { HiOfficeBuilding } from "react-icons/hi";
import { MdPlaylistAddCircle } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { MdClass } from "react-icons/md";
import { FaHandPointer } from "react-icons/fa"
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { PiExamFill } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { FaMoneyCheck } from "react-icons/fa";

import { MdDashboard } from "react-icons/md";
import Dashborad from './Dashborad';


function Home() {
  return (
 
          <div style={{ height: "100vh" }} className='col-sm-2 p-1  border-end   align-items-center bg-white text-dark'>
            <div className='d-flex align-items-center gap-3 p-3'>
              <img className='img-fluid logosize' src="public\image\logo-removebg-preview.png" alt="" />
              <span className='fw-bold fonsizelogo' >ABC PUBLIC SCHOOL</span>
            </div>
            <div className='mt-4'>
              <ul className='list-items d-grid gap-1 '>
                <li className='liwidth  ' > <MdDashboard className='iconcolor' /><Link className='text-decoration-none text-dark' to="dashboard">Dashboard</Link></li>
                <li className='liwidth'> <HiOfficeBuilding className='iconcolor' /> <Link className='text-decoration-none text-dark' to="office">Office</Link></li>
                <li className='liwidth' >  <MdPlaylistAddCircle className='iconcolor' /> <Link className='text-decoration-none text-dark' to="Admissions" >Admissions</Link> </li>
                <li className='liwidth'>  <PiStudentBold className='iconcolor' />  <Link className='text-decoration-none text-dark' to="students" >Students</Link> </li>
                <li  className='liwidth' > <MdClass className='iconcolor' /> <Link className='text-decoration-none text-dark' to="classes">Classes</Link> </li>
                <li  className='liwidth' > <FaHandPointer className='iconcolor' />  <Link className='text-decoration-none text-dark' to="attendance">Attendance</Link> </li>
                <li  className='liwidth' > <FaMoneyCheckDollar className='iconcolor' /> Fees</li>
                <li  className='liwidth' >  <PiExamFill className='iconcolor' /> Exams</li>
                <li className='liwidth' > <FaMoneyCheck className='iconcolor' />  Staff payroll</li>
                <li className='liwidth' > <RiAccountPinCircleFill className='iconcolor' /> Account</li>
              </ul>
            </div>
          </div>
         
  )
}
export default Home
