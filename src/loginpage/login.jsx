import React from 'react'

import '../App.css'
function Login() {
  return (
    <div className="container-fluid">
    <div className="login-container row col-sm-12">
      <div className="left col-sm-6">
        <img src="public\image\WhatsApp Image 2024-01-17 at 10.48.14_ab26d616.jpg" alt="" />
      </div>
      <div className="right">
        <div className="buttons">
          <button >LOGIN</button>
          <button>REGISTER</button>
        </div>
        <h1 className='fw-bold'>WELCOME</h1>
        <p>Please Log in to your Account</p>
        <div className="input-group">
          <input type="email" placeholder="Username or E-mail" />
        </div>
        <div className="input-group">
          <input type="password" placeholder="Password" />
        </div>
        <div className="forgot-password">
          <a href="#" id="a-tag">Forgot Password?</a>
          <button id="ok-btn">OK</button>
        </div>
        <button id="btn">Register your School in our App</button>
        <a href="#" id="a-tag" className="a">Terms and Conditions & Privacy Policy</a>
      </div>
    </div>
  </div>
  )
}
export default Login