import React from 'react'
import Button from './Button'

const Face = () => {
  return (
    <div className='flex justify-around items-center h-[600px] w-full'>
        <div>
        <img src="face.webp" alt="" className='h-[450px] w-[300px] rounded-ss-full scroll-reveal' />
</div>
<div className='scroll-reveal'>
    <h1>TAKE IT FROM US</h1>
    <br />
    <h1 className='text-amber-600 text-3xl'>Don’t blow your entire <br /> marketing budget on design.</h1>
    <br />
    <ul class="list-disc text-[16px] ml-10 font-stretch-100%">
        <li>Lorem ipsum dolor sit amet consectetur</li>
        <br />
        <li>Lorem ipsum dolor sit amet</li>
        <br />
        <li>Lorem ipsum dolor sit amet consectetur</li>
        <br />
        <li>Lorem ipsum dolor sit amet</li>
        <br />
    </ul>
    <br />
    <Button/>
</div>
    </div>
  )
}

export default Face