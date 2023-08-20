import { Routes, Route } from 'react-router-dom'

import './main.css'
import Home from './pages/home'
import VideoDetails from './pages/videoDetails'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:videoId' element={<VideoDetails />} />
    </Routes>
  )
}

export default App