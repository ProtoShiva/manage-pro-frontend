import React, { useEffect } from "react"
import Sidebar from "./Sidebar"
import MainContainer from "./MainContainer"
import TodoModal from "./TodoModal"
import { useDispatch } from "react-redux"
import { getAllUserTasks } from "../apis/task"
import { getAllTasks } from "../redux/slices/taskSlices"

const Dashboard = () => {
  const dispatch = useDispatch()

  async function getUserTasks() {
    const res = await getAllUserTasks()
    dispatch(getAllTasks(res))
  }

  useEffect(() => {
    getUserTasks()
  }, [])
  return (
    <div className="flex gap-3">
      <Sidebar />
      <MainContainer />
      <TodoModal />
    </div>
  )
}

export default Dashboard
