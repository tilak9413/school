import React from 'react'

function InputComp(props) {
  return (
    <div className="compo d-flex flex-column">
          <label htmlFor="title ">{props.name}</label>
          <input type="text"  className='inputit'  />
    </div>
  )
}
export default InputComp
