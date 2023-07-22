import React from 'react'


function Hero() {
  return (
    <div className='flex md:flex-row flex-col w-full'>
        <div className='bg-orange-600 w-auto md:w-1/2 flex items-center justify-center'>
            <p className='text-gray-50'>bleazbfvsbjndkndbnksnblwn, s</p>
        </div>
        <div className='md:w-1/2'>
        <video controls loop autoPlay>
            <source src='/pexels-rodnae-720p.mp4' type='video/mp4' />
        </video>
        </div>

    </div>
  )
}

export default Hero