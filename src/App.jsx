import Dashboard from "./components/Dashboard"
import Register from "./components/Register"
import { BrowserRouter, Routes, Route, Navigate } from "react-router"
import Login from "./components/Login"
import Analytics from "./components/Analytics"
import Settings from "./components/Settings"
import ProtectedRoute from "./components/ProtectedRoute"
import { useSelector } from "react-redux"

const App = () => {
  const isLoggedIn = useSelector((store) => store.user.isLoggedIn)
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
