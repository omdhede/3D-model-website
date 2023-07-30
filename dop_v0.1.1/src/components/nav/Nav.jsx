import React from 'react'
import './nav.css'
import Menu from '../../assets/menu.png'
import Logo from '../../assets/logo.png'
import Search from '../../assets/search.png'
import Bell from '../../assets/bell.png'
import User from '../../assets/user.png'

const nav = () => {
  return (
    <div>
        <nav>
            <ul>
                <a href="#" className='menu'><button className='menu-btn'><img src= { Menu } alt="" /></button></a>
                <a href='#home' className='logo'><button className='logo-btn'><img src= { Logo } alt="" /></button></a>
                <li>
                  <input type="text" />
                  <button><img src= { Search } alt="" /></button>
                </li>
                <li><button><img src= { Bell } alt="" /></button></li>
                <li><button><img src= { User } alt="" /></button></li>
            </ul>
        </nav>
    </div>
  )
}

export default nav