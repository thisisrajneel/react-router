import {lazy, Suspense} from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import Landing from "./components/Landing"
const Dashboard = lazy(() => import('./components/Dashboard'))

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<Suspense fallback={'loading...'}> <Landing /> </Suspense>} />
          <Route path="/dashboard" element={<Suspense fallback={'loading...'}> <Dashboard /> </Suspense>} />
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
