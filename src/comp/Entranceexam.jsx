import React from 'react'

function Entranceexam() {
  return (
    <div className='m-3 '>
      <div className=''>
        <div >
          <h6 className='textcolor my-3 fw-semibold '>Entrance Exam Result :</h6>
          
          <div className='col-12  d-flex justify-content-center '>
            <div className="col-8  border rounded-3 overflow-hidden">
              <form className='px-2 '>
                <div className="row">
                  <div className="col p-0">
                    <p className="text-center bgcolordash m-0 p-2 fw-bold">
                      Entrance Exam Result
                    </p>
                  </div>
                </div>
                <div className=" row form-group p-2 d-flex align-items-center ">
                  <label for="exampleInputEmail1 " className='col-sm-3 m-0'>Enter Your Name :</label>
                  <input
                    type="text"
                    className="form-control w-70 col-sm-4 inputit "
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Your Name..."
                  />
                </div>
                <div className=" px-2 row  align-items-center">
                  <label for="exampleInputPassword1" className=' col-sm-3 m-0 col-auto'>Enter Your Roll no :</label>
                  <input
                    type="text"
                    className="form-control inputit   w-70 col-sm-4"
                    id="roll"
                    placeholder="Roll no..."
                  />
                </div>
<div className='d-flex  mx-3 mt-2 float-end'>
<button type="submit" class="btn btn-sm btn-success float-end  btn-primary">
                      reset
                    </button>
                <button type="submit" class="btn btn-sm btn-success  mx-3 btn-primary">
                      Submit
                    </button>
                    </div>
              </form>
            </div>
          </div>
        </div>
<hr />
        <div>
          <h6 className='textcolor my-3 fw-semibold '>Entrance Exam Schedule :</h6>
          <p ><big className='text-decoration-underline fw-medium'>Date and Time</big> :<span className='fs-5'> On Monday i.e. ( 22 / 01 / 2024 ) from 10:30 am to 12:30 pm .</span></p>
          <p ><big className='text-decoration-underline fw-medium'>Date and Time</big> :<span className='fs-5'> Online . At School’s  Official Website</span>(www.www.w...w)</p>
          <p ><big className='text-decoration-underline fw-medium'>Duration</big> :<span className='fs-5'> 2 Hours ( 120 Minutes )</span></p>
        </div>
      </div>

    </div>
  )
}

export default Entranceexam
