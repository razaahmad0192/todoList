import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between bg-indigo-900 p-0 shadow-md text-white py-2'>
      <div className="logo ">
        <span className="fontbold text-xl md:text-2xl ml-9 flex justify-start">
          iTask
        </span>
      </div>

      <ul className='flex gap-2 md:gap-8 mx-4 md:mx-9'>

        <NavLink className={({ isActive }) => isActive ? "bg-indigo-700 md:px-3 px-3 py-1 rounded-md" : "hover:bg-indigo-800 px-3 py-1 rounded-md"} to={'/home'}>

          <li className='cursor-pointer hover:font-bold transition-all duration-200  md:text-lg text-sm'>Home </li>

        </NavLink>

        <NavLink className={({ isActive }) => isActive ? "bg-indigo-700 md:px-3 px-3 py-1 rounded-md" : "hover:bg-indigo-800 px-3 py-1 rounded-md"} to={'/tasks'}>
          <li className='cursor-pointer hover:font-bold transition-all duration-200  md:text-lg text-sm'>Tasks</li>
        </NavLink>

      </ul>
    </nav>
  )
}

export default Navbar
