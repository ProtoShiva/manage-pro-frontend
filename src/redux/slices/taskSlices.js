import { createSlice } from "@reduxjs/toolkit"

const taskSlice = createSlice({
  name: "task",
  initialState: {
    allTasks: null,
  },
  reducers: {
    getAllTasks: (state, action) => {
      state.allTasks = action.payload
    },
  },
})

export const { getAllTasks } = taskSlice.actions
export default taskSlice.reducer
