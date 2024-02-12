import React from 'react'
import { useRef } from 'react';


function InputComp({name,placeholder,index}) {
  const inputRef = useRef(null);

  // Function to handle Enter key press
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default form submission behavior

      // Get all input fields in the form
      const inputs = Array.from(document.querySelectorAll('input'));

      // Find the index of the current input field
      const currentIndex = inputs.indexOf(event.target);

      // Find the next input field
      const nextInput = inputs[currentIndex + 1];

      if (nextInput) {
        nextInput.focus(); // Focus on the next input field
      }
    }
  };

  return (
    <div className="compo d-flex flex-column">
          <label htmlFor="title ">{name}</label>
          <input ref={inputRef} onKeyDown={handleKeyPress} type="text" placeholder={placeholder} className='inputit form-control'/>
    </div>
  )
}
export default InputComp
