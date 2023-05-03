import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { mainTheme } from './theme.styled'
import './index.css'
import UnderConstruction from './Landing/UnderConstruction.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <UnderConstruction />
    </ThemeProvider>
  </React.StrictMode>,
)
