import { useEffect, useState } from 'react'

import Header from './components/Header'
import VideoCard from './components/VideoCard';

function Home() {

  const [ videoData, setVideoData ] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(data => setVideoData(data))
    .catch(error => console.log(error))
  }, [])
  
  return (
    <>
      <Header />
      <div className='video-container w-full h-full p-5 items-center overflow-auto'>
        <div className='flex flex-row flex-wrap gap-5'> {
          videoData.map(video => {
            return (
              <VideoCard video={video}/>
            )
          })
        } </div>
      </div>
    </>
  )
}

export default Home