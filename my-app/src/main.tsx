import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {router} from "./Router.tsx"
import { RouterProvider } from 'react-router-dom'
import { CartProvider } from './context/CartContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>

    <RouterProvider router={router}/>
    </CartProvider>
  </StrictMode>,
)
