import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const scrollContainer = useRef(null);
  const imgHolderRef = useRef(null);
  const horizontalSectionRef = useRef(null);
  const firstSectionRef = useRef(null);

  useEffect(() => {

    const lenis = new Lenis({
      smooth: true,
      duration: 1, // Adjust smoothness duration as needed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Lenis updates GSAP ScrollTrigger on scroll
    lenis.on("scroll", ScrollTrigger.update);

    // Create the scroll animation using GSAP and ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollContainer.current,
        start: "top top",
        end: "150% top",
        scrub: true,
        pin: true, // Pin the scrollContainer while scrolling
      },
    });

    // Animation to move the first section up
    tl.to(firstSectionRef.current, { y: '-100%',ease: "power2.inOut", duration: 1 })
    .fromTo(
      imgHolderRef.current,
      { scale: 1.5, ease: "power2.inOut" },
      { scale: 1,  ease: "power2.inOut" },0
    )
    .to(imgHolderRef.current, { width: "50%",ease: "power2.inOut",duration: 1});
    return () => {
      lenis.destroy(); // Clean up Lenis on component unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={scrollContainer} className="w-[600vw] relative overflow-hidden">
      <div className="h-screen w-screen relative">
        <div className="flex w-[270vw]">
          <div className="w-screen h-screen relative">
            <section
              ref={firstSectionRef}
              className="h-[70vh] absolute left-0 top-0 z-10 first-section w-screen border-b border-[#C7BCBC]"
            >
              <div className="absolute inset-0 bg-[url('/bg.gif')] bg-cover bg-center bg-no-repeat z-0 opacity-60"></div>
              <div className="flex h-full bg-black opacity-90 z-10 justify-between items-center px-[2.5em]">
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

            {/* Second Section (Image with Scroll Animation) */}
            <section
              ref={imgHolderRef}
              className="flex items-center justify-center w-screen h-screen transition-all duration-500"
            >
              {/* Background image controlled by CSS */}
              <div className="img-holder"></div>
            </section>
          </div>

          {/* Horizontal Scroll Section */}
          <div ref={horizontalSectionRef} className="flex h-screen w-[170vw]">
            {/* Horizontal scroll items */}
            <div className="w-screen h-full flex-shrink-0 flex items-center justify-center bg-red-300">
              <h2 className="text-3xl">Horizontal Section 1</h2>
            </div>
            <div className="w-screen h-full flex-shrink-0 flex items-center justify-center bg-blue-300">
              <h2 className="text-3xl">Horizontal Section 2</h2>
            </div>
            <div className="w-screen h-full flex-shrink-0 flex items-center justify-center bg-green-300">
              <h2 className="text-3xl">Horizontal Section 3</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
