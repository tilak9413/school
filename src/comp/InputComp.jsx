import React from 'react'



function InputComp({name,placeholder,index}) {
  return (
    <div className="compo d-flex flex-column">
          <label htmlFor="title ">{name}</label>
          <input type="text" placeholder={placeholder} className='inputit form-control'  />
    </div>
  )
}
export default InputComp
