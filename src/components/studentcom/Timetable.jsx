import React from 'react'
import Dropdown from '../../comp/dropdown'
import '../../../public/assets/css/style.css'
import "../../assets/styledashboradcss/addmition.css";
function Timetable() {
  return (
    <>

      <div className='container p-3' >
        <div className='col-sm-12 row'>
          <div className='col-sm-2' >
            <Dropdown />
          </div>
          <div className='col-sm-1' >
            <Dropdown />
          </div>
        </div>
      </div>
      <div className='container' >
        <div className='row col-sm-12 justify-content-center' >
          <div className='text-center fw-bold'>
            <p>Time - Table for Class  9th (A)</p>
            <div>
              {/* <table className='table bg-white ' >
              <tr>
                <th style={{ width: "2%" }}>SR.NO </th>
                <th>MON</th>
                <th>TUE</th>
                <th>WED</th>
                <th>THU</th>
                <th>FRE</th>
                <th>SAT</th>
              </tr>
              <tr>
                <td>ENGLISH</td>
                <td>ENGLISH</td>
                <td>Germany</td>
                <td>HISTORY</td>
                <td>Germany</td>
                <td>ENGLISH</td>
                <td>ENGLISH</td>
              </tr>
              <tr>
              <td>MATHS</td>
                <td>MATHS</td>
                <td>SCEINCE</td>
                <td>PT</td>
                <td>PT</td>
                <td>PT</td>
                <td>MATH</td>
              </tr>
              <tr>
              <td>SCIENCE</td>
                <td>PT</td>
                <td>MATH</td>
                <td>MATH</td>
                <td>SCIENCE</td>
                <td>MaTH</td>
              </tr>
              <tr>
              <td>HISTORY</td>
                <td>PT</td>
                <td>SCEINCE</td>
                <td>SCEINCE</td>
                <td>-</td>
                <td>UK</td>
                <td>Us</td>
              </tr>
            </table> */}
              <table class="table table-hover rounded-3 overflow-hidden">
                <thead className="bgcolordash  ">
                  <tr className=" text-center ">
                    <th scope="col"> Time </th>
                    <th >MON</th>
                    <th scope="col">TUES</th>
                    <th scope="col">WED</th>
                    <th scope="col">THURD</th>
                    <th scope="col">FRI</th>
                    <th scope='col' >SAT</th>
                  </tr>
                </thead>
                <tbody className='text-center' >
                  <tr>
                    <th scope="row">8:00-8:30</th>
                    <td>ENGLISH</td>
                    <td>ENGLISH</td>
                    <td>Germany</td>
                    <td>HISTORY</td>
                    <td>Germany</td>
                    <td>ENGLISH</td>

                  </tr>
                  <tr>
                    <th scope="row">8:30-9:30</th>
                    <td>ENGLISH</td>
                    <td>ENGLISH</td>
                    <td>Germany</td>
                    <td>HISTORY</td>
                    <td>Germany</td>
                    <td>ENGLISH</td>

                  </tr>
                  <tr>
                    <th scope="row">9:30-10:30</th>
                    <td>ENGLISH</td>
                    <td>ENGLISH</td>
                    <td>Germany</td>
                    <td>HISTORY</td>
                    <td>Germany</td>
                    <td>ENGLISH</td>

                  </tr>
                  <tr>
                    <th scope="row">10:30-11:30</th>
                    <td>SCIENCE</td>
                    <td>PT</td>
                    <td>MATH</td>
                    <td>MATH</td>
                    <td>SCIENCE</td>
                    <td>MaTH</td>

                  </tr>
                  <tr>
                    <th scope="row">11:30-12:15</th>
                    <td>SCIENCE</td>
                    <td>PT</td>
                    <td>MATH</td>
                    <td>MATH</td>
                    <td>SCIENCE</td>
                    <td>MaTH</td>

                  </tr>

        
                </tbody >

                <tr>
                  <th scope="row">11:30-12:15</th>
                  <td>SCIENCE</td>
                  <td>PT</td>
                  <td>MATH</td>
                  <td>MATH</td>
                  <td>SCIENCE</td>
                  <td>MaTH</td>

                </tr>
                <tr><th scope="row">11:30-12:15</th>
                  <td>SCIENCE</td>
                  <td>PT</td>
                  <td>MATH</td>
                  <td>MATH</td>
                  <td>SCIENCE</td>
                  <td>MaTH</td></tr>

                <tr>
                  <th scope="row">10:30-11:30</th>
                  <td>SCIENCE</td>
                  <td>PT</td>
                  <td>MATH</td>
                  <td>MATH</td>
                  <td>SCIENCE</td>
                  <td>MaTH</td>

                </tr>
                <tr>
                  <th scope="row">10:30-11:30</th>
                  <td>SCIENCE</td>
                  <td>PT</td>
                  <td>MATH</td>
                  <td>MATH</td>
                  <td>SCIENCE</td>
                  <td>MaTH</td>

                </tr>





              </table>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Timetable