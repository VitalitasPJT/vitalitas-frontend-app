import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/authContext.tsx'

// imports bootstrap para css e js e icons
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "bootstrap-icons/font/bootstrap-icons.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/vitalitas-frontend-app" >
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter >
  </StrictMode>,
)