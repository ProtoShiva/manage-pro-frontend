import React from "react"
import { VscCollapseAll } from "react-icons/vsc"
import TodoCard from "./TodoCard"
import { IoIosAdd } from "react-icons/io"

const TodoBoard = () => {
  return (
    <div className="h-[80vh] w-96 overflow-y-auto">
      <header className="flex justify-between items-center p-3">
        <p>Backlog</p>
        <span className="cursor-pointer flex gap-2">
          <IoIosAdd
            onClick={() => document.getElementById("my_modal_1").showModal()}
          />
          <VscCollapseAll />
        </span>
      </header>
      <main className="px-2">
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </main>
    </div>
  )
}

export default TodoBoard
