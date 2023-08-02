import React, { useState } from 'react';
import './Menu.css';
import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineHome} from 'react-icons/ai'
import {CiCircleList} from 'react-icons/ci'
import {GoPeople} from 'react-icons/go'
import {PiTreeLight} from 'react-icons/pi'
import {IoHelpCircleOutline} from 'react-icons/io5'


const Menu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`side-panel ${isOpen ? '' : 'open'}`}>
      <button className="toggle-btn" onClick={togglePanel}>
        <RxHamburgerMenu className='btn' size={40}/>
      </button>
      {/* Add your content here */}
      <div className="content">
        <ul className='content-box'>
          <AiOutlineHome className='content-btn' size={40} /> 
          <h1 className='content-text'>Home</h1>
        </ul>
        <ul className='content-box'>
          <CiCircleList className='content-btn' size={40} /> 
          <h1 className='content-text'>Categories</h1>
        </ul>
        <ul className='content-box'>
          <GoPeople className='content-btn' size={40} /> 
          <h1 className='content-text'>Following</h1>
        </ul>
        <ul className='content-box'>
          <PiTreeLight className='content-btn' size={40} /> 
          <h1 className='content-text'>About Us</h1>
        </ul>
        <ul className='content-box'>
          <IoHelpCircleOutline className='content-btn' size={40} /> 
          <h1 className='content-text'>Help Desk</h1>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
