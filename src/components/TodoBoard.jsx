import React from "react"
import { VscCollapseAll } from "react-icons/vsc"
import TodoCard from "./TodoCard"

const TodoBoard = () => {
  return (
    <div>
      <header className="flex justify-between items-center p-3">
        <p>Backlog</p>
        <span className="cursor-pointer">
          <VscCollapseAll />
        </span>
      </header>
      <main>
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </main>
    </div>
  )
}

export default TodoBoard
