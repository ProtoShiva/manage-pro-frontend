import React from "react"
import CheckList from "./CheckList"
import { IoIosArrowDown } from "react-icons/io"

const TodoCard = () => {
  return (
    <div className="card bg-base-100 w-full shadow-xl mb-6">
      <div className="card-body">
        <h2 className="card-title">
          <p className="p-2 rounded-md text-center text-sm text-white w-4 bg-teal-400">
            HIGH PRIORITY
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
                  document.getElementById("my_modal_2").showModal()
                }
              >
                <a>Delete</a>
              </li>
            </ul>
          </div>
        </h2>

        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div>
          <h3 className="mb-2">
            Checklist <span>(1/3)</span>
          </h3>
          <CheckList />
        </div>
        <div className="card-actions justify-start">
          <div className="badge badge-error text-xs">March 12th</div>
          <div className="badge badge-outline cursor-pointer text-xs">
            BACKLOG
          </div>
          <div className="badge badge-outline cursor-pointer text-xs">
            PROGRESS
          </div>
          <div className="badge badge-outline cursor-pointer text-xs">DONE</div>
        </div>
      </div>
    </div>
  )
}

export default TodoCard
