import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Products from "../wrapped-component/Products";
import Explore from "../wrapped-component/Explore";
import Plus from "../wrapped-component/Plus";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const scrollContainer = useRef(null);
  const imgHolderRef = useRef(null);
  const horizontalSectionRef = useRef(null);
  const firstSectionRef = useRef(null);

  useEffect(() => {
    // Create the scroll animation using GSAP and ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollContainer.current,
        start: "top top",
        end: "200% top", // Adjust this based on your content length
        scrub: true,
        pin: true,
      },
    });

    // Animation for the first section and image holder
    tl.to(firstSectionRef.current, {
      y: "-100%",
      ease: "power2.inOut",
      duration: 1,
    })
      .fromTo(
        imgHolderRef.current,
        { scale: 1.4, ease: "power2.inOut" },
        { scale: 1, ease: "power2.inOut", duration: 1 },
        0
      )
      .to(imgHolderRef.current, {
        width: "50%",
        duration: 1.3,
        ease: "power2.inOut",
      });

    // Horizontal timeline starts when imgHolder reaches 50% width
    const horizontalTl = gsap.timeline({
      scrollTrigger: {
        trigger: imgHolderRef.current,
        start: "top+=100% center", // Adjust based on when you want to start
        end: "top+=200% center", // Adjust based on how long you want the horizontal scroll
        scrub: true,
      },
    });

    horizontalTl
      .to(horizontalSectionRef.current, {
        x: "-700px", // Move imgHolder slightly left
        ease: "power2.inOut",
        duration: 1.3,
      })
      .to(scrollContainer.current, {
        x: "-400vw", // Translate to horizontal scroll
        ease: "power2.inOut",
        duration: 1.3,
      })
      .to(
        imgHolderRef.current,
        {
          x: "-15%", // Move imgHolder slightly left
          ease: "power2.inOut",
          duration: 1,
        },
        0
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={scrollContainer} className="w-[600vw] relative overflow-hidden">
      <div className="h-screen w-screen relative">
        <div className="flex w-[270vw]">
          <div className="w-screen h-screen relative overflow-hidden">
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
            <section className=" w-screen h-screen transition-all duration-500">
              {/* Background image controlled by CSS */}
              <div className="img-holder" ref={imgHolderRef}></div>
            </section>
          </div>

          {/* Horizontal Scroll Section */}
          <div ref={horizontalSectionRef} className="flex h-screen w-[170vw]">
            <Products/>
            <Explore/>
            <Plus/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
