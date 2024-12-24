import React from "react"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
  const isLoggedIn = ""
  return isLoggedIn === "true" ? <Outlet /> : <Navigate to="login" />
}

export default ProtectedRoute
