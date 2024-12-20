import React from "react"
import { VscCollapseAll } from "react-icons/vsc"
import TodoCard from "./TodoCard"
import { IoIosAdd } from "react-icons/io"
import TodoModal from "./TodoModal"

const TodoBoard = () => {
  return (
    <div>
      <header className="flex justify-between items-center p-3">
        <p>Backlog</p>
        <span className="cursor-pointer flex gap-2">
          <IoIosAdd
            onClick={() => document.getElementById("my_modal_2").showModal()}
          />

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
