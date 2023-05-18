import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { mainTheme } from './theme.styled'
import './index.css'
import LandingPage from './Landing/LandingPage.tsx'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <Provider store={store}>
        <LandingPage />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
