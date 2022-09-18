import React from 'react'
import '../styles/videoCard.scss'

const VideoCard = () => {
  return (
    <div className='card'>
        <img src="https://images5.alphacoders.com/644/thumbbig-644177.webp" alt="" />
        <div className='info'>
            <img className='avatar' src="https://images5.alphacoders.com/644/thumbbig-644177.webp" alt="" />
            <div>
                <p>Tarak mehta ka oolta chasma</p>
                <p>name . 2.2M views . 15 hours ago</p>
            </div>
        </div>
    </div>
  )
}

export default VideoCard