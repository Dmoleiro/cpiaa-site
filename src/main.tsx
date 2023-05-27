import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import MainScreen from './Landing/MainScreen.tsx'
import './index.css'
import store from './store'
import { mainTheme } from './theme.styled'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <Provider store={store}>
        {/* <LandingPage /> */}
        <MainScreen />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
)
