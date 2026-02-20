import React from 'react'

const Form = () => {
  return (
    <div className='bg-amber-50 h-[400px] w-full  flex flex-col justify-center items-center'>
        <h1 className='text-4xl scroll-reveal'>How much should my agency spend on design?</h1>
        <br />
        <h1>Give us your name and email address to download our free guide.</h1>
        <br />
        <div className='flex gap-10 scroll-reveal'>
            <input type="text" className='bg-white w-[250px] h-[60px] p-4' placeholder='First Name'/>
            <input type="text" className='bg-white w-[250px] h-[60px] p-4' placeholder='Last Name'/>
            <input type="text" className='bg-white w-[250px] h-[60px] p-4' placeholder='Email Address'/>
             <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 w-[200px] h-[60px]">
      Schedule a Call
    </button>
        </div>
    </div>
  )
}

export default Form