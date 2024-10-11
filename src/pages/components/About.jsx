import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import Lenis from "@studio-freight/lenis";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imgContainer = useRef(null);

  useEffect(()=> {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".website-content",
        start: "top top",
        end: "+=170%",
        scrub: 1,
      },
    })
    .to(".img-holder", {
      scale: 1,
      rotate: 0,
      ease: "power2.inOut",
     
    })
    .to(".img-holder img", {
        scale: 1,
        ease: "power2.inOut",
      })
  }, []);

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

      <section className="website-content h-screen w-full z-10">
        <div className="img-holder " ref={imgContainer}>
          <img className="object-cover w-full h-full " src='Main.png'   alt="hero.jpg" />
        </div>
      </section>
    </div>
  );
};

export default About;
