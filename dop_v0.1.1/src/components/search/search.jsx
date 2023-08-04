import React from 'react'
import './search.css'
import {BiSearch} from 'react-icons/bi'

const search = () => {
  return (
    <div className='container-search'>
        <input type="text" placeholder='Search' className='search-box' aria-label="Search" aria-autocomplete="list"/>
        <button className='search-btn'>
            <BiSearch size={45} className='search-icon'/>
        </button>
    </div>
  )
}

export default search