import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import { Login } from './pages/Login'
import GlobalStyle from './styles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <GlobalStyle />
    <ToastContainer autoClose={2000} theme='colored' />
  </StrictMode>,
)
