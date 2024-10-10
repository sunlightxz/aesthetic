import React, { useState } from 'react'
import Link from 'next/link'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex flex-col justify-between px-4 sm:px-16 py-8 text-white font-adamina bg-black transition-all duration-300 ${isMenuOpen ? 'h-full' : 'h-auto'}`}>
      <div className="flex items-center justify-between w-full">
        <Link href="/" className="text-[22px] hover:text-gray-300">
          aesthetic
        </Link>
        
        {/* Hamburger menu for mobile */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden sm:flex space-x-16 justify-center items-center">
          {['Work', 'About', 'Shop', 'Contact'].map((item) => (
            <div key={item} className="relative w-full group">
              <Link 
                href="/" 
                className="
                  block hover:text-gray-300 text-2xl leading-5 
                  transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.075,0.82,0.165,1)]
                  group-hover:opacity-0 group-hover:translate-y-[120%]
                "
              >
                {item}
              </Link>
              <Link 
                href="/" 
                className="
                  block hover:text-gray-300 text-2xl leading-5 
                  absolute top-0 left-0 opacity-0 
                  transition-all duration-500 
                  translate-y-[-120%] group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >
                {item}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden flex flex-col justify-center items-center transition-all duration-300 ${isMenuOpen ? 'h-full opacity-100' : 'h-0 opacity-0'} overflow-hidden`}>
        {['Work', 'About', 'Shop', 'Contact'].map((item) => (
          <Link
            key={item}
            href="/"
            className="block text-center py-4 text-2xl hover:text-gray-300"
            onClick={toggleMenu}
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Nav