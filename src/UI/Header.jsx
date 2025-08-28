import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuHandler = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="p-7 bg-neutral-900 text-white">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <h3 className="text-3xl font-bold">ATLAS</h3>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex">
            <ul className="flex gap-7">
              <li><NavLink to="/" className={({ isActive }) => isActive ? "text-white" : "text-neutral-600"}>Home</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-white" : "text-neutral-600"}>About</NavLink></li>
              <li><NavLink to="/country" className={({ isActive }) => isActive ? "text-white" : "text-neutral-600"}>Country</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-white" : "text-neutral-600"}>Contact</NavLink></li>
            </ul>
          </nav>

          {/* Mobile Hamburger */}
          <button className="lg:hidden text-3xl border-2 border-neutral-600 p-1 rounded-lg" onClick={menuHandler}>
            <HiMenuAlt3 />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`side-menu fixed top-0 right-0  w-64 h-full   bg-neutral-800 text-white transform transition-transform duration-300 z-50  ${
          menuOpen ? "translate-x-0 w-64" : "translate-x-full w-64"
        }`}
      >
        <ul className="flex flex-col gap-6 p-6  justify-center">
         <li><NavLink to="/" className={({ isActive }) => isActive ? "text-white" : "text-neutral-600"} onClick={menuHandler}>Home</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-white" : "text-neutral-600"} onClick={menuHandler}>About</NavLink></li>
              <li><NavLink to="/country" className={({ isActive }) => isActive ? "text-white" : "text-neutral-600"} onClick={menuHandler}>Country</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-white" : "text-neutral-600"} onClick={menuHandler}>Contact</NavLink></li>
        </ul>
      </div>
    </>
  )
}

export default Header
