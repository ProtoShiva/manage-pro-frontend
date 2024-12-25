import React, { useState } from "react"
import TodoCard from "./TodoCard"
import { IoIosAdd } from "react-icons/io"
import { useSelector } from "react-redux"

const TodoBoard = ({ name }) => {
  const [closeCards, setCloseAllCards] = useState(false)
  const fetchTasks = useSelector((store) => store.task.allTasks)

  return (
    <div className="h-[80vh] w-96 overflow-y-auto">
      <header className="flex justify-between items-center p-3">
        <p>{name}</p>
        <span className="cursor-pointer">
          {name === "todo" && (
            <IoIosAdd
              className="size-8"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            />
          )}
        </span>
      </header>
      <main className="px-2">
        {fetchTasks &&
          fetchTasks.map((card) => {
            if (card.status === name) {
              return <TodoCard key={card._id} {...card} />
            }
          })}
      </main>
    </div>
  )
}

export default TodoBoard
