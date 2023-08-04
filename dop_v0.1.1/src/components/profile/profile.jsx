import React, {useState} from 'react'
import './profile.css'
import {PiUser} from 'react-icons/pi'
import {AiOutlineCloudDownload} from 'react-icons/ai'
import {FiSettings} from 'react-icons/fi'
import {TbLogout} from 'react-icons/tb'

const profile = () => {
  const [isOpen, setIsOpen] = useState(true);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className={`panel ${isOpen ? '' : 'open'}`}>
      <button className="profile-btn" onClick={togglePanel}>
        <PiUser size={25}/>
      </button>
      <div className="profile-content">
        <div className='profile-options'>
          <h1 className='user-name'>
            @Mahadev
          </h1>
        </div>
        <div className='profile-options'>
          <button className='prfl-options'>
            <PiUser size={25}/>
          </button>
          <h1 className='opt-name'>
            Profile
          </h1>
        </div>
        <div className='profile-options'>
          <button className='prfl-options'>
            <AiOutlineCloudDownload size={25}/>
          </button>
          <h1 className='opt-name'>
            Saved
          </h1>
        </div>
        <div className='profile-options'>
          <button className='prfl-options'>
            <FiSettings size={25}/>
          </button>
          <h1 className='opt-name'>
            Setting
          </h1>
        </div>
        <div className='profile-options'>
          <button className='prfl-options'>
            <TbLogout size={25}/>
          </button>
          <h1 className='opt-name'>
            Logout
          </h1>
        </div>
      </div>
    </div>
  )
}

export default profile