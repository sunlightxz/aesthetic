import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imgRef = useRef(null);



  return (
    <div className="h-screen relative w-screen flex flex-col items-center">
      <section className="h-[50vh] w-screen flex flex-col justify-center items-center border-b-[#C7BCBC] border-b">
        <div className="flex h-full justify-between items-center px-[2.5em]">
          <span className="text-[1.5em] basis-1/2 text-[#8a8474] font-poppins font-light">(Introduction)</span>
          <p className="text-[1.5em] text-[#F3F3F3] font-poppins font-light basis-1/2">
            We are a tight-knit collective of artists and creative minds dedicated
            to crafting unique film and photographic works that entertain and
            engage.
          </p>
        </div>
      </section>

      <section className="h-screen">
        <div
          className="hero-imgs bg-[url('/main.png')] bg-cover bg-center h-screen"
        >
         
        </div>
      </section>
    </div>
  );
};

export default About;
