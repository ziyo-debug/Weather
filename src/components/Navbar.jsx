import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className=' bg-cyan-500 h-[90px] flex justify-center items-center'>
        <ul className='flex gap-3 text-white text-3xl font-semibold'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/timezones">Timezones</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
