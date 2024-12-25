import React from "react"
import { useSelector } from "react-redux"

const EditModal = ({ id }) => {
  const tasks = useSelector((store) => store.task.allTasks)

  const editTask = tasks.filter((item) => item._id === id)
  console.log(editTask)
  return (
    <dialog id="my_modal_10" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello {editTask.title}</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default EditModal
