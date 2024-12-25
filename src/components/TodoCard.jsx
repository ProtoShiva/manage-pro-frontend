import React, { useState } from "react"
import CheckList from "./CheckList"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import DeleteModal from "./DeleteModal"
import { useDispatch } from "react-redux"
import { getAllTasks } from "../redux/slices/taskSlices"
import { getAllUserTasks, updateStatus } from "../apis/task"
import DropDown from "./DropDown"

const TodoCard = ({ title, priority, dueDate, checkList, status, _id }) => {
  const [openCard, setOpenCard] = useState(false)
  const dispatch = useDispatch()
  const handleClick = async (id, status) => {
    await updateStatus(id, status)
    const res = await getAllUserTasks()
    dispatch(getAllTasks(res))
  }

  return (
    <div className="card bg-base-100 w-full shadow-xl mb-6">
      <div className="card-body">
        <h2 className="card-title">
          <p
            className={`p-2 rounded-md text-center text-sm text-white w-4 ${
              priority === "HIGH"
                ? "bg-red-500"
                : priority === "MODERATE"
                ? "bg-yellow-500"
                : "bg-green-500"
            }`}
          >
            {priority} PRIORITY
          </p>
          <div className="dropdown dropdown-left dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1">
              <IoIosArrowDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Edit</a>
              </li>
              <li>
                <a>Share</a>
              </li>
              <li
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                <a>Delete</a>
              </li>
            </ul>
          </div>
        </h2>

        <p className="text-xl font-semibold shadow-md p-2">{title}</p>
        <div>
          <div className="mb-2 flex items-center justify-between">
            <h3>
              Checklist
              <span className="mr-3">
                ({checkList.filter((list) => list.isCompleted === true).length}/
                {checkList.length})
              </span>
            </h3>

            <div className="btn" onClick={() => setOpenCard(!openCard)}>
              {openCard ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </div>
          </div>

          {openCard &&
            checkList.map((item) => (
              <CheckList key={item._id} {...item} priority={priority} />
            ))}
        </div>
        <div className="card-actions justify-start">
          <div className="badge badge-error text-xs">
            {dueDate.split("T")[0]}
          </div>
          {status === "backlog" ? (
            " "
          ) : (
            <div
              className="badge badge-outline cursor-pointer text-xs"
              onClick={() => handleClick(_id, "backlog")}
            >
              BACKLOG
            </div>
          )}

          {status === "inProgress" ? (
            " "
          ) : (
            <div
              className="badge badge-outline cursor-pointer text-xs"
              onClick={() => handleClick(_id, "inProgress")}
            >
              PROGRESS
            </div>
          )}
          {status === "done" ? (
            " "
          ) : (
            <div
              className="badge badge-outline cursor-pointer text-xs"
              onClick={() => handleClick(_id, "done")}
            >
              DONE
            </div>
          )}
          {status === "todo" ? (
            " "
          ) : (
            <div
              className="badge badge-outline cursor-pointer text-xs"
              onClick={() => handleClick(_id, "todo")}
            >
              TO DO
            </div>
          )}
        </div>
      </div>
      <DeleteModal id={_id} />
    </div>
  )
}

export default TodoCard
