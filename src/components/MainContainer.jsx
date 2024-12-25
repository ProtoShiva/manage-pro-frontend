import React from "react"
import Header from "./Header"
import TodoBoard from "./TodoBoard"

const MainContainer = () => {
  return (
    <div className="p-2 w-[88%] h-screen overflow-x-scroll overflow-y-hidden">
      <Header />
      <div className="flex gap-2 min-w-fit">
        <TodoBoard name="backlog" />
        <TodoBoard name="todo" />
        <TodoBoard name="inProgress" />
        <TodoBoard name="done" />
      </div>
    </div>
  )
}

export default MainContainer
