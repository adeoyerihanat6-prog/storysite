import React from 'react'
import Button from './Button'

const Works = () => {
  return (
    <div className='bg-black h-[700px] flex flex-col justify-around '>
        <div className='h-[50px] w-full flex justify-center items-center'>
            <h1 className='text-white text-3xl'>How It Works</h1>
        </div>
        <div className='flex flex-col items-center justify-around scroll-reveal'>
            <div className='flex gap-32'>
                <div className='text-white text-2xl'>1</div>
                <div>
                    <h1 className='text-amber-600 text-2xl'>SCHEDULE A CALL</h1>
                    <br />
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <br />
            <div className='flex gap-32'>
                <div className='text-white text-2xl'>2</div>
                <div>
                    <h1 className='text-amber-600 text-2xl'>SET YOUR 90 DAY PLAN</h1>
                    <br />
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
                <br />
            <div className='flex gap-32'>
                <div className='text-white text-2xl'>3</div>
                <div>
                    <h1 className='text-amber-600 text-2xl'>GET QUALITY DESIGNS</h1>
                    <br />
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>

        <div className='flex justify-center items-center scroll-reveal'>
            <Button/>
        </div>
    </div>
  )
}

export default Works