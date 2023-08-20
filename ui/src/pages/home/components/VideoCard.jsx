import React from 'react'
import { Link } from "react-router-dom";

const VideoCard = ({video}) => {

  return (
    <Link to={`/${video._id}`} state={video} className={'flex flex-col justify-between rounded w-[15.6%] aspect-video-portrait object-cover bg-cover'} style={{backgroundImage: `url(${video.thumbnailUrl})`}}>
      <div className='p-4'>
        <span className="rounded inline-flex items-center bg-red-500 px-2 mr-2 py-1 text-xs font-bold text-red-50">LIVE</span>
        <span className="inline-block rounded bg-neutral-600 w-fit px-2 py-1 text-xs font-semibold align-middle leading-zero">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline w-4 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className='align-middle'>{video.viewerCount}</span>
        </span>
      </div>
      <div className='flex flex-col justify-end rounded h-36 p-4 bg-gradient-to-t from-black'>
        <div className='text-base font-semibold'>{video.title}</div>
        <div className='text-sm'>{video.shop.name}</div>
      </div>
    </Link>
  )
}

export default VideoCard