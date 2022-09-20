import React from 'react'
import '../../styles/videoCard.scss'
import { useNavigate } from 'react-router-dom'

interface VideoCardProps{
  title:string,
  image:string,
  avatar:string,
  id:string
}

const VideoCard = ({title,id,image,avatar}:VideoCardProps) => {

const navigate = useNavigate()
  const goToVideo=()=>{
    navigate(`/${id}`,{state:{title:title,image:image}})
  }
 
  return (
    <div className='card' onClick={()=>goToVideo()}>
      <img src={image} alt="" />
      <div className='timeTag'>
        18:30
      </div>
      <div className='info'>
        <img className='avatar' src={avatar} alt="" />
        <div>
          <p>{title}</p>
          <p>name . 2.2M views . 15 hours ago</p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard