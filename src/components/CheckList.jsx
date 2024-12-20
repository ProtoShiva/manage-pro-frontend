import React from "react"
import { MdDelete } from "react-icons/md"

const CheckList = () => {
  return (
    <div className="flex items-center gap-2 border-s-orange-400 mb-4">
      <input type="checkbox" class="checkbox checkbox-warning" />
      <input type="text" placeholder="Add a task" className="w-full p-2 " />
      <MdDelete className="text-xl text-red-600 cursor-pointer" />
    </div>
  )
}

export default CheckList
