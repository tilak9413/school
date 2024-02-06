import React from 'react'
import { Outlet } from 'react-router-dom'


function home() {
  return (
    <div>
       <h1>hello</h1>
         <Outlet/>
    </div>
  )
}

export default home
