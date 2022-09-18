import React from 'react'
import '../styles/navbar.scss'
import SearchIcon from '@mui/icons-material/Search';


const Navbar = () => {
  return (
    <div style={{
      backgroundColor: '#181818',
      color: 'white'
    }} className='navbar'>
      <div className='logo'>
        <img src="/yt.png" alt="" />
        <p>VideoTube</p>
      </div>
      <div className='searchBar'>
        <input type="text" placeholder='search' />
        <div>
          <SearchIcon />
        </div>
      </div>
      <div className='profile'>
        <p>A</p>
      </div>
    </div>
  )
}

export default Navbar