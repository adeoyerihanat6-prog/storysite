import React from 'react'
import Button from './Button'

const Who = () => {
  return (
   
    <div className='h-[600px] w-full flex justify-center items-center'>
<div className='relative w-[80%] top-24'>
    <img src="work.webp" alt="" className='h-[500px] w-[800px] rounded-ee-full' />
    <div className='h-[450px] w-[470px] bg-amber-50 absolute top-6 left-[700px] flex flex-col justify-center items-center'>
<h1 className='text-4xl mr-36'>Who We Are</h1>
<br />
<p>Lorem ipsum dolor sit amet, consectetur <br />
adipiscing elit, sed do eiusmod tempor incididunt <br />
 ut labore.</p>
 <br />
 <p>Lorem ipsum dolor sit amet, consectetur <br />
  adipiscing elit, sed do eiusmod tempor incididunt <br />
   ut labore et dolore magna aliqua. Lorem ipsum <br />
    dolor sit amet. Lorem ipsum dolor sit amet, <br />
     consectetur adipiscing elit, sed do eiusmod.</p>
     <br />
     <div className='mr-36'>
     <Button/>
     </div>
</div>
</div>
    </div>
  )
}

export default Who