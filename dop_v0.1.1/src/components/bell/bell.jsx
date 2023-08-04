import React, { useState } from 'react'
import './bell.css'
import BellMenu from './bell-menu/bellmenu'

const bell = () => {
  return (
    <div className='bell'>
        <BellMenu/>
    </div>
  )
}

export default bell