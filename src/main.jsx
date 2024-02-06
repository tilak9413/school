import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Login from "./components/Login";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />} >
        
      </Route>
      <Route path='login' element={<Login />} />
    </>

)
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />

)
