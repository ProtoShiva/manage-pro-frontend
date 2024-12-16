import { configureStore } from "@reduxjs/toolkit"
import userSlices from "../slices/usersSlices"
// import taskSlices from "../slices/taskSlices"

const store = configureStore({
  reducer: {
    users: userSlices,
    // task: taskSlices,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }), // to ensure the data we get from our backend should be in json format
})

export default store
