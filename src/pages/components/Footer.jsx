import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black w-screen text-white h-screen absolute bottom-0'>
      <div className="h-[90vh]  pt-[160px] w-full pb-[60px] px-[56px] flex flex-col justify-between items-start">
        <div className="flex w-full h-full justify-between items-start">
          <h3 className='text-[48px] text-[#EAEAEA] font-adamina'>Aesthetic</h3>
          <div className="flex flex-col justify-center items-start">
            <a className='text-[48px] font-adamina tracking-wider mb-7' href="">Work</a>
            <a className='text-[48px] font-adamina tracking-wider mb-7' href="">About</a>
            <a className='text-[48px] font-adamina tracking-wider mb-7' href="">Purpose</a>
            <a className='text-[48px] font-adamina tracking-wider ' href="">Contact</a>
          </div>
        </div>

        <div className="">
         <h3 className='text-[64px] tracking-wide text-white font-bold font-poppins'>Let's Chat</h3>
        </div>
      </div>
      <div className='h-[10vh] border-t border-gray-400 w-full'>
        <div className="flex justify-between items-center w-full h-full px-[56px]">
          <div className="w-3/12 text-[#EAEAEA]  flex justify-between items-center">
            <a className='text-2xl' href=""><span>Twitter</span></a>
            <a className='text-2xl' href=""><span>Github</span></a>
            <a className='text-2xl' href=""><span>Instagram</span></a>
          </div>
          <div className="w-5/12 justify-center flex items-center">
            <p className="text-[#EAEAEA] text-2xl"> Contact me on : <a href="">amine@regie404.ma</a></p>
          </div>
          <div className="w-3/12 justify-center flex items-center">
            <p className="text-[#EAEAEA]  text-2xl">Credit: Sunlightxz</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
