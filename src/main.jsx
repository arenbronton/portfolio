import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import './index.scss'
import './styles/tooltip.scss'
import HomePage from './pages/HomePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'

import Nav from './components/layout/Nav.jsx'
import ThemeSwitcher from './components/layout/ThemeSwitcher.jsx'

const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/" />
  },
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/projects/:tool",
    element: <ProjectsPage />
  },
  // {
  //   path: "/experience",
  //   element: <ExperiencePage />
  // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Nav currentTab="overview" /> */}
    <RouterProvider router={router} />
    {/* <ThemeSwitcher /> */}
  </React.StrictMode>,
)
