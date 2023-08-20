import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className="card card-compact rounded-md w-28 bg-neutral-600 shadow-xl">
      <figure><img src={product.imageUrl} alt="Movie" className=''/></figure>
      <div className="p-[10px]">
        <h2 className="card-title text-xs">{product.name}</h2>
        <p className='text-xs'>{product.price}</p>
      </div>
    </div>
  )
}

export default ProductCard