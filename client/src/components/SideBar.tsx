import React from 'react'
import "../styles/sidebar.scss"
import HomeIcon from '@mui/icons-material/Home';

const SideBar = () => {
    return (
        <div className='sidebar'>
            <div className='menu'>
                <HomeIcon style={{ color: 'white' }} />
                <p>Home</p>
            </div>
            <div className='menu'>
                <HomeIcon style={{ color: 'white' }} />
                <p>Home</p>
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
            </div>
        </div>
    )
}

export default SideBar