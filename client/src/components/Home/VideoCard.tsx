import React from 'react'
import '../../styles/videoCard.scss'
import { useNavigate } from 'react-router-dom'


const VideoCard = (props:any) => {

const navigate = useNavigate()
  const goToVideo=()=>{
    navigate(`/${props.id}`,{state:{title:props.title,image:props.image}})
  }
 
  return (
    <div className='card' onClick={()=>goToVideo()}>
      <img src={props.image} alt="" />
      <div className='timeTag'>
        18:30
      </div>
      <div className='info'>
        <img className='avatar' src={props.avatar} alt="" />
        <div>
          <p>{props.title}</p>
          <p>name . 2.2M views . 15 hours ago</p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard