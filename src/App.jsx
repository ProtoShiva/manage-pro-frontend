import Dashboard from "./components/Dashboard"
import Register from "./components/Register"
import { BrowserRouter, Routes, Route } from "react-router"
import { CookiesProvider } from "react-cookie"
import Login from "./components/Login"

const App = () => {
  return (
    <BrowserRouter>
      <CookiesProvider>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </CookiesProvider>
    </BrowserRouter>
  )
}

export default App
