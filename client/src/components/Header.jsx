import React from 'react'
import {FaSearch} from 'react-icons/fa'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md' >
        <div className="flex justify-between items-center p-3 max-w-6xl mx-auto ">
          <Link to='/'>
           <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Shree</span>
            <span className="text-slate-500">Hari</span>
            <span className="text-slate-700">Estate</span>
           </h1>
           </Link>
           <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
               <input type="text" placeholder='Search...' 
                className='bg-transparent focus:outline-none w-24 sm:w-64'
                />
                <FaSearch className='text-slate-600 '/>
           </form>
           <ul className='flex gap-4'>
           <Link to='/'>
            <li className='hidden sm:inline hover:underline text-slate-700'>Home</li>
            </Link>
            <Link to='/About'>
            <li className='hidden sm:inline hover:underline text-slate-700'>About</li>
            </Link>
            <Link to='/Sign-In'>
            <li className='hover:underline text-slate-700'>Sign in</li>
            </Link>
           </ul>
        </div>
    </header>
  )
}

export default Header
