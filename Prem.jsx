import React from 'react'
import Button from './src/Button'

const Prem = () => {
  return (
   <div className='h-[650px] w-[100%] bg-white flex justify-center items-center mb-16'>
      <div className='relative  w-[80%] top-24'>
        <img src="bulb.webp" className='h-[500px] w-[800px] rounded-ee-full'/>
        <div className='h-[450px] w-[450px] bg-amber-50 absolute top-6 left-[700px] flex flex-col justify-center items-center'>
            <h1 className='text-4xl'>We believe <span className='font-bold'>premium 
                <br />design </span> doesn’t have to <br />
                break the bank.</h1><br />
                <div className='flex justify-center items-center'>
               <p>Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit, sed do eiusmod tempor incididunt <br />
                ut labore et dolore magna aliqua. Lorem ipsum <br /> dolor sit amet, consectetur adipiscing elit, sed do <br />
                 eiusmod tempor incididunt ut labore et dolore <br />
                 magna aliqua.</p>
        </div>
<br />
        <Button/>
        </div>
        </div>
    </div>
  )
}

export default Prem