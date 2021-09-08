import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

declare global {
  interface Window {
    initMap?: () => void
    map?: google.maps.Map
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
