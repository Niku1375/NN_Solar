import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { initializeGA4 } from './lib/analytics'

// Create a client
const queryClient = new QueryClient()

// Initialize Google Analytics 4
const gaId = import.meta.env.VITE_GA_ID
if (gaId) {
  initializeGA4(gaId)
} else {
  console.warn('VITE_GA_ID environment variable is not set')
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
