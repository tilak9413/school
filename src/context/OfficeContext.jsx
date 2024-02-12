import { createContext, useState } from "react";
import { Provider } from "react";
export const OfficeContext = createContext();

export function OfficeContextProvider({children}){

  const [officeindex , setofficeindex] = useState(0)

  return (
<OfficeContext.Provider value={{officeindex,setofficeindex}}>

{children}

  </OfficeContext.Provider>
  )
  
}