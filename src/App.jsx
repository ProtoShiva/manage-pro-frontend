import Dashboard from "./components/Dashboard"
import Register from "./components/Register"
import { BrowserRouter, Routes, Route, Navigate } from "react-router"
import Login from "./components/Login"
import Analytics from "./components/Analytics"
import Settings from "./components/Settings"
import ProtectedRoute from "./components/ProtectedRoute"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getUserDetails } from "./apis/auth"
import { addUser } from "./redux/slices/userSlices"

const App = () => {
  const dispatch = useDispatch()
  async function getUser() {
    const res = await getUserDetails()
    dispatch(addUser(res.user))
  }
  const isLoggedIn = useSelector((store) => store.user.userDetails)

  useEffect(() => {
    getUser()
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        {!isLoggedIn && (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login />} />
          </>
        )}
        <Route element={<ProtectedRoute />}>
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/register" element={<Navigate to="/" />} />
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
