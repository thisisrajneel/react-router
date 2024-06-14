// make a basic router
// render landing component first , then navigate to dashboard using CSR 
// make the components load lazily and add a fallback

import { BrowserRouter, Route, Router, Routes, useNavigate } from "react-router-dom"
import { Suspense, lazy } from "react"
const  Landing = lazy(() => import('./components/Landing'))
const  Dashboard = lazy(() => import('./components/Dashboard'))
import Loading from "./components/Loading" // Loading cannot be lazily loaded

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<Suspense fallback={<Loading />}><Landing /></Suspense>} />
        <Route path="/dashboard" element={<Suspense fallback={<Loading />}><Dashboard /></Suspense>} />
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
