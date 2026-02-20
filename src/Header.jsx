import React from 'react'

const Header = () => {
  return (
    <div className='bg-black text-white h-20 flex justify-around items-center'>
        <h1 className='text-4xl font-bold'>Logo</h1>
        <ol className='flex gap-5'>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/about"></Link></li>
            <li><Link to = "/blim"></Link></li>
        </ol>
    </div>
  )
}

export default Header