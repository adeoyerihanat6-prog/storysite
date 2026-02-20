import React from 'react'
import Button from './Button'

const Next = () => {
  return (
    <div className='h-[750px] w-[100%] bg-neutral-700 flex justify-center items-center'>
      <div className='relative  w-[80%] top-24'>
        <img src="work.webp" className='h-[500px] w-[800px] rounded-ee-full'/>
        <div className='h-[350px] w-[450px] bg-neutral-900 absolute top-6 left-[700px] flex flex-col justify-center items-center'>
          <h1 className='text-white text-5xl'><span className='font-bold'>Premium design</span> <br /> without the price.</h1>
          <br />
          <p className='text-white'>Lorem ipsum dolor sit amet, consectetur <br />
           adipiscing elit, sed do eiusmod tempor incididunt <br />
           ut labore et dolore magna aliqua.</p>
           <br />
           <Button/>
        </div>
        </div>
    </div>
  )
}

export default Next