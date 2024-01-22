import React, { createContext, useState } from 'react'
import App from '../App';


export  const sideBarContext = createContext(null);

const SideBContext = ({children}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
    

  return (
    <sideBarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </sideBarContext.Provider>
  )
}

export default SideBContext