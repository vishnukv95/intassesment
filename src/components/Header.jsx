import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-around bg-blue-700'>
      <div className='p-3 ml-5'>
       <a href="/">
           <h2 className='text-3xl font-bold text-white'>StudentPortal</h2>
       </a>
      </div>
       <div className='flex justify-center items-center text-white mx-2'>
        <nav className='flex place-content-center'>
          <ul className='flex  gap-3'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
       </div>
     
    </header>
  )
}

export default Header