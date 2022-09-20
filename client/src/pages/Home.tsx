import React from 'react'
import VideoCard from '../components/Home/VideoCard'
import '../styles/home.scss'

interface VideoProps{
  videos:Array<object>
}

const Home = ({videos}:VideoProps) => {

  return (
    <div>
        <div className='homePage'>
          {videos.map((v:any)=><VideoCard title={v.snippet.title} avatar="" image={v.snippet.thumbnails.high.url} key={v.id.videoId} id={v.id.videoId}/>)}
        </div>
    </div>
  )
}

export default Home