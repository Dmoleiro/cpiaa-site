import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { mainTheme } from './theme.styled'
import './index.css'
import LandingPage from './Landing/LandingPage.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <LandingPage />
    </ThemeProvider>
  </React.StrictMode>,
)
