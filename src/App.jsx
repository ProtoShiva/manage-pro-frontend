import Dashboard from "./components/Dashboard"
import Register from "./components/Register"
import { BrowserRouter, Routes, Route } from "react-router"
import { CookiesProvider } from "react-cookie"

const App = () => {
  return (
    <BrowserRouter>
      <CookiesProvider>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </CookiesProvider>
    </BrowserRouter>
  )
}

export default App
