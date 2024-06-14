// make a basic router
// render landing component first , then navigate to dashboard using CSR 
// make the components load lazily and add a fallback

import { BrowserRouter, Route, Router, Routes, useNavigate } from "react-router-dom"
import Landing from './components/Landing'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<Landing />}>
          
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          
        </Route>
      </Routes>
      
    </BrowserRouter>
  )
}

function AppBar() {
  const navigate = useNavigate()
  

  return (
    <>
      <button onClick={() => navigate('/')}>Landing</button>
      <button onClick={() => navigate('/dashboard')}>Dashboard</button>
    </>
  )
}

export default App
