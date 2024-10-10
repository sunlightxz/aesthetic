import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const linksRef = useRef([]);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    if (isMenuOpen) {
      // Prevent scrolling when menu is open
      document.body.style.overflow = 'hidden';
      
      gsap.fromTo(linksRef.current,
        { y: window.innerHeight },
        { y: 0, stagger: 0.1, duration: 0.5, ease: "power3.out" }
      );
    } else {
      // Re-enable scrolling when menu is closed
      document.body.style.overflow = 'unset';
      
      gsap.to(linksRef.current, {
        y: window.innerHeight,
        stagger: 0.1,
        duration: 0.5,
        ease: "power3.in"
      });
    }

    // Cleanup function to ensure scrolling is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isMenuOpen ? 'h-screen w-screen gap-4 bg-black' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between px-4 sm:px-16 py-3 text-white font-adamina">
    <div className="relative w-full group">
    <Link 
                href="/" 
                className="
                  block hover:text-gray-300 text-[28px] leading-5 
                  transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.075,0.82,0.165,1)]
                  group-hover:opacity-0 group-hover:translate-y-[120%]
                "
              >
          Say Hello
          </Link>
              <Link 
                href="/" 
                className="
                  block hover:text-gray-300 text-[28px] leading-5 
                  absolute top-0 left-0 opacity-0 
                  transition-all duration-500 
                  translate-y-[-120%] group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >
                Aesthetic
              </Link>
    </div>
        
        {/* Hamburger menu for mobile */}
        <div className="sm:hidden">
        <button onClick={toggleMenu} className=" text-white focus:outline-none flex justify-center items-center w-12 h-12 relative">
            <span className={`block w-8 h-0.5 bg-white absolute transition-all duration-300 ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
            <span className={`block w-8 h-0.5 bg-white absolute transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-8 h-0.5 bg-white absolute transition-all duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
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
      <div className={`sm:hidden flex flex-col justify-center items-center transition-all duration-500 ${isMenuOpen ? 'h-[calc(100%-5rem)] opacity-100' : 'h-0 opacity-0'} overflow-hidden`}>
      {['Work', 'About', 'Shop', 'Contact'].map((item, index) => (
        <motion.div className="" key={item}             ref={el => linksRef.current[index] = el}
>
            <Link
            href="/"
            className="block  relative leading-[80%] tracking-widest hover:tracking-tight text-center py-4 text-[15vw] text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            {item}
          </Link>
        </motion.div>
        ))}
      </div>
    </nav>
  )
}

export default Nav




