import React from 'react'
import {Link} from 'react-router-dom'
import Search from './Search'

const Navbar = ({darktheme, setDarktheme}) => {
  return (
    <div className='p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
        <div className='flex justify-between items-center space-x-5 w-screen'>
            <Link to='/'>
                <p className='text-2xl bg-blue-500 font-bold text-white mb-2 py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-800'>
                    FindIt 
                </p>
            </Link>
            <button type='button' onClick={() => setDarktheme(!darktheme)} className='text-xl dark:bg-gray-300 dark:text-gray-800 bg-gray-400 border rounded-full px-2 py-1 hover:shadow-lg '> {darktheme ? 'Light' : 'Dark'}</button>
            
        </div>
        <Search />
    </div>
  )
}

export default Navbar