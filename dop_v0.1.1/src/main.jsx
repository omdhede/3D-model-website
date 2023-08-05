import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/nav/Nav.jsx'
import MainScreen from './components/main_screen/main_screen'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <MainScreen />
  </React.StrictMode>,
)
