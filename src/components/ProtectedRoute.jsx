import React from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
  const isLoggedIn = useSelector((store) => store.user.userDetails)
  return isLoggedIn ? <Outlet /> : <Navigate to="login" />
}

export default ProtectedRoute
