import React from 'react'
import Menu from '../menu/Menu'
import Home from '../home/home'
import Search from '../search/search'
import Bell from '../bell/bell'
import Profile from '../profile/profile'
import './nav.css'

const Nav = () => {
  return (
    <nav className='nav'>
      <div>
        <Menu />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <Search />
      </div>
      <div>
        <Bell />
      </div>
      <div>
        <Profile />
      </div>
    </nav>
  )
}

export default Nav