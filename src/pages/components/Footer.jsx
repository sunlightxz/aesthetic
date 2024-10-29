import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black w-screen text-white min-h-screen absolute bottom-0'>
      {/* Main Content Section */}
      <div className="min-h-[90vh] pt-[160px] md:pt-[120px] w-full pb-[60px] px-[26px] md:px-[40px] sm:px-[20px] flex flex-col justify-between items-start">
        {/* Upper Section */}
        <div className="flex flex-col md:flex-row w-full h-full justify-between items-start">
          {/* Logo */}
          <h3 className='md:text-[48px] sm:text-[36px] text-[28px] text-[#EAEAEA] font-adamina mb-10 md:mb-0'>Aesthetic</h3>
          
          {/* Navigation Links */}
          <div className="flex flex-col justify-center items-start">
            <a className='text-[48px] md:text-[36px] sm:text-[28px] font-adamina tracking-wider mb-7 sm:mb-4 hover:text-gray-300 transition-colors' href="">Work</a>
            <a className='text-[48px] md:text-[36px] sm:text-[28px] font-adamina tracking-wider mb-7 sm:mb-4 hover:text-gray-300 transition-colors' href="">About</a>
            <a className='text-[48px] md:text-[36px] sm:text-[28px] font-adamina tracking-wider mb-7 sm:mb-4 hover:text-gray-300 transition-colors' href="">Purpose</a>
            <a className='text-[48px] md:text-[36px] sm:text-[28px] font-adamina tracking-wider hover:text-gray-300 transition-colors' href="">Contact</a>
          </div>
        </div>

        {/* Let's Chat Section */}
        <div className="">
         <h3 className='text-[64px] md:text-[48px] sm:text-[36px] tracking-wide text-white font-bold font-adamina'>Let&apos;s Chat</h3>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='md:h-[10vh] h-[15vh] border-t border-gray-400 w-full'>
        <div className="flex flex-col md:flex-row justify-between items-center w-full h-full md:px-[40px] px-[10px] py-4 md:py-0">
          {/* Social Links */}
          <div className="w-full md:w-5/12 flex  gap-5 items-center mb-4 md:mb-0">
            <a className='md:text-2xl sm:text-xl text-lg text-[#EAEAEA] hover:text-gray-300 transition-colors' href="https://x.com/AmineAsfar"><span>Twitter</span></a>
            <a className='md:text-2xl sm:text-xl text-lg text-[#EAEAEA] hover:text-gray-300 transition-colors' href="https://github.com/sunlightxz"><span>Github</span></a>
            <a className='md:text-2xl sm:text-xl text-lg text-[#EAEAEA] hover:text-gray-300 transition-colors' href="https://www.instagram.com/portugas_d.amine/"><span>Instagram</span></a>
          </div>

          {/* Contact Email */}
          <div className="w-full md:w-4/12 text-center mb-4 md:mb-0">
            <p className="text-[#EAEAEA] md:text-2xl sm:text-xl text-lg">
              Contact me on : <a href="" className="hover:text-gray-300 transition-colors">amine@regie404.ma</a>
            </p>
          </div>

          {/* Credits */}
          <div className="w-full md:w-3/12 text-center md:text-right">
            <p className="text-[#EAEAEA] md:text-2xl sm:text-xl text-lg">Credit: Sunlightxz</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
