import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Explore from "../wrapped-component/Explore";
import Products from "../wrapped-component/Products";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const scrollContainer = useRef(null);
  const imgHolderRef = useRef(null);
  const horizontalSectionRef = useRef(null);
  const firstSectionRef = useRef(null);
  const boxRef = useRef(null); // Ref for the box
  const boxHolderRef = useRef(null);
  const boxARef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0); // Scroll progress state
  const [horizontalTl, setHorizontalTl] = useState(null);

  useEffect(() => {
    // Create the scroll animation using GSAP and ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollContainer.current,
        start: "top top",
        end: "200%", // Adjust based on your content length
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

    // Create the horizontal timeline
    const newHorizontalTl = gsap.timeline({
      scrollTrigger: {
        trigger: imgHolderRef.current,
        start: "top+=100% center",
        end: "top+=200% center",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress.toFixed(2) * 100;
          setScrollProgress(progress);
        },
      },
    });

    newHorizontalTl
      .to(horizontalSectionRef.current, {
        x: "-700px",
        ease: "power2.inOut",
        duration: 1.3,
      })
      .to(scrollContainer.current, {
        x: "-350vw",
        ease: "power2.inOut",
        duration: 2.3,
        scrub: 1,
      })
      .to(
        imgHolderRef.current,
        {
          x: "-15%",
          ease: "power2.inOut",
          duration: 1,
        },
        0
      );

    setHorizontalTl(newHorizontalTl);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 p-4 z-50 bg-black text-white">
        <h3>Scroll Progress: {scrollProgress}%</h3>
      </div>
      <div ref={scrollContainer} className="w-[400vw] relative overflow-hidden">
        <div className="h-screen w-screen relative">
          <div className="flex w-[500vw]">
          <div className="flex w-[300vw]">
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
                    dedicated to crafting unique film and photographic works
                    that entertain and engage.
                  </p>
                </div>
              </section>

              {/* Second Section (Image with Scroll Animation) */}
              <section className="w-screen h-screen transition-all duration-500">
                <div className="img-holder" ref={imgHolderRef}></div>
              </section>
            </div>

            {/* Horizontal Scroll Section */}
            <div ref={horizontalSectionRef} className="flex h-screen w-[200vw]">
               <Products/>
              <Explore horizontalTl={horizontalTl} />
            </div>
          </div>

            <div  className="flex h-screen w-[200vw]">
                <div className="w-screen h-screen"></div>
                <div className="w-screen h-screen"></div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;



