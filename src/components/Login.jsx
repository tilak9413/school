import React from 'react'
import { useContext } from 'react';
import Usercontext from '../context/loginContext/createcontext';
import { Link } from 'react-router-dom';
const Login = () => {

  const {Login,setLogin } = useContext(Usercontext);

  function submithandle(e)
  {
    e.preventDefault();
    console.log(Login)
  }
  return (
    <>
      <div className='container-fluid' >
        <div className="container">
          <div style={{ height: "100vh" }} className='row align-items-center justify-content-center'>
            <div className=" row login-container rounded-4  col-sm-12 p-5 ">
              <div style={{ placeItems: "center" }} className=" col-xl-6 left">
                <img className='img-fluid' src="public\image\WhatsApp Image 2024-01-17 at 10.48.14_ab26d616.jpg" alt="" />
              </div>
              <div className="col-6 p-md-4 col-md-12 col-12 col-xl-6 height">
                <div className="buttons d-flex justify-content-between">
                  <button style={{ backgroundColor: "#eee0b1" }} className='btn ' > {open}LOGIN</button>
                  <button className='btn'><Link to='/register'>Register</Link></button>
                </div>
                <h1 className='fw-bold'>WELCOME
                </h1>
                <p>Please Log in to your Account</p>
                <form onSubmit={submithandle}> 
                <div className="input-group">
                  <input type="email" placeholder="Username or E-mail"
                    value={Login.email}
                    onChange={(e) =>{
                      setLogin({
                        ...Login,
                        email : e.target.value
                      })
                    } } />
                </div>
                <div className="input-group">
                  <input type="password"
                   value={Login.password}
                   onChange={(e) =>{
                    setLogin({
                      ...Login,
                      password : e.target.value
                    })
                   } }
                  placeholder="Password" />
                </div>
                <div className="forgot-password">
                  <a href="#" id="a-tag">Forgot Password?</a>
                  <button type='submit' id="ok-btn">OK</button>
                </div>
                </form>
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
