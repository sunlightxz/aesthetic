import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from 'next/image';

const Explore = ({ horizontalTl }) => {
  const boxHolderRef = useRef(null);
  const boxRef = useRef(null);
  const boxARef = useRef(null);

  useEffect(() => {
    if(horizontalTl){
      const boxRevealTl = gsap.timeline({
        scrollTrigger: {
          trigger: horizontalTl.current,
          start: "25%", 
          end: "28%",      
          scrub: 4,
        },
      });

      boxRevealTl.fromTo('.card',  {
        rotation: 15,
        y: 50
      },
      {
        rotation: 0,
        y: 0,
        duration: 1,
        ease: "power2.out"
      },)
      .fromTo(boxARef.current, 
        {
          clipPath: "inset(0px 0px 0px 100%)",
        },
        {
          clipPath: "inset(0px 0px 0px 0%)",
          ease: "power2.inOut",
        },
        0.2
      );
    }
  }, [horizontalTl]);

  return (
    <div
      data-pin="true"
      ref={boxHolderRef} 
      className="h-screen w-screen relative flex justify-center items-center flex-shrink-0 bg-black px-4 sm:px-8 lg:px-[140px]"
    >
      <div ref={boxRef} className="min-w-screen h-full relative flex justify-center items-center">
        <h1 className="text-4xl sm:text-6xl lg:text-[120px] text-white font-poppins z-20 font-medium text-center">
          LET&apos;S EXPLORE
        </h1>
        <div className="hidden lg:block">
          <div className="card absolute overflow-hidden z-10 
            left-[13%] bottom-[67%] 
            rounded-lg w-[200px] h-[218px]" 
            id="card-1"
          >
            <div className="relative w-full h-full">
              <Image
                src="/exp1.png"
                alt="Explore 1"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="card absolute overflow-hidden 
            top-[61%] left-[45%] 
            rounded-lg w-[200px] h-[218px]" 
            id="card-2"
          >
            <div className="relative w-full h-full">
              <Image
                src="/exp3.png"
                alt="Explore 3"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="card absolute overflow-hidden 
            left-[80%] bottom-[20%] 
            rounded-lg w-[347px] h-[429px]" 
            id="card-3"
          >
            <div className="relative w-full h-full">
              <Image
                src="/exp2.png"
                alt="Explore 2"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex min-w-screen w-full absolute z-30 justify-center items-center h-full reveal2 bg-white" 
        ref={boxARef}
      >
        <h1 className="text-[120px] text-black font-poppins z-40 font-medium">
          LET&apos;S EXPLORE
        </h1>

        <div className="card absolute overflow-hidden z-10 
          left-[24%] bottom-[67.3%] 
          rounded-lg w-[200px] h-[218px]" 
          id="card-1"
        >
          <div className="relative w-full h-full">
            <Image
              src="/exc2.png"
              alt="Exclusive 2"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="card absolute overflow-hidden 
          top-[61%] left-[45%] 
          rounded-lg w-[200px] h-[218px]" 
          id="card-2"
        >
          <div className="relative w-full h-full">
            <Image
              src="/exc3.png"
              alt="Exclusive 3"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="card absolute overflow-hidden 
          left-[70%] bottom-[20%] 
          rounded-lg w-[347px] h-[429px]" 
          id="card-3"
        >
          <div className="relative w-full h-full">
            <Image
              src="/exc1.png"
              alt="Exclusive 1"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
