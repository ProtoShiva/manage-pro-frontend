import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.userDetails = action.payload
    },

    removeUser: (state) => {
      state.userDetails = null
    },
  },
})

export const { addUser, removeUser } = userSlice.actions
export default userSlice.reducer
