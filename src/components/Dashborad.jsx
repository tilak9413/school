import React from 'react'
import Navbar from '../comp/Navbar';
import { PiStudentFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Doughnut } from 'react-chartjs-2';
import { Chart as chartJS, ArcElement, Legend, Tooltip } from 'chart.js';
import Calendar from 'react-calendar';
// import React, { useState } from "react";
import Chart from "react-apexcharts";
import '../assets/styledashboradcss/dashborad.css';
import { IoPerson } from "react-icons/io5";


function Dashborad() {


  const [state, setState] = React.useState({
    options: {
      colors: ["#EEE0B1", "black"],
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
          "#EEE0B1"
        ],
        bodercolror: [
          'rgba(255, 99, 132, 1)',
        ],
        

      }
    ]
  }
  const options = {

  }
  return (
    <>

      <div className=' container-fluid p-0 m-0 col-sm-12  '>
        <Navbar />
      </div>

      <div className='container-fluid  p-0' >
        <div className='col-sm-12 p-2  d-flex  align-items-center justify-content-between' >
          <div className='col-sm-3   ' >
            <div className='me-2 d-flex rounded-3 textcenter'>
              <div style={{backgroundColor:"#EEE0B1"}} className='d-flex px-3  w-100 align-items-center text-dark justify-content-evenly gap-2  card-height' >
                <PiStudentFill className=' fs-3 ' /> <span className=' fw-bold text-dark '>Total student : <span>5400</span></span>
              </div>
              </div>
            </div>
           
            <div className='col-sm-3   ' >
            <div className=' fourbgcolorhead  mx-2 d-flex rounded-3 textcenter'>
              <div  style={{backgroundColor:"#280D3B"}} className='rounded-3 d-flex px-3  w-100 align-items-center justify-content-evenly gap-2 card-height' >
                <FaChalkboardTeacher className=' fs-3 ' /> <span className=' fw-bold '>Total Teachers  : <span>60</span></span>
              </div>
              </div>
            </div>

            <div className='col-sm-3   ' >
            <div className='mx-2 d-flex rounded-3 textcenter'>
              <div style={{backgroundColor:"#EEE0B1"}} className='d-flex px-3 text-dark w-100 align-items-center justify-content-evenly gap-2 card-height rounded-3' >
                <IoPerson className=' fs-3 ' /> <span className=' fw-bold '>Total Staff : <span>70</span></span>
              </div>
              </div>
            </div>
            
            <div className='col-sm-3   ' >
            <div className=' fourbgcolorhead   mx-2 d-flex rounded-3 textcenter'>
              <div  style={{backgroundColor:"#280D3B"}} className='d-flex px-3 w-100 align-items-center justify-content-evenly gap-2 card-height rounded-3' >
                <PiStudentFill className=' fs-3 ' /> <span className=' fw-bold '>Total student : <span>5400</span></span>
              </div>
              </div>
            </div>
          </div>
          </div>
          <div className='container-fluid'>
            <div className='row' >
            <div  className="col-xl-8 col-sm-5 col-md-6 col-12 media overflow-scroll chart-height inputedit1 mt-3  bg-white ">
            <Chart style={{width:"850px"}}  className="mediachange"
              series={state.series}
              options={state.options}

              type="bar"
              // width=""
              height={300}
            />
          </div>
          <div className='col-xl-4 col-sm-6 col-12 col-md-6  mt-3  '>
            <div className='   col-sm-12 border inputedit1     bg-white '>
              <div className=' d-flex  align-items-center justify-content-between col-sm-12 p-1 px-3 '>
                <span className=' fw-bold border-bottum' >Student</span>
                <select value="optionsState" className='formselect form-select '>
                  <option value="A">class 9</option>
                  <option value="B">Banana</option>
                  <option value="C">Cranberry</option>
                </select>
              </div>
              <div className='  cardt  grid align-items-center col-sm-12 d-flex justify-content-evenly '>
                <div >
                <Doughnut className='p-1 '
                  data={data}
                  options={options}
                  width={150}
                  height={150}
                />
                </div>
               
                <div className='  '>
                  <div className='d-flex gap-1 '>
                    <div className='douth1 d-none  mt'></div><p className='fs-5' >  Girls:  <span>20</span></p>
                  </div>
                  <div className='d-flex gap-1 '>
                    <div className='douth mt d-none'></div> <p className='fs-5' >Boys:  <span>50</span> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='col-sm-6 bg-white dispaly d-none celender mt-3 inputedit1   '>
            <div className='app h-25  '>
              <div className='calendar-container mheight  '>
                <p className=' fw-bold border-bottum px-2'>Calendar</p>
                <Calendar className="text-center"
                  onChange={setDate}
                  value={date}
                  selectRange={true}
                />
              </div>

            </div>
          </div> */}
            </div>
          </div>

        <div className='container-fluid'>
          <div className='row'>
          <div className='col-sm-4 px-3 changecelender bg-white celender mt-3 inputedit1   '>
            <div className='app   '>
              <div className='calendar-container'>
                <p className=' fw-bold border-bottum ps-1 pt-1'>Calendar</p>
                <Calendar className="text-center"
                  onChange={setDate}
                  value={date}
                  selectRange={true}
                />
              </div>

            </div>
          </div>
          <div className='col-sm-8 mt-3 celender media '>
            <div className='inputedit1 bg-white celender overflow-scroll' >
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