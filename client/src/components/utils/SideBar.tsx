import React from 'react'
import "../../styles/sidebar.scss"
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import { Upload } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux';
import { changeUploadState } from '../../store/reducers/upload';
import { logout } from '../../firebase';
import { setUser } from '../../store/reducers/auth';
import { signInModalState } from '../../store/reducers/auth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const SideBar = () => {

    const dispatch = useDispatch();
    const buttonState = useSelector((state: any) => state.upload.buttonState)
    const user = useSelector((state: any) => state.auth.user)

    const triggerButton = () => {
        dispatch(changeUploadState(!buttonState))
    }

    const logOut = () => {
        logout();
        dispatch(setUser(null));
    }

    return (
        <div className='sidebar'>
            <div className='menu'>
                <HomeIcon style={{ color: 'white' }} />
                <p>Home</p>
            </div>
            <div className='menu' onClick={triggerButton}>
                <Upload style={{ color: 'white' }} />
                <p>Upload Video</p>
            </div>
            <div className='menu'>
                <HomeIcon style={{ color: 'white' }} />
                <p>Home</p>
            </div>
            <div onClick={() => logOut()} className='menu'>
                {
                    user ?
                        <>
                            <LogoutIcon style={{ color: 'white' }} />
                            <p>Logout</p>
                        </> :
                        <button style={{width:'120px'}} onClick={() => dispatch(signInModalState(true))} className='signInBtn'>
                            <AccountCircleIcon />
                            <p>Sign In</p>
                        </button>
                }

            </div>
            <hr />
            <div className="subscriptions">
                <p>SUBSCRIPTIONS</p>
                <div className='menu'>
                    <img className='avatar' src="https://images5.alphacoders.com/644/thumbbig-644177.webp" alt="" />
                    <p>Home</p>
                </div>
                <div className='menu'>
                    <img className='avatar' src="https://images5.alphacoders.com/644/thumbbig-644177.webp" alt="" />
                    <p>Home</p>
                </div>
                <div className='menu'>
                    <img className='avatar' src="https://images5.alphacoders.com/644/thumbbig-644177.webp" alt="" />
                    <p>Home</p>
                </div>
            </div>
        </div>
    )
}

export default SideBar