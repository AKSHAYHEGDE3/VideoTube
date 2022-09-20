import React from 'react'
import '../../styles/videoCard.scss'
import { useNavigate } from 'react-router-dom'

interface VideoCardProps{
  title:string,
  image:string,
  id:string
  channelTitle:string
}

const VideoCard = ({title,id,image,channelTitle}:VideoCardProps) => {

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
        <img className='avatar' src={image} alt="" />
        <div>
          <p>{title.length > 40 ? title.slice(0,40)+'...' : title}</p>
          <p>{channelTitle}<br /> 2.2M views . 15 hours ago</p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard