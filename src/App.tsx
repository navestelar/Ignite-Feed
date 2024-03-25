import { BrowserRouter } from "react-router-dom"
import "./globals.css"
import { AppRoutes } from "./router.tsx"

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
