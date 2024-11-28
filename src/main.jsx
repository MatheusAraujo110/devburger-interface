import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

import GlobalStyle from './styles'
import AppProvider from './hooks'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
      <GlobalStyle />
      <ToastContainer autoClose={2000} theme='colored' />
    </AppProvider>
  </StrictMode>,
)
