import React from 'react'
import "../styles/videoPg.scss"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const VideoPage = () => {
  return (
    <div className='videpPg'>
      <div>
        <video className="video" controls src='' />
        <div className='info'>
          <p className="title">Tarak mehta ka oolta chasma </p>
          <p style={{marginTop:'2%'}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusantium nihil amet excepturi veritatis illo suscipit accusamus? Natus totam enim, modi voluptatem atque harum similique magni, iusto vitae unde accusantium?
          </p>
          <p className='views'>21M views <span>22 march 2021</span></p>
          <div>
            <div>
              <ThumbUpIcon style={{color:'white'}} />
            </div>
          </div>
        </div>
      </div>
      <div className='suggestions'>

      </div>
    </div>
  )
}

export default VideoPage