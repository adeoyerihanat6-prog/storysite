import React from 'react'
import Button from './Button'

const Packages = () => {
  return (
    <div className='h-[650px] w-full bg-amber-50'>
        <div className='h-[150px] flex justify-center items-center'>
            <h1 className=' text-3xl font-medium'>Packages & Pricing</h1>
        </div>
        <br />
        <div className='h-[300px] flex w-full justify-around items-center scroll-reveal'>
            <div className='h-[300px] w-[350px] bg-white flex flex-col justify-around items-center'>
                <h1 className='text-4xl text-center'>Basic <br />$109/month</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet,<br />
                 consectetur adipiscing elit, sed <br />
                  do eiusmod tempor incididunt <br />
                  ut labore et dolore magna <br />
                   aliqua. Lorem ipsum dolor sit <br />
                    amet, consectetur adipiscing.</p>
            </div>
            <div className='h-[300px] w-[350px] bg-white flex flex-col justify-around items-center'>
                <h1 className='text-4xl text-center'>Premium <br />$599/month</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet,<br />
                 consectetur adipiscing elit, sed <br />
                  do eiusmod tempor incididunt <br />
                  ut labore et dolore magna <br />
                   aliqua. Lorem ipsum dolor sit <br />
                    amet, consectetur adipiscing.</p>
            </div>
            <div className='h-[300px] w-[350px] bg-white flex flex-col justify-around items-center'>
                <h1 className='text-4xl text-center'>Business <br />$999/month</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet,<br />
                 consectetur adipiscing elit, sed <br />
                  do eiusmod tempor incididunt <br />
                  ut labore et dolore magna <br />
                   aliqua. Lorem ipsum dolor sit <br />
                    amet, consectetur adipiscing.</p>
            </div>
        </div>
        <br /><br />
        <div className='flex justify-center items-center scroll-reveal'>
                <Button/>
            </div>
    </div>
  )
}

export default Packages