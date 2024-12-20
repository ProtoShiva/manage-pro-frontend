import React from "react"

const DeleteModal = () => {
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <p className="py-4 text-xl">Are you Sure you want to Delete?</p>
        <div className="modal-action">
          <form method="dialog" className="flex gap-3">
            <button className="btn btn-error">Yes, Delete</button>
            <button className="btn btn-outline btn-success">Cancel</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default DeleteModal
