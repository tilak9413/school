import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Login from "./components/Login";
import Home from './components/home.jsx'
import Register from './components/Register.jsx'
import About from './components/About.jsx'
import Contextprovider from './context/loginContext/contextprovider.jsx'
import Dashborad from './components/Dashborad.jsx'
import Office from './components/office.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />} >   
         <Route path='dashboard' element={<Dashborad />} />
         <Route path='office' element={<Office />} />
       </Route>
      <Route path='login' element={<Login />} />
      <Route path='Register' element={<Register />} />
    </>

)
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Contextprovider>
  <RouterProvider router={router} />
  </Contextprovider>
  </>
)
