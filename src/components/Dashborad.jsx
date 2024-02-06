import React from 'react'
import { MdEmail } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

function Dashborad() {
  return (
    <div className=''>
   <div className='container-fluid w-100 col-sm-12  '>
        <div className='row border dashcolor   col-sm-12 right-side text-end align-items-center justify-content-center'>
            <ul className='d-flex justify-content-end gap-5 fs-3 list-items'>
                <li>
                <MdEmail className='iconcolor'/>
                </li>
                <li><IoMdNotifications className='iconcolor'/></li>
                <li><FaUserCircle className='iconcolor'/></li>
            </ul>
        </div>
    </div>
    </div>
 
  )
}

export default Dashborad