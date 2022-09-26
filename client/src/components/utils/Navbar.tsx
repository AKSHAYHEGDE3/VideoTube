import React, { useContext } from 'react'
import '../../styles/navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { SideBarContext } from '../../SideBarContext';
import { useDispatch, useSelector } from 'react-redux';
import { signInModalState } from '../../store/reducers/auth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {

  const sideBar = useContext(SideBarContext)
  const user = useSelector((state: any) => state.auth.user)
  const dispatch = useDispatch()


  return (
    <div style={{
      backgroundColor: '#181818',
      color: 'white'
    }} className='navbar'>
      <div className='logo'>
        <MenuIcon onClick={() => sideBar?.setShowSideBar(!sideBar.showSideBar)} className='menuIcon' />
        <img src="/yt.png" alt="" />
        <p>VideoTube</p>
      </div>
      <div className='searchBar'>
        <input type="text" placeholder='search' />
        <div>
          <SearchIcon />
        </div>
      </div>
      {
        user ?
          <div className='profile'>
            <p>{user?.email[0]}</p>
          </div>
          :
          <button onClick={() => dispatch(signInModalState(true))} className='signInBtn'>
            <AccountCircleIcon />
            <p>Sign In</p>
          </button>
      }
    </div>
  )
}

export default Navbar