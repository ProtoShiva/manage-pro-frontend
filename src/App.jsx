import Dashboard from "./components/Dashboard"
import Register from "./components/Register"
import { BrowserRouter, Routes, Route } from "react-router"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
