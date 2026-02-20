import React from 'react'

const Blim = () => {
  return (
    <div className='h-[500px] w-full flex justify-around items-center'>
        <div className='h-[400px] w-full flex justify-around items-center'>
            <div className='flex h-[300px] w-[80%] justify-around items-center'>
                <div className='flex flex-col w-[35%] h-[300px] justify-around items-center'>
                    <div><img src="blog1.webp"  className='w-[300px] h-[200px]'  /></div>
                    <h1>3/11/19</h1>
                    <h1 className='text-2xl'>Blog Post Title One</h1> <br />
                    <h1>It all begins with an idea.</h1>
                </div>
                <div className='flex flex-col w-[35%] h-[300px] justify-around items-center'>
                    <div><img src="photography.webp"  className='w-[300px] h-[200px]' /></div>
                    <h1>3/11/19</h1>
                    <h1 className='text-2xl'>Blog Post Title One</h1> <br />
                    <h1>It all begins with an idea.</h1>
                </div>
                <div className='flex flex-col w-[35%] h-[300px] justify-around items-center'>
                    <div><img src="bulb.webp"  className='w-[300px] h-[200px]' /></div>
                    <h1>3/11/19</h1>
                    <h1 className='text-2xl'>Blog Post Title One</h1> <br />
                    <h1>It all begins with an idea.</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blim