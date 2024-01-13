import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "./components/Landing"
import Dashboard from "./components/Dashboard"

function App() {
  // basic routing with hard reloads - not proper SPA
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
