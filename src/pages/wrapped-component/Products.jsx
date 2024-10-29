import React from 'react'
import Image from 'next/image'

const Products = () => {
  return (
    <div data-pin="true" className="w-screen h-screen flex-shrink-0 bg-black">
      <div className="flex h-full w-full flex-row justify-center items-center px-4 sm:px-[30px] gap-6 sm:gap-[30px]">
        {/* Product Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:flex lg:flex-row gap-6 sm:gap-[30px] w-full max-w-7xl">
          {/* Card 1 */}
          <div className="flex flex-col gap-4 sm:gap-[30px] w-full">
            <span className="text-white text-lg sm:text-xl font-medium">CityLocks</span>
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image 
                src="/prj1.png" 
                alt="CityLocks Project 1" 
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-4 sm:gap-[30px] w-full">
            <span className="text-white text-lg sm:text-xl font-medium">CityLocks</span>
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image 
                src="/prj2.png" 
                alt="CityLocks Project 2" 
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col gap-4 sm:gap-[30px] w-full">
            <span className="text-white text-lg sm:text-xl font-medium">CityLocks</span>
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image 
                src="/prj3.png" 
                alt="CityLocks Project 3" 
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col gap-4 sm:gap-[30px] w-full">
            <span className="text-white text-lg sm:text-xl font-medium">CityLocks</span>
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image 
                src="/prj4.png" 
                alt="CityLocks Project 4" 
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
