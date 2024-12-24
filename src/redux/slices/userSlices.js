import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: null,
    isLoggedIn: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.userDetails = action.payload
    },

    removeUser: (state, action) => {
      state.userDetails = null
    },

    logStatus: (state) => {
      state.isLoggedIn = true
    },
  },
})

export const { addUser, removeUser, logStatus } = userSlice.actions
export default userSlice.reducer
