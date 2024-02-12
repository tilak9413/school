
import React from 'react'

const Attendancestaff = (props) => {
    return (
        <>
            <div className="box-1 container-fluid mt-4 p-3 shadow border-4">
                <div className="row box-1">
                    <div className="col">
                        <h4 className='fs-4 fw-bold'>Mark Student Attendance</h4>
                        <div className="row mt-3 selectclass d-flex flex-wrap justify-content-between ">
                            <div className="col-lg-2 col-sm-8 col-md-4 d-flex flex-column ">
                                <label htmlFor="Select Class" className='fs-6 ms-4'>Select Class</label>
                                <select name="" className='selectbg-1 text-black' id="">
                                    <option value="">All Class</option>
                                    <option value="">1 Class</option>
                                    <option value="">2 Class</option>
                                    <option value="">3 Class</option>
                                    <option value="">4 Class</option>
                                    <option value="">5 Class</option>
                                    <option value="">6 Class</option>
                                    <option value="">7 Class</option>
                                    <option value="">8 Class</option>
                                    <option value="">9 Class</option>
                                    <option value="">10 Class</option>
                                    <option value="">11 Class</option>
                                    <option value="">12 Class</option>
                                </select>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-8  d-flex flex-column">
                                <label htmlFor="Select Class" className='fs-6 '>Choose Date to mark attendance</label>
                                <div className="row">
                                    <div className="col d-flex align-items-center">

                                        <input type="date" className='inputdate selectbg-2 text-black-100 w-75' id="html" />
                                        <button for="html" className='ps-3 datebtn  pb-2 pe-3 ms-1 rounded-2  text-white fw-5 '>Load</button>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-5 col-2"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid rounded-3 p-3 mt-4 box-2 shadow border-2">
    

                <div className="row ">
                    <div className="col-lg-11 d-flex flex-column flex-wrap   justify-content-around">
                        <h4 className=' mt-4 ms-2 fs-4 fw-bold'>Students Attendance List</h4>

                        <div className="row w-lg-50 w-md-75 w-sm-75">
                            <p style={{ Color: "#3B3B3B" }} className=' opacity-75 text-left text-font'>Below  is  the  list  of  students  of  selected  class.
                                you  are  going  to  marks  class  Attendance  for  25 - Jan - 2023 .</p>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="row mt-3  selectclass  ">
                                    <div className="col-lg-2 col-sm-12 ms-2 d-flex flex-column">
                                        <select name="" className='selectbg-1 text-black' id="">
                                            <option value="">Select Section</option>
                                            <option value="">1 Class</option>
                                            <option value="">2 Class</option>
                                            <option value="">3 Class</option>
                                            <option value="">4 Class</option>
                                            <option value="">5 Class</option>
                                            <option value="">6 Class</option>
                                            <option value="">7 Class</option>
                                            <option value="">8 Class</option>
                                            <option value="">9 Class</option>
                                            <option value="">10 Class</option>
                                            <option value="">11 Class</option>
                                            <option value="">12 Class</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-4 col-sm-12 ms-5 d-flex justify-content-center col-md-6  d-flex flex-column">
                                        <div className="row">
                                            <div className="col d-flex align-items-center">

                                                <input type="text" placeholder='Search For Student' className='inputdate selectbg-2 text-black-100 w-75' id="html" />
                                                <button for="html" className='ps-3 datebtn  pb-2 pe-3 ms-1 rounded-2  text-white fw-5 '>Search</button>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-4 col-sm-12 col-md-6 d-flex ms-5 d-flex justify-content-center">
                                        <select name="" className='select-all-mark rounded-3' id="">
                                            <option className='nocolor' value="">Mark All Attendance</option>
                                            <option className='nocolor' value="">29</option>
                                            <option className='nocolor' value="">34</option>
                                            <option className='nocolor' value="">93</option>
                                            <option className='nocolor' value="">77</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='container-fluid p-0 mt-5 '>
                            <div className='row '>
                                <div>
                                    <table className='table bg-white ' >
                                        <tr>
                                            <th scope="col">Roll No</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Father Name</th>
                                            <th scope="col">Class</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Select Status</th>
                                        </tr>
                                        <tr>
                                            <td scope="row">1</td>
                                            <td><img className='profileimg p-0' src="public/image/profile.png" alt="" /> Mohit Kumar</td>
                                            <td>Mohit Kumar</td>
                                            <td>9 th</td>
                                            <td ><button className='status bg-success'>Present</button></td>
                                            <td><button className=' text-success fw-bold'>Present</button><button className=' text-danger fw-bold'>Absent</button><button className='text-primary fw-bold'>Half Day</button></td>
                                        </tr>
                                        <tr>
                                            <td scope="row">2</td>
                                            <td><img className='profileimg p-0' src="public/image/profile.png" alt="" />Mohit Kumar</td>
                                            <td>Mohit Kumar</td>
                                            <td>9 th</td>
                                            <td ><button className='status bg-success'>Present</button></td>
                                            <td><button className=' text-success fw-bold'>Present</button><button className='text-danger fw-bold'>Absent</button><button className='text-primary fw-bold'>Half Day</button></td>
                                        </tr>
                                        <tr>
                                            <td scope="row">3</td>
                                            <td><img className='profileimg p-0' src="public/image/profile.png" alt="" />Mohit Kumar</td>
                                            <td>Mohit Kumar</td>
                                            <td>9 th</td>
                                            <td ><button className='AbsentStatus bg-danger'>Absent</button></td>
                                            <td><button className=' text-success fw-bold'>Present</button><button className='text-danger fw-bold'>Absent</button><button className='text-primary fw-bold'>Half Day</button></td>
                                        </tr>
                                        <tr>
                                            <td scope="row">4</td>
                                            <td><img className='profileimg p-0' src="public/image/profile.png" alt="" />Mohit Kumar</td>
                                            <td>Mohit Kumar</td>
                                            <td>9 th</td>
                                            <td ><button className='status bg-success'>Present</button></td>
                                            <td><button className='text-success fw-bold'>Present</button><button className='text-danger fw-bold'>Absent</button><button className='text-primary fw-bold'>Half Day</button></td>
                                        </tr>
                                        <tr>
                                            <td scope="row">5</td>
                                            <td><img className='profileimg p-0' src="public/image/profile.png" alt="" />Mohit Kumar</td>
                                            <td>Mohit Kumar</td>
                                            <td>9 th</td>
                                            <td ><button className='status bg-success'>Present</button></td>
                                            <td><button className='text-success fw-bold'>Present</button><button className='text-danger fw-bold'>Absent</button><button className='text-primary fw-bold'>Half Day</button></td>
                                        </tr>

                                    </table>
                                </div>

                            </div>
                        </div>





                    </div>

                </div>

            </div>
            

        </>

    )
}

export default Attendancestaff

