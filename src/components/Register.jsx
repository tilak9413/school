import React from 'react'
import { useContext } from 'react';
import Usercontext from '../context/loginContext/createcontext';
import { Link } from 'react-router-dom';

const Register = () => {
    const {Register,setRegister} = useContext(Usercontext)

    function submithandle()
    {
        console.log(Register)
    }

  return (
    <>
    <div className='container-flui' >
    <div className="container">
      <div style={{ height: "100vh" }} className='row align-items-center justify-content-center'>
      <div  className="  row login-container rounded-4  col-sm-12  h-75 ">
          <div style={{placeItems:"center"}} className=" d-flex col-xl-6 left">
            <img className='img-fluid' src="public\image\WhatsApp Image 2024-01-17 at 10.48.14_ab26d616.jpg" alt="" />
          </div>
          <div className="col-6 p-md-4 col-md-12 col-12 col-xl-6 height">
            <div className="buttons d-flex justify-content-between">
              <button  className='btn ' ><Link to="/Login"> LOGIN</Link></button>
              <button style={{ backgroundColor: "#eee0b1" }}  className='btn'>REGISTER</button>
            </div>
            <h1 className='fw-bold'>WELCOME
             </h1>
            <p>Please Register to your Account</p>
            <div className='d-grid gap-2  '>
                <form action="" onSubmit={submithandle}>
            <div className="input-group">
              <input  type="text"
                value={Register.name}
                onChange={(e) =>{
                    setRegister({
                   ...Register,
                   name : e.target.value
                 })
                } }
              placeholder="Enter your full Name" />
            </div>
            <div className="input-group">
              <input type="password"
              
              value={Register.email}
              onChange={(e) =>{
                setRegister({
                 ...Register,
                 email : e.target.value
               })
              } }
              placeholder="Enter E-mail Addresh" />
            </div>
             <div className="input-group ">
              <input type="password"
                value={Register.password}
                onChange={(e) =>{
                    setRegister({
                   ...Register,
                   password : e.target.value
                 })
                } }
              placeholder="Enter Password" />
            </div> 
            
         
            <div className="forgot-password mt-2">
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
   </div>
    </>
  )
}

export default Register;
