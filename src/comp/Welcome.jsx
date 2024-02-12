import React from 'react'
// import Student from '../components/Student'
const Welcome = (props) => {
  return (
    <>
    <div className="welcome-bar bgcolordash rounded p-2">
        <p className="m-0  "> {props.student}  <span className="text-dark fw-bold">{props.studentleving}</span> <span>{props.studentid}</span> <span>{props.timetable}</span> </p>
      </div>
    </>
  )
}

export default Welcome
