import React from 'react'

const Lastland = () => {
  return (
    <div className='bg-black h-[300px] w-full flex flex-col justify-center items-center'>
        <div className='flex gap-3 scroll-reveal'>
            <div className='h-[30px] w-[30px] bg-white rounded-full'></div>
            <div className='h-[30px] w-[30px] bg-white rounded-full'></div>
            <div className='h-[30px] w-[30px] bg-white rounded-full'></div> 
        </div>
<br />
        <h1 className='text-white scroll-reveal'>123 Demo Street, New York NY   |   (555) 555-5555   |   email@example.com</h1>
        <br />
        <h1 className='text-white scroll-reveal'>© 2024 Company Name. All rights reserved. Design by <span className='text-amber-600 underline'><a href="https://www.storysite.co/">StorySite</a></span>.</h1>
    </div>
  )
}

export default Lastland