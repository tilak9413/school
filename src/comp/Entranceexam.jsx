import React from 'react'

function Entranceexam() {
    return (
        <div className='m-3  p-2 inputedit1 bg-white border'>
            <div className='px-2'>
                <div>
                    <h5 className='text-decoration-underline my-3 fw-semibold'>Entrance Exam Schedule :</h5>
                    <p ><big className='text-decoration-underline fw-medium'>Date and Time</big> :<span className='fs-5'> On Monday i.e. ( 22 / 01 / 2024 ) from 10:30 am to 12:30 pm .</span></p>
                    <p ><big className='text-decoration-underline fw-medium'>Date and Time</big> :<span className='fs-5'> Online . At School’s  Official Website</span>(www.www.w...w)</p>
                    <p ><big className='text-decoration-underline fw-medium'>Duration</big> :<span className='fs-5'> 2 Hours ( 120 Minutes )</span></p>
                </div>
                <hr />


                <div>
                <h5 className='text-decoration-underline my-3 fw-semibold'>Entrance Exam Result :</h5>
<div className="col-9 border rounded-3 overflow-hidden">
      <form>
              <div className="row">
                <div className="col p-0">
                  <p className="text-center bgcolordash m-0 p-2 fw-bold">
                    Entrance Exam Result
                  </p>
                </div>
              </div>
              <div className=" row form-group p-2  ">
                <label for="exampleInputEmail1 " className='col-auto'>Enter Your Name :</label>
                <input
                  type="text"
                  className="form-control w-75 col-sm-8"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Your Name..."
                />
              </div>
              <div className="form-group p-2 row ">
                <label for="exampleInputPassword1" className='col-auto'>Enter Your Roll no :</label>
                <input
                  type="text"
                  className="form-control w-75 col-sm-8"
                  id="roll"
                  placeholder="Roll no..."
                />
              </div>
              <div className="row align-items-center">
                <div className="col justify-content-end d-flex">
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
</div>
                </div>
            </div>

        </div>
    )
}

export default Entranceexam
