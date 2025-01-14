import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
    const userName="recep"

  return userName==="recep" ? <Outlet/> : <Navigate to="/" />
}

export default PrivateRouter