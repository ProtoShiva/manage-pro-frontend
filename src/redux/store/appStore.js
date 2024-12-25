import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../slices/userSlices"
import taskReducer from "../slices/taskSlices"

const appStore = configureStore({
  reducer: {
    user: userReducer,
    task: taskReducer,
  },
})

export default appStore
