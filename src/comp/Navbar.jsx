import React from 'react'
import { MdEmail } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { IoReorderThreeSharp } from "react-icons/io5";
import '../App.css'
const Navbar = () => {
  return (
    <>
    <div className=" bgcolordash shadow headee d-flex justify-content-end fs-3 text-light align-items-center p-3 mb-2">
        <div className="icons d-flex gap-4 ">
        <div className='d-none d-col-sm-block' >
      <IoReorderThreeSharp/>
      </div>
      <MdEmail className="iconcolor text-white fs-3 icon" />
          <IoMdNotifications className="iconcolor text-white fs-3 icon" />
          <FaUserCircle className="iconcolo text-white fs-3 icon" />
        </div>
      </div>
    </>
  )
}

export default Navbar
