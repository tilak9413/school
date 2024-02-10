import React from 'react'
import InputComp from '../comp/InputComp'
import '../assets/styledashboradcss/addmition.css'
import { useState } from 'react'
import '../../public/assets/css/style.css'

function Registration() {

    const [studentImage, setstudentImage] = useState("")
    const [studentSign, setstudentSign] = useState("")
  
    function getimage(e) {
      console.log(e.target.files[0])
      let file = e.target.files[0];
      let reader = new FileReader();
  
      reader.readAsDataURL(file);
  
      reader.addEventListener("load", function () {
        setstudentImage(reader.result)
      })
  
  
    }
  
  
    function getsign(e) {
      console.log(e.target.files[0])
      let file = e.target.files[0];
      let reader = new FileReader();
  
      reader.readAsDataURL(file);
  
      reader.addEventListener("load", function () {
        setstudentSign(reader.result)
      })
  
  
    }
  return (
    <>
       <h3 className='text-center text-decoration-underline my-3 pt-2 py-2 text-success '>Student Registration Form</h3>
        <div className='p-3 rounded m-3 shadow bg-white border'>

          <div className="row border-bottom pb-5">
            <span>Full Name</span>
            <div className="col-sm-4">
              <InputComp name='FIRST NAME' placeholder="Enter First Name" />
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
                <InputComp name='DATE OF BIRTH' placeholder="Enter Date of Birth  " />
              </div>
              <div className="col-sm-4">
                <InputComp name='PHONE NO.' placeholder="Enter Phone No." />
              </div>
              <div className="col-sm-4">
                <InputComp name='EMAIL ADDRESS' placeholder="Enter Email Address " />
              </div>
            </div>
            <div className="row  pt-3 ">
              <div className="col-sm-4">
                <InputComp name='GENDER' />
              </div>
              <div className="col-sm-4">
                <InputComp name='BLOOD GROUP' />
              </div>
              <div className="col-sm-4">
                <InputComp name='RELIGION' />
              </div>
            </div>
          </div>
          <div className="row border-bottom pb-3 pt-3 ">
            <div className="col-sm-12">
              <InputComp name='PRESENT ADDRESS' />
            </div>
            <div className="row mx-0 p-0  my-4">
              <div className="col-sm-4">
                <InputComp name='CITY' />
              </div>
              <div className="col-sm-4">
                <InputComp name='STATE' />
              </div>
              <div className="col-sm-4">
                <InputComp name='POSTAL/ZIP CODE' />
              </div>
            </div>
          </div>


          <div className="row border-bottom pb-3 pt-3 ">
            <div className="col-sm-12">
              <InputComp name='PERMANENT ADDRESS' />
            </div>
            <div className="row mx-0 p-0  my-4">
              <div className="col-sm-4">
                <InputComp name='CITY' />
              </div>
              <div className="col-sm-4">
                <InputComp name='STATE' />
              </div>
              <div className="col-sm-4">
                <InputComp name='POSTAL/ZIP CODE' />
              </div>
            </div>
          </div>

          <div className="pareent">
            <span>Parents / Guardians Details </span>

            <div className="row  pb-5">
              <div className="col-sm-4">
                <InputComp name='FIRST NAME' placeholder="Enter First Name" />
              </div>
              <div className="col-sm-4">
                <InputComp name=' LAST NAME' placeholder="Enter Last Name" />
              </div>
              <div className="col-sm-4">
                <InputComp name='CONTACT NO.' placeholder="Enter Contect No" />
              </div>
            </div>

            <div className="row border-bottom pb-5">
              <div className="col-sm-4">
                <InputComp name='EMAIL ADDRESS' placeholder="Enter Email Address" />
              </div>
              <div className="col-sm-4">
                <InputComp name='RELATION WITH STUDENT' placeholder="Enter Middle Name" />
              </div>
              <div className="col-sm-4">
                <InputComp name='PROFESSION' placeholder="Enter Last Name" />
              </div>
            </div>

            <div className="row   position-relative">
              <div className="col-sm-4 ">
                <button className='border px-5 py-1 my-2 rounded'  >
                  <input type="file" className='position-absolute pointer opacity-0 ' id='upload-photo' onChange={getimage} />
                  <span className='w-100 text-center'> Upload Image</span>

                </button>
                <div className='border imga w-75  my-4'>
                  {
                    studentImage ? <img src={studentImage} className='w-100 h-100 rounded p-1 ' alt="" /> : ""
                  }
                </div>

              </div>
              <div className="col-sm-4">
                <button className='border px-5 py-1 my-2 rounded'  >
                  <input type="file" className='position-absolute pointer opacity-0 ' id='upload-photo' onChange={getsign} />
                  <span className='w-100 text-center'> Upload Signature</span>

                </button>
                <div className='border imga w-75  my-4'>
                  {
                    studentImage ? <img src={studentSign} className='w-100 h-100 rounded p-1 ' alt="" /> : ""
                  }
                </div>
              
              </div>

              

            </div>
            <button className='btn btn-success'>Submit</button>
          </div>
        </div>
    </>
  )
}

export default Registration
