import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

const   Explore = () => {

  useEffect(()=> {
    const tl = gsap.context({
      scrollTrigger: {
        trigger: '.reveal1',
        start: "top top",
        end: "top top", // Adjust this based on your content length
        scrub: true,
        pin: true,
        markers: true,
      },
    });
  },[])
  return (
    <div className="w-screen h-full relative flex-shrink-0  bg-black px-[140px]">
      <div className="min-w-screen relative flex justify-center items-center h-full reveal1">
        <h1 className="text-[120px] font-poppins z-30 font-medium">
          LET’S EXPLORE
        </h1>
        <div
          className="card absolute overflow-hidden z-10 left-[10%] top-[10%] rounded-lg w-[200px] h-[218px]"
          id="card-1"
        >
          <img src="/exp1.png" alt="" />
        </div>
        <div
          className="card absolute overflow-hidden bottom-[15%] left-[17%] bottom-[15%]  rounded-lg w-[200px] h-[218px]"
          id="card-2"
        >
          <img src="/exp3.png" alt="" />
        </div>
        <div
          className="card card absolute overflow-hidden right-[10%]  rounded-lg w-[347px] h-[429px]"
          id="card-3"
        >
          <img src="/exp2.png" alt="" />
        </div>
      </div>

      <div className="min-w-screen w-full absolute bg-white h-full reveal2">
      <h1 className="text-[120px] font-poppins z-30 font-medium">
          LET’S EXPLORE
        </h1>
        <div
          className="card absolute overflow-hidden z-10 left-[10%] top-[10%] rounded-lg w-[200px] h-[218px]"
          id="card-4"
        >
          <img src="/exp1.png" alt="" />
        </div>
        <div
          className="card absolute overflow-hidden bottom-[15%] left-[17%] bottom-[15%]  rounded-lg w-[200px] h-[218px]"
          id="card-5"
        >
          <img src="/exp3.png" alt="" />
        </div>
        <div
          className="card card absolute overflow-hidden right-[10%]  rounded-lg w-[347px] h-[429px]"
          id="card-6"
        >
          <img src="/exp2.png" alt="" />
        </div>

      </div>
    </div>
  );
};

export default Explore;
