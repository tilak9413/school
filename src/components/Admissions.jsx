import React from 'react'
import InputComp from '../comp/InputComp'
import Navbar from '../comp/Navbar'
import { useLocation } from 'react-router-dom'


function Admissions() {

  const location = useLocation();
  console.log(location.pathname)
  return (
    <>
<Navbar/>
<div className="d-flex welcome-bar bgcolordash rounded p-2 mx-2">
  <span className='smallbolding border-end px-2'>Registation </span>
  <span className='smallbolding border-end px-2'>Entrance Exam</span>
  <span className='smallbolding px-2'>Merit List</span>

</div>
<h1 className='text-center text-decoration-underline my-3 pt-2 py-2 '>Student Registration Form</h1>
<div className='p-3 rounded m-3 border'>
 
      <div className="row border-bottom pb-5">
        <h5>Full Name</h5>
        <div className="col-sm-4">
          <InputComp name='FIRST NAME' placeholder="Enter First Name"  />
        </div>
        <div className="col-sm-4">
          <InputComp name='MIDDLE NAME' placeholder="Enter Middle Name" />
        </div>
        <div className="col-sm-4">
          <InputComp name='LAST NAME' placeholder="Enter Last Name" />
        </div>
      </div>

      <div className="bankingDetail position-relative pt-4   ">
        <div className="row">
          <div className="col-sm-4">
            <InputComp name='DATE OF BIRTH'placeholder="Enter Date of Birth  "  />
          </div>
          <div className="col-sm-4">
            <InputComp name='PHONE NO.' placeholder="Enter Phone No." />
          </div>
          <div className="col-sm-4">
            <InputComp name='EMAIL ADDRESS' placeholder="Enter Email Address " />
          </div>
        </div>
        <div className="row border-bottom pb-5 pt-3 ">
          <div className="col-sm-4">
            <InputComp name='GENDER'  />
          </div>
          <div className="col-sm-4">
            <InputComp name='BLOOD GROUP'  />
          </div>
          <div className="col-sm-4">
            <InputComp name='RELIGION'  />
          </div>
        </div>
      </div>
      <div className="row border-bottom pb-3 pt-3 ">
          <div className="col-sm-12">
            <InputComp name='PRESENT ADDRESS'  />
          </div>
          <div className="row mx-0 p-0  my-4">
          <div className="col-sm-4">
              <InputComp name='CITY'  />
            </div>
            <div className="col-sm-4">
              <InputComp name='STATE'  />
            </div>
            <div className="col-sm-4">
              <InputComp name='POSTAL/ZIP CODE' />
            </div>
            </div>
      </div>
     
     
      <div className="row border-bottom pb-3 pt-3 ">
          <div className="col-sm-12">
            <InputComp name='PRESENT ADDRESS'  />
          </div>
          <div className="row mx-0 p-0  my-4">
          <div className="col-sm-4">
              <InputComp name='CITY'  />
            </div>
            <div className="col-sm-4">
              <InputComp name='STATE'  />
            </div>
            <div className="col-sm-4">
              <InputComp name='POSTAL/ZIP CODE' />
            </div>
            </div>
      </div>
     
     <div className="pareent">
      <h5>Parents / Guardians Details </h5>

      <div className="row">
          <div className="col-sm-4">
            <InputComp name='DATE OF BIRTH'placeholder="Enter Date of Birth  "  />
          </div>
          <div className="col-sm-4">
            <InputComp name='PHONE NO.' placeholder="Enter Phone No." />
          </div>
          <div className="col-sm-4">
            <InputComp name='EMAIL ADDRESS' placeholder="Enter Email Address " />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <InputComp name='DATE OF BIRTH'placeholder="Enter Date of Birth  "  />
          </div>
          <div className="col-sm-4">
            <InputComp name='PHONE NO.' placeholder="Enter Phone No." />
          </div>
          <div className="col-sm-4">
            <InputComp name='EMAIL ADDRESS' placeholder="Enter Email Address " />
          </div>
        </div>
        
         <div className="row">
          <div className="col-sm-4">
            <InputComp name='DATE OF BIRTH'placeholder="Enter Date of Birth  "  />
          </div>
          <div className="col-sm-4">
            <InputComp name='PHONE NO.' placeholder="Enter Phone No." />
          </div>
          <div className="col-sm-4">
            <InputComp name='EMAIL ADDRESS' placeholder="Enter Email Address " />
          </div>
        </div>

     </div>
      </div>
      </>
      )
}

      export default Admissions