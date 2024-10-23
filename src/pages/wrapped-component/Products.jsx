import React from 'react'

const Products = () => {
  return (
    <div data-pin="true" className="w-screen h-screen flex-shrink-0 bg-black">
              <div className="flex h-full w-full flex-row justify-center items-center px-[30px] gap-[30px]">
                <div className="flex flex-col gap-[30px]">
                  <span>CityLocks</span>
                  <img src="/prj1.png" alt="" />
                </div>
                <div className="flex flex-col gap-[30px]">
                  <span>CityLocks</span>
                  <img src="/prj2.png" alt="" />
                </div>
                <div className="flex flex-col gap-[30px]">
                  <span>CityLocks</span>
                  <img src="/prj3.png" alt="" />
                </div>
                <div className="flex flex-col gap-[30px]">
                  <span>CityLocks</span>
                  <img src="/prj4.png" alt="" />
                </div>
              </div>
            </div>
  )
}

export default Products