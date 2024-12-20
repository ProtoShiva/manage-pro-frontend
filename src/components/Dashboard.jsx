import React from "react"
import Sidebar from "./Sidebar"
import MainContainer from "./MainContainer"

const Dashboard = () => {
  return (
    <div className="flex gap-4">
      <Sidebar />
      <MainContainer />
    </div>
  )
}

export default Dashboard
