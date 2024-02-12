import React from 'react'
import InputComp from '../../comp/InputComp'
import Dropdown from '../../comp/dropdown'
import "../../assets/styledashboradcss/addmition.css";
// import '../../App.css'
function StudentRegister() {
  return (
    <>
      <div className='container-fluid  p-3 ' >
        <div className='row col-sm-12  justify-content-between '>
          <div className='col-sm-3 '>
            <Dropdown value="select class" className="w-100" />
          </div>
          <div className='col-sm-3'>
            <Dropdown className="w-100" value="select class" />
          </div>
          <div className='col-sm-5' >
            <input type="text" className='form-control' placeholder="search student" />
          </div>
        </div>
      </div>
      {/* *****************************************************************************************  */}
      <div className='container-fluid  ' >
        <div className='row col-sm-12 table position-relative  overflow-hidden border rounded-3 bg-white '>
          <div className=" p-0">
            <p className="text-center bgcolordash m-0 p-2 fw-bold">
              PERMISSION LIST
            </p>
          </div>
          <div className='row justify-content-center p-2  ' >
            <div className='col-sm-3  ' >
              <p className='lineheight m-0' >Name: <span>Tilak kumar</span> </p>
              <p className='m-0' >Blood Group: <span>O+</span> </p>
              <p className='m-0'>Father Name: <span>demo</span></p>
              <p className='m-0' >Mother Name: <span>demo</span></p>
              <p className='m-0' >D.O.B: <span>12-12-2xxx</span> </p>


            </div>
            <div className='col-sm-3'>
              <p className='m-0' >GR NO: <span>4583045 </span> </p>
              <p className='m-0'>Gender: <span>male</span> </p>
              <p className='m-0' >Profession: <span>Engineer</span> </p>
              <p className='m-0' >profession: <span>Doctor</span></p>
              <p className='m-0'>Class Teacher: <span>......</span> </p>
            </div>
            <div className='col-sm-3'>
              <p className='m-0'  >class: <span>9th</span> </p>
              <p className='m-0'>section: <span>A</span> </p>
              <p className='mt-0' >Phone ON : <span>9351990014</span></p>
              <p className='mt-0' >Father phone NO:<span>9413247458</span></p>

            </div>
            <div className='col-sm-3'>
              <div className=' col-sm-12 text-center  gap-5  d-grid ' >
                <div>
                  <img style={{ width: "100px", height: "120px" }} className='img-fluid ' src="public\image\th.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className=' col-sm-12  ' >
            <p>Address: <span>Nagar , Rajasthan-307001 .</span></p>
            <button style={{ width: "100px", bottom: "0" }} className='btn mx-3  bgcolordash text-white  end-0 position-absolute   ' >Edit</button>
          </div>
        </div>

      </div>

      <div className='container-fluid p-0  ' >
        <div className='row col-sm-12   '>
<div className="row">
          <div className="col">
            <table class="table table-hover rounded-3 overflow-hidden  col-sm-12">
              <thead className="bgcolordash  ">
                <tr   className=" text-center ">
                <th scope="col">SR.NO </th>
                <th >GR NO.</th>
                <th scope="col">Student Name</th>
                <th scope="col">Father Name</th>
                <th scope="col">Date Of Birth</th>
                <th scope="col">Blood Group</th>
                </tr>
              </thead>
              <tbody className='text-center' >
                <tr> 
                  <th scope="row">1</th>
                  <td>Maria Anders</td>
                <td>Germany</td>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Francisco Chang</td>
                <td>Mexico</td>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Roland Mendel</td>
                <td>Austria</td>
                <td>Ernst Handel</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Helen Bennett</td>
                <td>UK</td>
                <td>Island Trading</td>
                <td>Helen Bennett</td>
                <td>UK</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Yoshi Tannamuri</td>
                <td>Canada</td>
                <td>Laughing Bacchus Winecellars</td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        </div>
      </div>

    </>
  )
}

export default StudentRegister