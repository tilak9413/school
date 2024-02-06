import React from 'react'

const Login = () => {
  return (
    <>
    <div >
    <div className="container">
      <div style={{ height: "100vh" }} className='row align-items-center justify-content-center'>
      <div  className=" row login-container rounded-4  col-sm-12 p-5 ">
          <div style={{placeItems:"center"}} className=" col-sm-6 d-flex">
            <img className='img-fluid' src="public\image\WhatsApp Image 2024-01-17 at 10.48.14_ab26d616.jpg" alt="" />
          </div>
          <div className="col-sm-6 ">
            <div className="buttons d-flex justify-content-between">
              <button style={{ backgroundColor: "#eee0b1" }} className='btn ' >LOGIN</button>
              <button  className='btn'>REGISTER</button>
            </div>
            <h1>WELCOME hello</h1>
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
     
      </div>
    </div>
   
    </>
  )
}

export default Login;
