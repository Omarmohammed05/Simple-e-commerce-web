import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import Providers from './layouts/Providers'


import AOS from 'aos'
import 'aos/dist/aos.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <AOSInit />
        <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>
)

function AOSInit() {
  React.useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-out-cubic',
      offset: 40,
    })
  }, [])
  return null
}
