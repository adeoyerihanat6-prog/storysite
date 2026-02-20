import React from 'react'

const Photography = () => {
  return (
    <div className='bg-neutral-800 h-[900px] w-[full]'>
      <div className='h-[150px]  flex justify-center items-center'>
        <h1 className='text-white text-3xl text-center '>Instead, get <span className='text-amber-600'>premium + affordable</span> <br /> on-demand design services.
</h1>
</div>
<br />
<div className='flex  justify-around'>
<div className='str scroll-reveal h-[670px] w-[600px] rounded-ss-full flex flex-col justify-center items-center '>
  <h1 className='text-white text-3xl font-bold'>Strategy</h1>
  <br />
  <p  className='text-white'>Make the most of your efforts.</p>
</div>
<div className='h-[650px] '>
  <div className='photo scroll-reveal flex flex-col justify-center items-center h-[325px] w-[600px] rounded-se-full'>
  <h1 className='text-white text-3xl font-bold'>Photography</h1>
  <br />
  <p  className='text-white'>Get the beautiful photos you need.</p>
  </div>
  <br />
  <div className='design scroll-reveal flex flex-col justify-center items-center h-[325px] w-[600px] rounded-br-full'>

    <h1 className='text-white text-3xl font-bold'>Design</h1>
  <br />
  <p  className='text-white'>Colors, fonts, and layouts, oh my!</p>
  </div>
</div>
</div>
    </div>
  )
}

export default Photography