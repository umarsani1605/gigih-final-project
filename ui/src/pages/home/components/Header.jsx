import React from 'react'

const Header = () => {

  return (
    <div className='flex w-full h-14 px-5 bg-neutral-800 items-center'>
        <button className='w-10 h-full'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>
        <span>Play</span>
    </div>
  )
}

export default Header