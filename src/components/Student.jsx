import React from 'react'
import Navbar from '../comp/Navbar'
import StudentRegister from './studentcom/StudentRegister'
import Studentleaving from './studentcom/studentleaving'
import Studentid from './studentcom/studentid'
import Timetable from './studentcom/Timetable'
function Student() {
  const [active , setactive] = React.useState(1)
  return (
    <>
     <div>
        <Navbar />
        <div className="d-flex welcome-bar bgcolordash rounded p-2 mx-2">
          <span className={`smallbolding border-end px-2 pointer ${active == 1 ? "activeaddmition" : ""} `} onClick={() => setactive(1)}>Student GR Register </span>
          <span className={`smallbolding border-end px-2 pointer ${active == 2 ? "activeaddmition" : ""} `}onClick={ () => setactive(2)} >Student leaving </span>
          <span className={`smallbolding border-end px-2 pointer ${active == 3 ? "activeaddmition" : ""} `} onClick={ () => setactive(3)} > Student ID </span>
          <span className={`smallbolding border-end px-2 pointer ${active == 4 ? "activeaddmition" : ""} `} onClick={ () => setactive(4)} >Time table</span>
        </div>
        {
          active == 1 ? <StudentRegister/> :  active == 2 ? <Studentleaving/> :  <Studentid/> 
        }
        {
          active ==4 ? <Timetable/> : ""
        }
      </div>
   
    </>

  )
}

export default Student
