import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Explore = ({ horizontalTl }) => {
  const boxHolderRef = useRef(null);
  const boxRef = useRef(null);
  const boxARef =useRef(null);
  useEffect(() => {
 if(horizontalTl){

  const boxRevealTl = gsap.timeline({
    scrollTrigger: {
      trigger: boxHolderRef.current,
      start: "right 70%", 
      end: "right 40%",   
      scrub: 3,
      markers: true ,
      containerAnimation: horizontalTl, // Link to the horizontal scroll animation
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
  boxRevealTl.fromTo(boxARef.current, 
    {
      clipPath: "inset(0px 0px 0px 100%)",
    },
    {
      clipPath: "inset(0px 0px 0px 0%)",
      ease: "power2.inOut",
    }
    ,0.2
  );

  
 }
   
  }, [horizontalTl]);

  return (
    <div
      data-pin="true"
      ref={boxHolderRef} 
      className={`h-screen w-screen relative flex justify-center items-center flex-shrink-0 bg-black px-[140px]`}
    >
      <div   className="min-w-screen h-full relative flex justify-center items-center">
        <h1 className="text-[120px] text-white font-poppins z-20  font-medium">LET’S EXPLORE</h1>
        <div className="card absolute overflow-hidden z-10 left-[13%] bottom-[67%] rounded-lg w-[200px] h-[218px]" id="card-1">
          <img src="/exp1.png" alt="" />
        </div>
        <div className="card absolute overflow-hidden top-[61%] left-[45%] rounded-lg w-[200px] h-[218px]" id="card-2">
          <img src="/exp3.png" alt="" />
        </div>
        <div className="card absolute overflow-hidden left-[75%] bottom-[20%] rounded-lg w-[347px] h-[429px]" id="card-3">
          <img src="/exp2.png" alt="" />
        </div>
      </div>

      <div className="min-w-screen w-full absolute z-30 flex justify-center items-center h-full reveal2 bg-white"  >
        <h1 className="text-[120px] text-black font-poppins z-40 font-medium">LET’S EXPLORE</h1>
        <div className="card absolute overflow-hidden z-10 left-[13%] bottom-[65%] rounded-lg w-[200px] h-[218px]" id="card-1">
          <img src="/exp1.png" alt="" />
        </div>
        <div className="card absolute overflow-hidden top-[61%] left-[45%] rounded-lg w-[200px] h-[218px]" id="card-2">
          <img src="/exp3.png" alt="" />
        </div>
        <div className="card absolute overflow-hidden left-[75%] bottom-[15%] rounded-lg w-[347px] h-[429px]" id="card-3">
          <img src="/exp2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Explore;
