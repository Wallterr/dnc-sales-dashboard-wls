import React from 'react'
import { ThemeProvider } from 'styled-components'
import ReactDom from 'react-dom/client'
import App from './App.tsx'
import { lightTheme, GlobalStyle } from './styles'

ReactDom.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
