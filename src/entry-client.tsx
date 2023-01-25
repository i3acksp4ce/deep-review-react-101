// import './index.css'
import './tailwindcss.css'
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const strictMode = false

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  strictMode ? (
    <StrictMode>
      <App />
    </StrictMode>
  ) : (
    <App />
  )
)
