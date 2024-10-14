import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const imgContainer = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      smooth: true,
      duration: 1.5, // Adjust smoothness duration as needed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Lenis updates GSAP ScrollTrigger on scroll
    lenis.on("scroll", ScrollTrigger.update);

    // GSAP Scroll Animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-section ",
        start: "top top",
        end: "+=120%", 
        scrub: 1,
        markers: true,
      },
    });
    
    // Image scales down and moves downward
    tl.fromTo(
      ".img-holder img",
      { scale: 1.5, ease: "power2.inOut" },
      { scale: 1,  ease: "power2.inOut" }
    );

    // First section moves up
    tl.to(".first-section", {
      y: "-100%", // Moves the section up
      ease: "power2.inOut",
    });

    return () => {
      lenis.destroy(); // Clean up Lenis on component unmount
    };
  }, []);

  return (
    <div className="h-[150vh] relative w-screen flex flex-col items-center website-content">
      <section className="h-[50vh] first-section relative z-20 bg-black w-screen flex flex-col justify-center items-center border-b-[#C7BCBC] border-b">
        <div className="flex h-full justify-between items-center px-[2.5em]">
          <span className="text-[1.5em] basis-1/2 text-[#8a8474] font-poppins font-light">
            (Introduction)
          </span>
          <p className="text-[1.5em] text-[#F3F3F3] font-poppins font-light basis-1/2">
            We are a tight-knit collective of artists and creative minds
            dedicated to crafting unique film and photographic works that
            entertain and engage.
          </p>
        </div>
      </section>
      <section className="sticky bottom-0 w-full min-h-screen z-10">
        <div className="img-holder h-full w-full relative overflow-hidden">
          <img src="/main.png" alt="" />
        </div>
      </section>
    </div>
  );
};

export default About;
