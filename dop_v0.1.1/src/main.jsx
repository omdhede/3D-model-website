import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/nav/nav.jsx'
import Home from './components/home/home.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>,
)