import React, { useState } from "react"
import { FaRegClipboard } from "react-icons/fa"
import { IoLogoDropbox, IoLogOut } from "react-icons/io5"
import { MdOutlineAnalytics } from "react-icons/md"
import { RiSettings2Line } from "react-icons/ri"
import { Link } from "react-router-dom"
import LogoutModal from "./LogoutModal"
const Sidebar = () => {
  return (
    <div className="w-[12%] h-screen flex flex-col justify-between p-2">
      <main>
        <div className="flex items-center gap-2 mb-6 text-xl cursor-pointer ">
          <IoLogoDropbox />
          <h1>Pro Manage</h1>
        </div>
        <ul className="flex flex-col gap-3">
          <Link
            to="/dashboard"
            className="cursor-pointer flex gap-2 items-center"
          >
            <span>
              <FaRegClipboard />
            </span>
            Board
          </Link>
          <Link
            to="/analytics"
            className="cursor-pointer flex gap-2 items-center"
          >
            <span>
              <MdOutlineAnalytics />
            </span>
            Analytics
          </Link>
        </ul>
      </main>
      <footer className="flex gap-2 text-xl justify-center text-red-500 items-center">
        <span>
          <IoLogOut className="cursor-pointer size-6" />
        </span>
        <button
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          Logout
        </button>
      </footer>
      <LogoutModal />
    </div>
  )
}

export default Sidebar
