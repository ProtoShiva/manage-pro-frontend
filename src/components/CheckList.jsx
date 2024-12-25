const CheckList = ({ text, isCompleted }) => {
  return (
    <div className="flex items-center gap-2 border-s-orange-400 mb-4 transform-gpu">
      <input
        type="checkbox"
        className="checkbox checkbox-warning"
        checked={isCompleted}
        onChange={(e) => e.target.checked}
      />
      <input
        type="text"
        placeholder="Add a task"
        className="w-full p-2 "
        value={text}
        readOnly
      />
    </div>
  )
}

export default CheckList
