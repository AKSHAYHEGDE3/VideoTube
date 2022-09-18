import React,{useContext} from 'react'
import '../styles/navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { SideBarContext } from '../SideBarContext';

const Navbar = () => {

  const sideBar = useContext(SideBarContext)
  console.log(sideBar?.showSideBar);

  return (
    <div style={{
      backgroundColor: '#181818',
      color: 'white'
    }} className='navbar'>
      <div className='logo'>
      <MenuIcon onClick={()=>sideBar?.setShowSideBar(!sideBar.showSideBar)} className='menuIcon' />
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