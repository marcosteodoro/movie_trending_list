import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import Movies from './pages/Movies.tsx'
import TvShows from './pages/TvShows.tsx'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './services/queryClient.ts'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/movies",
    element: <Movies />
  },
  {
    path: "/tv-shows",
    element: <TvShows />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
