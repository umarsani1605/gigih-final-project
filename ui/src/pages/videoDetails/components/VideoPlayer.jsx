import React from 'react'
import Product from './ProductCard'

const VideoPlayer = ({video, comments, products}) => {
  console.log(products);
  return (
    <div className='flex flex-row content-center gap-6 w-full h-full px-20 pt-3'>
      <div className='flex flex-col justify-end rounded-lg aspect-video w-[90%] bg-neutral-600'>
        <iframe style={{pointerEvents: 'none'}} className='rounded-lg w-full h-full' src="https://www.youtube.com/embed/S-HDc0h3e_4?autoplay=1&showinfo=0&controls=0" title="YouTube video player"></iframe>
        <div className='absolute flex flex-row gap-2 m-3'> {
            products.map(product => {
              return (
                <Product product={product} />
              )
            })
          } </div>
      </div>
    </div>
  )
}

export default VideoPlayer