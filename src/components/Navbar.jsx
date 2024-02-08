import React from 'react'
import { MdEmail } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
    <div className="bgcolordash d-flex justify-content-end p-4 mb-2">
        <div className="icons d-flex gap-4">
          <MdEmail className="iconcolor text-white fs-3 icon" />
          <IoMdNotifications className="iconcolor text-white fs-3 icon" />
          <FaUserCircle className="iconcolo text-white fs-3 icon" />
        </div>
      </div>
    </>
  )
}

export default Navbar
