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
 
          <div style={{ height: "100vh" }} className='col-sm-2 p-1 position-fixed  border-end  d-none d-xl-block    align-items-center bg-white text-dark'>
            <div className='d-flex align-items-center gap-3 p-3'>
              <img className='img-fluid logosize' src="public\image\logo-removebg-preview.png" alt="" />
              <span className='fw-bold fonsizelogo' >ABC PUBLIC SCHOOL</span>
            </div>
            <div className='mt-4'>
              <ul className='list-items d-grid gap-1 '>

                <li className='liwidth d-flex align-items-center gap-2' > <MdDashboard className='iconcolor fs-4' /><Link className='text-decoration-none text-dark' to="/"><p className='m-0'>Dashboard</p></Link></li>
                <li className='liwidth  d-flex align-items-center gap-2'> <HiOfficeBuilding className='iconcolor  fs-4' /> <Link className='text-decoration-none text-dark' to="office"><p className='m-0'>Office</p></Link></li>
                <li className='liwidth  d-flex align-items-center gap-2' >  <MdPlaylistAddCircle className='iconcolor  fs-4' /><Link className='text-decoration-none text-dark' to="admissions"><p className='m-0'>Admissions</p></Link> </li>
                <li className='liwidth  d-flex align-items-center gap-2'>  <PiStudentBold className='iconcolor  fs-4' /> <Link className='text-decoration-none text-dark' to="student"><p className='m-0'>Students</p></Link>  </li>
                <li  className='liwidth  d-flex align-items-center gap-2' > <MdClass className='iconcolor  fs-4' />  <Link className='text-decoration-none text-dark' to="class"><p className='m-0'>Class</p></Link></li>
                <li  className='liwidth  d-flex align-items-center gap-2' > <FaHandPointer className='iconcolor  fs-4' />  <Link className='text-decoration-none text-dark' to="attendance"><p className='m-0'>Attendance</p></Link> </li>
                <li  className='liwidth  d-flex align-items-center gap-2' > <FaMoneyCheckDollar className='iconcolor  fs-4' /> <Link className='text-decoration-none text-dark' to="fees"><p className='m-0'>Fees</p></Link> </li>
                <li  className='liwidth  d-flex align-items-center gap-2' >  <PiExamFill className='iconcolor  fs-4' /> <Link className='text-decoration-none text-dark' to="exams"><p className='m-0'>Exams</p></Link> </li>
                <li className='liwidth  d-flex align-items-center gap-2' > <FaMoneyCheck className='iconcolor  fs-4' /> <Link className='text-decoration-none text-dark' to="staffpayroll"><p className='m-0'>Staff payroll</p></Link> </li>
                <li className='liwidth  d-flex align-items-center gap-2' > <RiAccountPinCircleFill className='iconcolor  fs-4' /> <Link className='text-decoration-none text-dark' to="account"> <p className='m-0'>Account</p></Link> </li>

              </ul>
            </div>
          </div>
         
  )
}
export default Home
