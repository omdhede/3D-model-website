import React, { useState } from 'react'
import Menu from '../menu/Menu'
import Home from '../home/home'
import './nav.css'

const Nav = () => {
  return (
    <nav className='nav'>
      <div>
        <Menu />
      </div>
      <div>
        <Home/>
      </div>
    </nav>
  )
}

export default Nav