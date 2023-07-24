import React from 'react'



function Hero() {
    
    
  return (
    <div className='flex flex-col md:flex-row w-full mt-[100px] '>
        <div className='bg-orange-400 w-auto md:w-1/2 flex items-center justify-center md:pt-0 pt-[90px] pb-6 h-90%'>
            <h1 className='text-gray-50 text-xl'>Welcome to <span className='font-bold text-3xl'>Shop It</span></h1>
        </div>
        <div className='md:w-1/2 w-full'>
        <video controls loop autoPlay >
            <source src='/pexels-rodnae-720p.mp4' type='video/mp4' />
        </video>
        </div>

    </div>
  )
}

export default Hero