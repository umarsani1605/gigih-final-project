import React from 'react'

const Header = ({video}) => {

  return (
    <div className='flex justify-between w-full h-16 pl-8 pr-20 bg-neutral-800 items-center'>
        <div className='flex justify-center'>
          <button className='w-10 h-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>
          <span>{video.title}</span>
        </div>
        <div>
          <span>{video.shop.name}</span>
        </div>
    </div>
  )
}

export default Header