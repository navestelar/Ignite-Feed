import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/Ignite-Feed/" element={<Home />} />
    </Routes>
  )
}
