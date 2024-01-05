// import React from 'react'

import { Outlet } from "react-router-dom"
import App from "../App"

function Layout() {
  return (
    <>
    <App/>
    <Outlet/>
    
    </>
  )
}

export default Layout