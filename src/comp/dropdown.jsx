import React from 'react'

function Dropdown(props) {
  return (
    <select  name="cars" id="cars">
<option value="volvo">{props.value}</option>
<option value="saab">Saab</option>
<option value="mercedes">Mercedes</option>
<option value="audi">Audi</option>
</select>
  )
}

export default Dropdown