import React from 'react'
import Dropdown from '../../comp/dropdown'
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
        <table className='table bg-white ' >
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
              </tr>
              <tr>
              <td>MATHS</td>
                <td>MATHS</td>
                <td>SCEINCE</td>
                <td>PT</td>
                <td>PT</td>
                <td>Mexico</td>
              </tr>
              <tr>
              <td>SCIENCE</td>
                <td>PT</td>
                <td>MATH</td>
                <td>MATH</td>
                <td>SCIENCE</td>
                <td>Austria</td>
              </tr>
              <tr>
              <td>HISTORY</td>
                <td>PT</td>
                <td>SCEINCE</td>
                <td>SCEINCE</td>
                <td>-</td>
                <td>UK</td>
              </tr>
              <tr>
                
                {/* <td>Yoshi Tannamuri</td> */}
                <td></td>
                <td>Laughing Bacchus Winecellars</td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
              </tr>
              <tr>
            
                {/* <td>Giovanni Rovelli</td> */}
                <td>Italy</td>
                <td>Magazzini Alimentari Riuniti</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
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