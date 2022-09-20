import React from 'react'
import "../styles/videoPg.scss"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useLocation, useNavigation, useParams } from 'react-router-dom';

const VideoPage = () => {

  const id = useLocation().pathname.split('/')[1]
  const location = useLocation();
  

  
  return (
    <div className='videpPg'>
      <div>
        <video className="video" controls={true} src={`https://www.youtube.com/watch?v=${id}`} />
       
        <div className='info'>
          <p className="title">{location.state.title} </p>
          <p style={{ marginTop: '2%' }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusantium nihil amet excepturi veritatis illo suscipit accusamus? Natus totam enim, modi voluptatem atque harum similique magni, iusto vitae unde accusantium?
          </p>
          <div>
            <p className='views'>21M views <span>22 march 2021</span></p>
            <div className='like'>
              <div>
                <ThumbUpIcon />
                <span>30</span>
              </div>
              <div style={{ marginLeft: '15px' }}>
                <ThumbUpIcon />
                <span>30</span>
              </div>
            </div>
          </div>
        </div>
        <div className='channelInfo'>
            <img className='avatar' src="https://images5.alphacoders.com/644/thumbbig-644177.webp" alt="" />
            <div>
              <p className='name'>Name</p>
              <span>771 subscribers</span>
            </div>
            <div className="subscribe">
              SUBSCRIBE
            </div>
          </div>
      </div>
      <div className='suggestions'>

      </div>
    </div>
  )
}

export default VideoPage