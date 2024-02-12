import React from 'react'
import '../assets/styledashboradcss/addmition.css'



function MeritList() {
  return (
    <div className='m-2 px-2 border shadow rounded'>
      <div>
        <h6 className='text-success my-3 fw-semibold '> Check Marit List :</h6>
        <form >
          <div className="row px-sm-5 mx-sm-5   ">
          <div className="d-flex gap-3 align-items-center col-sm-6  ">
            <label className='m-0 ' htmlFor="">Application No. :</label>
            <input type="text" placeholder='Enter Application No... '  className='inputit w-sm-50  '  />
          </div>

          <div className="d-flex gap-3 align-items-center col-sm-6 ">
            <label className='m-0' htmlFor="">Date of Birth : </label>
            <input type="text" placeholder='Enter Application No... '  className='inputit w-50'  />
          </div>

          <div className="d-flex gap-3 align-items-center col-sm-6 ">
            <label className='m-0' htmlFor="">Captcha Code :</label>
            <input type="text" placeholder='Enter Application No... '  className='inputit w-50'  />
          </div>
          </div>
        </form>
        <hr />
        
        <table class="table rounded bg-primary">
  <thead>
    <tr>
      <th >#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
  )
}

export default MeritList