import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    
    <div>
      <nav className="conatainer bg-slate-400 flex justify-around">
      <div className="logo w-[70px] p-2">
        <img className="rounded-full bg-slate-600 opacity-70 z-5  transform hover:scale-125 transition-transform duration-300 cursor-pointer"src="https://as1.ftcdn.net/v2/jpg/04/31/64/08/1000_F_431640822_xerI7gX5xhQZkerHXoTo3P00vl2VJ5s7.jpg"/>
      </div>
      <ul className="home font-semibold text-xl flex gap-48 p-4 list-none ">
        <NavLink to="/home"><li className=" transform hover:scale-125 transition-transform duration-300 cursor-pointer">Home</li></NavLink>
        <NavLink to="/About"><li className=" transform hover:scale-125 transition-transform duration-300 cursor-pointer">About</li></NavLink>
        <NavLink to="/Contact"><li className=" transform hover:scale-125 transition-transform duration-300 cursor-pointer">Contact</li></NavLink>
      </ul>
      </nav>

    </div>
  )
}

export default Navbar