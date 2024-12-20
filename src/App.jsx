import Dashboard from "./components/Dashboard"
import Register from "./components/Register"
import { BrowserRouter, Routes, Route } from "react-router"
import { CookiesProvider } from "react-cookie"
import Login from "./components/Login"
import Analytics from "./components/Analytics"
import Settings from "./components/Settings"

const App = () => {
  return (
    <BrowserRouter>
      <CookiesProvider>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </CookiesProvider>
    </BrowserRouter>
  )
}

export default App
