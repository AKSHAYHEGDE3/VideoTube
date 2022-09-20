import React from 'react'
import VideoCard from '../components/Home/VideoCard'
import '../styles/home.scss'

const Home = (props:any) => {

  return (
    <div>
        <div className='homePage'>
          {props.videos.map((v:any)=><VideoCard title={v.snippet.title} image={v.snippet.thumbnails.high.url} key={v.id.videoId} id={v.id.videoId}/>)}
        </div>
    </div>
  )
}

export default Home