import React from 'react'
import "../../styles/sidebar.scss"
import HomeIcon from '@mui/icons-material/Home';
import {Upload} from '@mui/icons-material'
import { useDispatch,useSelector} from 'react-redux';
import { changeUploadState } from '../../store/reducers/upload';

const SideBar = () => {

    const dispatch = useDispatch();
    const buttonState= useSelector((state:any)=>state.upload.buttonState)

    const triggerButton=()=>{
        dispatch(changeUploadState(!buttonState))
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
            <div className='menu'>
                <HomeIcon style={{ color: 'white' }} />
                <p>Home</p>
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