import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>
}

export default AppContext
