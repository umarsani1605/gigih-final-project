import React from 'react'

const Comments = ({comments}) => {
  return (
    <div className='flex flex-col content-center gap-6 w-full h-full px-20 pt-3'>
      <div className='mt-3'>
        <h1 className='text-lg'>Komentar</h1>
      </div>
      <div className='w-[90%]'>
        <form action="#" className='flex'>
        <textarea placeholder="Tulis komendar anda..." className="textarea textarea-bordered textarea-md text-base font-normal bg-neutral-800 border-gray-400 w-full max-w-[84%] mr-3" ></textarea>
          <button className="btn btn-neutral btn-outline bg-gray-900 border-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </button>
        </form>
      </div>
      <div className='mb-5'>
        <ul>
          <li>
            {
              comments.map(comment => {
                return (
                  <div>
                    <span className='text-yellow-500 mr-3'>{comment.userName}</span>
                    <span>{comment.comment}</span>
                  </div>
                )
              })
            }
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Comments