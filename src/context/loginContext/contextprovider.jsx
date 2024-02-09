import React, { createContext, useState } from 'react'
import Usercontext from './createcontext';// changed the file name to match the context object
import { LuShoppingCart } from "react-icons/lu";

function Contextprovider({ children }) {

    
    const [Login, setLogin] = useState({
        email : " ",
        password : ""
    })

    const [Register, setRegister] = useState({
        name : "" ,
        email : "",
        password : ""
    })
    


    return (
      <Usercontext.Provider  value={{Login,setLogin,Register,setRegister}}>
        {children}
      </Usercontext.Provider>
    )
  }
  export default Contextprovider