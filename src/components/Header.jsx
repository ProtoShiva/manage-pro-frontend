import React from "react"
import { IoIosArrowDown } from "react-icons/io"
import { useSelector } from "react-redux"
import { format } from "date-fns"

const Header = () => {
  const date = new Date()
  const formattedDate = format(date, "do MMM yyyy")
  const userName = useSelector((store) => store.user.userDetails)
  return (
    <div className="sticky left-0">
      <div className="flex justify-between items-center mt-2">
        <p className="text-xl font-bold">Welcome! {userName?.name}</p>
        <p className="text-xl">{formattedDate}</p>
      </div>
      <div className="mt-8 flex justify-between">
        <h1 className="font-bold text-xl">Board</h1>
        <div className="dropdown dropdown-bottom dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-1 flex gap-2">
            <p>This week</p>
            <IoIosArrowDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box -z-20 relative w-52 p-2 shadow"
          >
            <li>
              <a>Today</a>
            </li>
            <li>
              <a>This Week</a>
            </li>
            <li>
              <a>This Month</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
