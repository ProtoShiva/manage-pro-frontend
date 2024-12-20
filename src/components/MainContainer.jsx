import React from "react"
import Header from "./Header"
import TodoBoard from "./TodoBoard"

const MainContainer = () => {
  return (
    <div className="w-[88%] p-2">
      <Header />
      <div className="grid grid-cols-4">
        <TodoBoard />
        <TodoBoard />
        <TodoBoard />
        <TodoBoard />
      </div>
    </div>
  )
}

export default MainContainer
