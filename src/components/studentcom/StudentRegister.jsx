import React from 'react'
import InputComp from '../../comp/InputComp'
import Dropdown from '../../comp/dropdown'
function StudentRegister() {
  return (
    <>
    <div className='container-fluid i' >
        <div className='row col-sm-12 '>
            <div className='col-sm-3 '>
            <Dropdown   value="select class" className="inputedit" />
            </div>
            <div className='col-sm-3'>
            <Dropdown   value="select class" />
            </div>
        <div className='col-sm-5' >
          <input type="text" className='form-control' placeholder="search student" />

        </div>
        </div>

    </div>
    
    </>
  )
}

export default StudentRegister