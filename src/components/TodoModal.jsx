import { useState } from "react"
import { MdDelete } from "react-icons/md"
import { useDispatch } from "react-redux"
import { createTasks, getAllUserTasks } from "../apis/task"
import { getAllTasks } from "../redux/slices/taskSlices"

const TodoModal = () => {
  const [inputs, setInputs] = useState([])
  const [dueDate, setDuedate] = useState("")
  const [priority, setPriority] = useState("")
  const [title, setTitle] = useState("")

  const dispatch = useDispatch()

  const addInput = () => {
    const newInput = {
      id: Math.random().toString(36).substring(2, 15),
      text: "",
      isCompleted: false,
    }
    setInputs((prevInputs) => [...prevInputs, newInput])
  }

  const handleValueChange = (id, newValue) => {
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.id === id ? { ...input, text: newValue } : input
      )
    )
  }

  const handleCheckedChange = (id) => {
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.id === id ? { ...input, isCompleted: !input.checked } : input
      )
    )
  }

  const handleDelete = (idToDelete) => {
    setInputs((prevInputs) =>
      prevInputs.filter((input) => input.id !== idToDelete)
    )
  }

  const handleSubmit = async () => {
    await createTasks({ title, priority, checkList: inputs, dueDate })
    const res = await getAllUserTasks()
    dispatch(getAllTasks(res))
  }

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box flex flex-col gap-5">
        <div>
          <h3 className="mb-3">Title</h3>
          <input
            type="text"
            placeholder="Enter Task Title..."
            className="input input-bordered w-full max-w-xs"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <h3 className="mb-3">Select Priority</h3>
          <div className="flex justify-between">
            <button
              className={`btn ${
                priority === "LOW" ? "" : "btn-outline"
              } btn-success`}
              onClick={() => setPriority("LOW")}
            >
              LOW PRIORITY
            </button>
            <button
              className={`btn ${
                priority === "MODERATE" ? "" : "btn-outline"
              } btn-warning`}
              onClick={() => setPriority("MODERATE")}
            >
              MODERATE PRIORITY
            </button>
            <button
              className={`btn ${
                priority === "HIGH" ? "" : "btn-outline"
              } btn-error`}
              onClick={() => setPriority("HIGH")}
            >
              HIGH PRIORITY
            </button>
          </div>
        </div>

        <div>
          <h3 className="mb-2">
            Checklist
            <span>
              ({inputs.length}/{inputs.filter((input) => input.checked).length})
            </span>
          </h3>
          <button className="btn btn-outline btn-info mb-3" onClick={addInput}>
            Add +
          </button>
          <div className="max-h-44 overflow-y-auto p-2">
            {inputs.map((input) => (
              <div
                key={input.id}
                className="flex items-center gap-2 border-s-orange-400 mb-4"
              >
                <input
                  type="checkbox"
                  className="checkbox checkbox-warning"
                  checked={input.isCompleted}
                  onChange={() => handleCheckedChange(input.id)}
                />
                <input
                  type="text"
                  placeholder="Add a task"
                  className="w-full p-2"
                  value={input.text}
                  onChange={(e) => handleValueChange(input.id, e.target.value)}
                />
                <MdDelete
                  className="text-xl text-red-600 cursor-pointer"
                  onClick={() => handleDelete(input.id)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="modal-action flex justify-between">
          <input
            className="btn btn-outline"
            type="date"
            value={dueDate}
            onChange={(event) => setDuedate(event.target.value)}
            placeholder="Select Due Date"
          />
          <form method="dialog" className="flex gap-3">
            <button className="btn  btn-success" onClick={handleSubmit}>
              Save
            </button>
            <button className="btn btn-outline btn-error">Cancel</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default TodoModal
