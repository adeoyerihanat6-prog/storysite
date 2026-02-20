import React from 'react'

const Count = () => {
  return (
    <div className='bg-white h-[1500px] w-full justify-around items-center '>
        <div className='flex justify-around items-center h-[500px] w-full'>
          <div><img src="image one.webp" alt="" className='h-[300px] w-[400px] rounded-se-full'/></div>
          <div>
            <h1 className='text-4xl'>Service 1</h1>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <br />
            <ul className='list-disc pl-10'>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </div>
        </div>

         <div className='flex justify-around items-center h-[500px] w-full'>
          <div><img src="laptop.webp" alt="" className='h-[300px] w-[400px] '/></div>
          <div>
            <h1 className='text-4xl'>Service 2</h1>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <br />
            <ul className='list-disc pl-10'>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </div>
        </div>

         <div className='flex justify-around items-center h-[500px] w-full'>
          <div><img src="street.webp" alt="" className='h-[300px] w-[400px] rounded-bl-full'/></div>
          <div>
            <h1 className='text-4xl'>Service 3</h1>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <br />
            <ul className='list-disc pl-10'>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </div>
        </div>
    </div>
  )

}
export default Count