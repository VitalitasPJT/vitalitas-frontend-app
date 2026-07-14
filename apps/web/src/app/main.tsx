import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tailwind.css'
import './styles/index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '../contexts/authContext.tsx'
import { ThemeProvider } from '../contexts/themeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
