import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.tsx'
import { AppThemeProvider } from './contexts/AppThemeContext.tsx'
import { GlobalStyle } from './styles/index.ts'

ReactDom.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <GlobalStyle />
      <App />
    </AppThemeProvider>
  </React.StrictMode>
)
