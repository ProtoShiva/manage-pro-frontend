import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { baseURL, config } from "../../utils/baseURL"

const redirectRegister = createAction("redirect/register")
const redirectLogin = createAction("redirect/login")
const redirectLogout = createAction("redirect/logout")

export const registerUserAction = createAsyncThunk(
  "register/user",
  async (user, { rejectWithValue, getState, dispatch }) => {
    try {
      const sendData = {
        name: user.name,
        email: user.email,
        password: user.password,
      }
      const { data } = await axios.post(
        `${baseURL}/api/user/register`,
        sendData,
        config
      )

      //after user registers store him to local state
      localStorage.setItem("userInfo", JSON.stringify(data.createdUser))
      localStorage.setItem("token", JSON.stringify(data.token))

      return data
    } catch (error) {
      if (!error?.response) {
        throw error
      }
      return rejectWithValue(error?.response?.data)
    }
  }
)

//login user action
export const loginUserAction = createAsyncThunk(
  "login/user",
  async (user, { rejectWithValue, getState, dispatch }) => {
    const userFromState = getState()?.users?.userAuth

    try {
      const { data } = await axios.post(
        `${baseURL}/api/users/login`,
        user,
        config
      )

      //store user to the local state aka browser memory
      localStorage.setItem("userInfo", JSON.stringify(data.user))
      localStorage.setItem("token", JSON.stringify(data.token))

      //return the data to the frontend
      return data
    } catch (error) {
      if (!error?.response) {
        throw error
      }
      return rejectWithValue(error?.response?.data)
    }
  }
)

//logout action
export const logoutAction = createAsyncThunk(
  "logout/user",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      //remove user from browser
      localStorage.removeItem("userInfo")
      localStorage.removeItem("token")

      //dispatch redirect action
      dispatch(redirectLogout())
    } catch (error) {
      if (!error?.response) {
        throw error
      }
      return rejectWithValue(error?.response?.data)
    }
  }
)

//get user from local state and put him into the store
let userAuth

const userInfoToStr = localStorage.getItem("userInfo")

if (userInfoToStr && userInfoToStr !== "undefined") {
  try {
    userAuth = JSON.parse(userInfoToStr)
  } catch (error) {
    console.error("Failed to parse userInfo from localstorage", error)
    userAuth = null
  }
} else {
  userAuth = null
}

const userSlice = createSlice({
  name: "users",
  initialState: {
    user: userAuth,
  },
  extraReducers: (builder) => {
    //register a user
    builder.addCase(redirectRegister, (state, action) => {
      state.redirectRegister = true
    })
    builder.addCase(registerUserAction.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(registerUserAction.fulfilled, (state, action) => {
      state.loading = false
      state.redirectRegister = false
      state.user = action?.payload?.createdUser
      state.serverErr = undefined
      state.appErr = undefined
    })
    builder.addCase(registerUserAction.rejected, (state, action) => {
      state.loading = false
      state.serverErr = action?.payload?.message
      state.appErr = action?.payload?.message
    })
    //login a user
    builder.addCase(redirectLogin, (state, action) => {
      state.redirectLogin = true
    })
    builder.addCase(loginUserAction.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(loginUserAction.fulfilled, (state, action) => {
      state.loading = false
      state.redirectLogin = false
      state.user = action?.payload?.user
      state.serverErr = undefined
      state.appErr = undefined
    })
    builder.addCase(loginUserAction.rejected, (state, action) => {
      state.loading = false
      state.serverErr = action?.payload?.message
      state.appErr = action?.payload?.message
    })
    //logout a user
    builder.addCase(redirectLogout, (state, action) => {
      state.redirectLogout = true
    })
    builder.addCase(logoutAction.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(logoutAction.fulfilled, (state, action) => {
      state.loading = false
      state.redirectLogout = false
      state.user = null
      state.serverErr = undefined
      state.appErr = undefined
    })
    builder.addCase(logoutAction.rejected, (state, action) => {
      state.loading = false
      state.serverErr = action?.payload?.message
      state.appErr = action?.payload?.message
    })
  },
})

export default userSlice.reducer
