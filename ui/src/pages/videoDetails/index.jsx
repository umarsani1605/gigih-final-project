import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './components/Header'
import VideoPlayer from './components/VideoPlayer'
import Comments from './components/Comments'

function VideoDetails() {

  const location = useLocation()
  const video = location.state

  const videoId = video._id

  const [ commentsData, setCommentsData ] = useState([])
  const [ productsData, setProductsData ] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/${videoId}/products`)
    .then(response => response.json())
    .then(data => setProductsData(data))
    .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    fetch(`http://localhost:3000/${videoId}/comments`)
    .then(response => response.json())
    .then(data => setCommentsData(data))
    .catch(error => console.log(error))
  }, [])

  return (
    <>
      <Header video={video} />
      <VideoPlayer video={video} products={productsData} />
      <Comments comments={commentsData}/>
    </>
  )
}

export default VideoDetails