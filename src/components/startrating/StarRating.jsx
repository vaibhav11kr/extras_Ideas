import React, { useState } from 'react'

const StarRating = ({limit, initialRating}) => {
    let noOfStars = 5;
    const [rating, setRating] = useState(initialRating || 2);

    const handleClick = (idx)=>{
        setRating(idx+1);
    }
  return (
    <div className='bg-[#353535] h-screen p-10 text-center'>
      <h1 className='text-white font-bold text-2xl'>Rate the Website</h1>
      {[...Array(limit || noOfStars)].map(( _, idx )=>{
            return (<span className="text-3xl star cursor-pointer" key={idx} onClick={()=>handleClick(idx)}>{idx<rating ? "★":"☆"}</span>)
      })}
        
    </div>
  )
}

export default StarRating
