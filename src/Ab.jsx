import React from 'react'

const Ab = () => {
  return (
    <div className='bg-neutral-700 h-[500px] w-full flex flex-col items-center'>
     <div className='h-[250px] w-full'></div>
     <div className='flex'>
        <div className='w-[15%]'></div>
        
        <div className='flex flex-col'>
            <h1 className='text-white text-5xl'>About</h1>
        <br /><br />
        <p className='text-white text-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore.</p>
        </div>
     </div>
    </div>
  )
}

export default Ab