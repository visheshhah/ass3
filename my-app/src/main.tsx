import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {router} from "./Router.tsx"
import { RouterProvider } from 'react-router-dom'
import { CartProvider } from './context/CartContext.tsx'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { store } from './store/store.ts'
import { Provider } from 'react-redux'

const queryClient = new QueryClient(); 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>

      <App/>
      </Provider>

    <RouterProvider router={router}/>
    </QueryClientProvider>
    </CartProvider>
  </StrictMode>,
)
