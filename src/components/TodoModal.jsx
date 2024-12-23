import React from "react"
import CheckList from "./CheckList"

const TodoModal = () => {
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col gap-5">
          <div>
            <h3 className="mb-3">Title</h3>
            <input
              type="text"
              placeholder="Enter Task Title..."
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div>
            <h3 className="mb-3">Select Priority</h3>
            <div className="flex justify-between">
              <button className="btn btn-outline btn-success">
                LOW PRIORITY
              </button>
              <button className="btn btn-outline btn-warning">
                MODERATE PRIORITY
              </button>
              <button className="btn btn-outline btn-error">
                HIGH PRIORITY
              </button>
            </div>
          </div>

          <div>
            <h3 className="mb-2">
              Checklist <span>(0/0)</span>
            </h3>
            <button className="btn btn-outline btn-info mb-3">Add +</button>
            <div className="max-h-44 overflow-y-auto p-2">
              <CheckList />
              <CheckList />
              <CheckList />
              <CheckList />
            </div>
          </div>

          <div className="flex justify-between">
            <input
              className="btn btn-outline"
              type="date"
              placeholder="Select Due Date"
            />

            <div className="flex gap-2">
              <button className="btn btn-outline btn-secondary">Cancel</button>
              <button className="btn btn-outline btn-accent">Save</button>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}

export default TodoModal
