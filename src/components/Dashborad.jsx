import React from 'react'
import Navbar from '../comp/Navbar';
import Welcome from '../comp/Welcome';
import { MdEmail } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { PiStudentFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Doughnut } from 'react-chartjs-2';
import { Chart as chartJS, ArcElement, Legend, Tooltip } from 'chart.js';
import Calendar from 'react-calendar';
// import React, { useState } from "react";
import Chart from "react-apexcharts";



function Dashborad() {


  const [state, setState] = React.useState({
    options: {
      colors: ["#81a4ff", "black"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "People Born",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "People Died",
        data: [3, 60, 35, 80, 49, 70, 20, 81],
      },
    ],
  });


  const [date, setDate] = React.useState(new Date());
  chartJS.register(
    ArcElement,
    Tooltip,
    Legend,
  )
  const data = {
    lable: ['Girls', 'boys'],
    datasets: [
      {
        label: 'Girls',
        label: " boys",
        data: [10, 20],
        backgroundColor: [
          'black',
          "#81a4ff"
        ],
        bodercolror: [
          'rgba(255, 99, 132, 1)',
        ]
      }
    ]
  }
  const options = {

  }
  return (
    <>
      <div className=' container-fluid p-0 m-0 col-sm-12  '>
        {/* <div className='' >
          <div className=" col-sm-12 w-100 bgcolordash border   ">
            <div className='row  dashcolor text-end'>
              <ul className='d-flex justify-content-end gap-5 fs-3 list-items'>
                <li >
                  <MdEmail className='iconcolor text-white' />
                </li>
                <li><IoMdNotifications className='iconcolor text-white' /></li>
                <li className='mx-4' ><FaUserCircle className='iconcolo text-white' /></li>
              </ul>
            </div>
          </div>
        </div> */}
        <Navbar/>
        <Welcome/>
        {/* <div className='container col-sm-12 padding-top ' >
          <div className='col-sm-12 row border rounded-4 bgcolordash '>
            <div className='top' >
              <p className='fw-bold' >welcome back tilak kumar</p>
            </div>
          </div>
        </div> */}
      </div>
      <div className='container padding-top' >
        <div className='col-sm-12'>
          <div className=' row col-sm-12  d-flex '>
            <div className='col-sm-5 p-2' >
              <div className='d-flex align-items-center bg-white  border inputedit1 '>
                <input className='inputedit w-100 ' type="text" placeholder='Search' />
                <IoIosSearch className=' fontsizeicon fw-bold' />
              </div>
            </div>
            <div className='col-sm-7  gap-5 row ' >
              <div className='col-sm-4 bgcolordash h-100  d-flex rounded-3 textcenter ' >
                <div className='d-flex align-items-center gap-2 ' >
                  <PiStudentFill className=' fs-3 boder' /> <span>Total student <span>5400</span></span>
                </div>

              </div>
              <div className='col-sm-4 bg-dark text-white rounded-3 h-100  d-flex textcenter ' >
                <div className='d-flex align-items-center gap-2'>
                  <FaChalkboardTeacher className='fs-3 boder' />  <span> Total teachers</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      <div className='container-fluid' >
        <div className='row col-sm-12 columsgap p-3' >
          <div className='col-sm-5 border inputedit1   bg-white  d-flex'>
            <div className='  col-sm-12 '>
              <div className=' d-flex  align-items-center justify-content-between col-sm-12 p-1 '>
                <span className=' fw-bold border-bottum' >Student</span>
                <select value="optionsState" className='formselect form-select '>
                  <option value="A">class 9</option>
                  <option value="B">Banana</option>
                  <option value="C">Cranberry</option>
                </select>
              </div>
              <div className=' mb-4 h col-sm-12 d-flex justify-content-evenly  gap-5 '>
                <Doughnut
                  data={data}
                  options={options}
                />
                <div className=' p-4 '>
                  <div className='d-flex gap-1'>
                    <div className='douth1   mt'></div><p className='fs-5' >  Girls:  <span>20</span></p>
                  </div>
                  <div className='d-flex gap-1'>
                    <div className='douth mt'></div> <p className='fs-5' >Boys:  <span>50</span> </p>
                  </div>
                </div>
              </div>

            </div>


          </div>
          <div className='col-sm-5 border bg-white inputedit1 '>
            <div className='app w-100 '>
              <div className='calendar-container p-2 '>
                <p className=' fw-bold border-bottum'>Calendar</p>
                <Calendar className="text-center"
                  onChange={setDate}
                  value={date}
                  selectRange={true}
                />
              </div>
              {date.length > 0 ? (
                <p className='text-center'>
                  <span className='bold'>Start:</span>{' '}
                  {date[0].toDateString()}
                  &nbsp;|&nbsp;
                  <span className='bold'>End:</span> {date[1].toDateString()}
                </p>
              )
                : (
                  <p className='text-center'>
                    <span className='bold'>Default selected date:</span>{' '}
                    {date.toDateString()}
                  </p>
                )}
            </div>

          </div>

        </div>
        <div className='container col-sm-12'>
    <div className='row  notegap '>
    <div className="col-md-5 inputedit1 ">
        <Chart
           series={state.series}
          options={state.options}
       
          type="bar"
          width="520"
          height={220}
        />
      </div>
      <div className='col-md-5 border inputedit1 p-3' >
        <div>
          <p className='fw-bold'>Notices:</p>
        </div>
        <div>
          <ol className='d-grid gap-3' >
            <li>
              School Annual Function on 20 Dec 2022 
            </li>
            <li>
              School Annual Function on 20 Dec 2022
            </li>
            <li>
              School Annual Function on 20 Dec 2022
            </li>
            <li>
              School Annual Function on 20 Dec 2022
            </li>
            <li>
              School Annual Function on 20 Dec 2022
            </li>
            <li>
              School Annual Function on 20 Dec 2022
            </li>
            <li>
              School Annual Function on 20 Dec 2022
            </li>
          </ol>
        </div>

      </div>
    </div>
   </div>
      </div>
  
     
      <div>

      </div>
    </>

  )
}

export default Dashborad