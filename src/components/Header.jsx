import React from "react"
import { IoIosArrowDown } from "react-icons/io"

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-2">
        <p className="text-xl font-bold">Welcome! Himanshu</p>
        <p className="text-xl">12th Jan, 2024</p>
      </div>
      <div className="mt-4 flex justify-between">
        <h1 className="font-bold text-xl">Board</h1>
        <p className="flex gap-2 items-center">
          This Week
          <span className="cursor-pointer">
            <IoIosArrowDown />
          </span>
        </p>
      </div>
    </div>
  )
}

export default Header
