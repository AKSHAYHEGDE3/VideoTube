import React from 'react'
import UploadComp from '../components/Home/UploadComp'
import VideoCard from '../components/Home/VideoCard'
import '../styles/home.scss'
import { videoInterface } from '../typeUtils'

interface vids{
  videos:videoInterface[]
}


const Home = ({videos}:vids) => {

  return (
    <div>
      <UploadComp/>
        <div className='homePage'>
          
          {videos.map((v:videoInterface)=><VideoCard title={v.videoTitle} channelTitle={v.channelTitle} image={v.image} key={v.videoId} id={v.videoId}/>)}
        </div>
    </div>
  )
}

export default Home