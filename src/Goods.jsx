import React from 'react'

const Goods = () => {
  return (
    <div className='h-[1000px] w-full '>
    
    <div className='h-[400px] w-full flex justify-around items-center'>
        <h1 className='text-3xl'>Shop</h1>
    </div>
    
    <div className='flex justify-around items-center h-[300px] w-full'>
        <div className='flex flex-col h-[400px] w-[400px] justify-around items-center'>
          <div className='group flex h-[400px] w-[400px]'>
            <img src="glass2.webp" className='h-[400px] w-[400px]  object-cover group-hover:hidden transition-all duration-300' />
            <img src="glass1.webp" className=  'hidden h-[400px] w-[400px]  object-cover group-hover:block ' />
        </div>
        <br />
        <div>
          <h1 className='text-3xl'>Style 01</h1>
          <br />
          <h1 className='text-center'>$0.00</h1>
        </div>
        </div>
        <div className='flex flex-col h-[400px] w-[400px] justify-around items-center'>
          <div className='group flex h-[400px] w-[400px]'>
            <img src="bag1.webp" className='h-[400px] w-[400px]  object-cover group-hover:hidden transition-all duration-300' />
            <img src="bag2.webp" className=  'hidden h-[400px] w-[400px]  object-cover group-hover:block ' />
        </div>
        <br />
        <div>
          <h1 className='text-3xl'>Style 02</h1>
          <br />
          <h1 className='text-center'>$0.00</h1>
        </div>
        </div>

       <div className='flex flex-col h-[400px] w-[400px] justify-around items-center'>
          <div className='group flex h-[400px] w-[400px]'>
            <img src="purse1.webp" className='h-[400px] w-[400px]  object-cover group-hover:hidden transition-all duration-300' />
            <img src="purse2.webp" className=  'hidden h-[400px] w-[400px]  object-cover group-hover:block ' />
        </div>
        <br />
        <div>
          <h1 className='text-3xl'>Style 03</h1>
          <br />
          <h1 className='text-center'>$0.00</h1>
        </div>
        </div>
    </div>
    
    </div>
  )
}

{/* <div className=" flex w-64 h-64">
  <img
    src="/image1.jpg"
    className="hover:hidden w-full h-full object-cover transition-all duration-300"
  />
  <img
    src="/image2.jpg"
    className="hidden hover:block w-full h-full object-cover"
  />
</div> */}


export default Goods