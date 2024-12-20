import React from "react"
import Sidebar from "./Sidebar"
import MainContainer from "./MainContainer"
import TodoModal from "./TodoModal"

const Dashboard = () => {
  return (
    <div className="flex gap-3">
      <Sidebar />
      <MainContainer />
      <TodoModal />
    </div>
  )
}

export default Dashboard
