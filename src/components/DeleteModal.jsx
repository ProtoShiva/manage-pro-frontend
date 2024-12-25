import React from "react"
import { deleteCard, getAllUserTasks } from "../apis/task"
import { getAllTasks } from "../redux/slices/taskSlices"
import { useDispatch } from "react-redux"

const DeleteModal = ({ id }) => {
  const dispatch = useDispatch()

  const handleDelete = async (id) => {
    await deleteCard(id)
    const res = await getAllUserTasks()
    dispatch(getAllTasks(res))
  }
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <p className="py-4 text-xl">Are you Sure you want to Delete?</p>
        <div className="modal-action">
          <form method="dialog" className="flex gap-3">
            <button className="btn btn-error" onClick={() => handleDelete(id)}>
              Yes, Delete
            </button>
            <button className="btn btn-outline btn-success">Cancel</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default DeleteModal
