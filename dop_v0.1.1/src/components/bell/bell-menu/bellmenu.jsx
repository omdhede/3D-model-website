import React, { useState } from 'react'
import './bellmenu.css'
import {BsBell} from 'react-icons/bs'

const bellmenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className={`drop-down ${isOpen ? '' : 'open'}`}>
      <button className='bell-btn' onClick={togglePanel}>
            <BsBell size={25}/> 
      </button>
      <div className="content-bell">
        <h1 className='bell-txt'>
          You have a notification 💖
        </h1>
        <h1 className='bell-txt'>
          You have a notification 💖
        </h1>
        <h1 className='bell-txt'>
          You have a notification 💖
        </h1>
        <h1 className='bell-txt'>
          You have a notification 💖
        </h1>
      </div>
    </div>
  )
}

export default bellmenu