import React from 'react'
import Button from './Button'

const Brand = () => {
  return (
    <div className='h-[400px] w-full bg-white flex flex-col justify-around items-center'>
       <div className='h-[100px] flex justify-center items-center'>
         <h1 className='text-amber-600 text-3xl'>Trusted by brands you love</h1>
       </div>
        
        <div className='flex justify-center items-center h-[40px] w-full'>
            <img src="google.webp" className='h-[100px] scroll-reveal' />
            <img src="asana.webp" className='h-[100px] scroll-reveal' />
            <img src="spotify.webp" className='h-[100px] scroll-reveal' />
            <img src="hubspot.webp" className='h-[100px] scroll-reveal' />
        </div>
        
       <div className='flex justify-center items-center h-[50px] scroll-reveal'>
        <Button/>
       </div>
    </div>
  )
}

export default Brand