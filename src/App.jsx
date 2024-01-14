import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import Landing from "./components/Landing"
import Dashboard from "./components/Dashboard"

function App() {
  // basic routing with hard reloads - not proper SPA
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

const AppBar = () => {
  const navigate = useNavigate()
  return (
    <>
      <button onClick={() => {
        navigate('/')
      }} >Landing</button>
      <button onClick={() => {
        navigate('/dashboard')
      }} >Dashboard</button>
    </>
  )
}

export default App
