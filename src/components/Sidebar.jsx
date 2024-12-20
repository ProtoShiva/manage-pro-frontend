import React from "react"
import { FaRegClipboard } from "react-icons/fa"
import { IoLogoDropbox, IoLogOut } from "react-icons/io5"
import { MdOutlineAnalytics } from "react-icons/md"
import { RiSettings2Line } from "react-icons/ri"
const Sidebar = () => {
  return (
    <div className="w-[12%] h-screen flex flex-col justify-between p-2">
      <main>
        <div className="flex items-center gap-2 mb-6 text-xl cursor-pointer ">
          <IoLogoDropbox />
          <h1>Pro Manage</h1>
        </div>
        <ul className="flex flex-col gap-3">
          <li className="cursor-pointer flex gap-2 items-center">
            <span>
              <FaRegClipboard />
            </span>
            Board
          </li>
          <li className="cursor-pointer flex gap-2 items-center">
            <span>
              <MdOutlineAnalytics />
            </span>
            Analytics
          </li>
          <li className="cursor-pointer flex gap-2 items-center">
            <span>
              <RiSettings2Line />
            </span>
            Settings
          </li>
        </ul>
      </main>
      <footer className="flex gap-2 items-center">
        <span>
          <IoLogOut />
        </span>
        <button>Logout</button>
      </footer>
    </div>
  )
}

export default Sidebar
