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
import '../assets/styledashboradcss/dashborad.css';



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
        <Navbar />
        {/* <div className='container' >
        <Welcome/>
        </div> */}

      </div>

      <div className='container-fluid  ' >
        <div className='col-sm-12 row p-3  d-flex  align-items-center justify-content-between' >
          <div className='col-sm-6 row cardgap justify-content-evenly gap-5 '>
          <div className='col-sm-5    bgcolordash   d-flex rounded-3 textcenter ' >
              <div className='d-flex align-items-center gap-2 card-height ' >
                <PiStudentFill className=' fs-3 ' /> <span>Total student : <span>5400</span></span>
              </div>
            </div>
            <div className='col-sm-5  bgcolordash h-100  d-flex rounded-3 textcenter ' >
              <div className='d-flex align-items-center gap-2 card-height ' >
                <PiStudentFill className=' fs-3 boder' /> <span>Total student : <span>5400</span></span>
              </div>

            </div>
          </div>
          <div className='col-sm-6  row justify-content-evenly columngap  ' >
            <div className='col-sm-5  border  bgcolordash h-100  d-flex rounded-3 textcenter ' >
              <div className='d-flex align-items-center gap-2 card-height ' >
                <PiStudentFill className=' fs-3 boder' /> <span>Total student : <span>5400</span></span>
              </div>

            </div>
            <div className='col-sm-5  bg-dark text-white rounded-3 h-100  d-flex textcenter ' >
              <div className='d-flex align-items-center card-height gap-2'>
                <FaChalkboardTeacher className='fs-3 boder' />  <span> Total teachers : <span> 64654</span> </span>
              </div>
            </div>
          </div>
          <div className="col-xl-8  chart-height inputedit1 mt-3  bg-white ">
            <Chart
              series={state.series}
              options={state.options}

              type="bar"
              width="800"
              height={300}
            />
          </div>
          <div className='col-sm-4 mt-3  '>
            <div className='   col-sm-12 border inputedit1     bg-white '>
              <div className=' d-flex  align-items-center justify-content-between col-sm-12 p-1 '>
                <span className=' fw-bold border-bottum' >Student</span>
                <select value="optionsState" className='formselect form-select '>
                  <option value="A">class 9</option>
                  <option value="B">Banana</option>
                  <option value="C">Cranberry</option>
                </select>
              </div>
              <div className='  cardt  align-items-center col-sm-12 d-flex justify-content-evenly '>
                <Doughnut className='p-4 '
                  data={data}
                  options={options}
                  width={200}
                  height={200}
                />
                <div className='  '>
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
          <div className='col-sm-4 bg-white celender mt-3 inputedit1   '>
            <div className='app h-25   '>
              <div className='calendar-container  '>
                <p className=' fw-bold border-bottum'>Calendar</p>
                <Calendar className="text-center"
                  onChange={setDate}
                  value={date}
                  selectRange={true}
                />
              </div>

            </div>
          </div>
          <div className='col-sm-8 mt-3  '>
            <div className='inputedit1 bg-white' >
              <div className='p-1'>
                <p className='fw-bold'>Notices:</p>
              </div>
              <div className='d-flex  gap-5 align-items-center ' >

                <div>
                  <ol className='d-grid gap-3'>
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
                  </ol>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Dashborad