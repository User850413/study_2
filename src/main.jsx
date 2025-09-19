import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import InfoProvider from './context/InfoProvider.jsx'
import ThemeProvider from './context/ThemeProvider.jsx'

import "./styles/main.scss";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <InfoProvider>
        <App />
      </InfoProvider>
    </ThemeProvider>
  </StrictMode>,
)
