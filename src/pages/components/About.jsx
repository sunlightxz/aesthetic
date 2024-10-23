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
  const imgScoll = useRef(null);
  const heroScroll = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [horizontalTl, setHorizontalTl] = useState(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollContainer.current,
        start: "top top",
        end: "200%",
        scrub: true,
        pin: true,
        markers: true,
      },
    });
  
    // Vertical scroll animation for the first section
    tl.to(firstSectionRef.current, {
      y: "-100%",
      ease: "power2.inOut",
    
    })
      .fromTo(
        imgHolderRef.current,
        { scale: (1.4,1.5) },
        { scale: 1, duration: 1.7, ease: "power2.inOut" },
        0
      )
      .to(imgHolderRef.current, {
        width: "40%",
        duration: 1.3,
        ease: "power2.inOut",
      });
  
    // Horizontal scroll animation setup
    const newhorizontalScroll = gsap.timeline({
      scrollTrigger: {
        trigger: imgHolderRef.current,
        start: "top+=115% center",
        end: "top+=240%",
        scrub: true,
        markers: true,
        onUpdate: (self) => {
          const progress = self.progress.toFixed(2) * 100;
          setScrollProgress(progress);
        },
      },
    });
  
    newhorizontalScroll
      .to(horizontalSectionRef.current, {
        x: "-750px",
        ease: "power2.inOut",
        duration: 1,
      })
      .to(heroScroll.current, {
        x: "-150vw",
        ease: "power2.inOut",
        duration: 2.3,
      })
      .to(scrollContainer.current, {
        x: "-28.6%",
        ease: "power2.inOut",
      });
  
    // Synchronize the images' animations with delays
    const imgAnimationStartTime = newhorizontalScroll.totalDuration(); // Gets the total duration up to this point
  
    newhorizontalScroll
      .fromTo(
        img1Ref.current,
        { x: "400%" },
        { x: "100%", duration: 1, ease: "power2.inOut" },
        imgAnimationStartTime // Start after the previous animations
      )
      .fromTo(
        img2Ref.current,
        { x: "450%" },
        { x: "0%", duration: 1.5, ease: "power2.inOut" },
        imgAnimationStartTime // Start after the previous animations
      )
      .fromTo(
        imgScoll.current,
        { scale: 0.4 },
        { scale: 1, duration: 2, ease: "power2.inOut" },
        imgAnimationStartTime // Start after the previous animations
      )
      .fromTo(
        img2Ref.current,
        { scale: "0.4" },
        { scale: "1", duration: 1.5, ease: "power2.inOut" },
         // Start after the previous animations
      )
      .fromTo(
        img1Ref.current,
        { scale: "0.4" },
        { scale: "1", duration: 1.5, ease: "power2.inOut" },
         // Start after the previous animations
      )
  
    setHorizontalTl(newhorizontalScroll);
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  
  

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 p-4 z-50 bg-black text-white">
        <h3>Scroll Progress: {scrollProgress}%</h3>
      </div>
      <div
        ref={scrollContainer}
        className="w-[350vw] flex relative overflow-hidden"
      >
        <div className="h-screen w-screen relative">
          <div className="flex w-[300vw]" ref={heroScroll}>
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

              <section className="w-screen h-screen transition-all duration-500">
                <div className="img-holder" ref={imgHolderRef}></div>
              </section>
            </div>

            {/* Horizontal Scroll Section */}
            <div ref={horizontalSectionRef} className="flex h-screen w-[200vw]">
              <Products />
              <Explore horizontalTl={horizontalTl} />
            </div>
          </div>
        </div>

        <div className="flex h-[200vh] w-screen flex-col relative bgbglue">
          <div className="w-screen overflow-hidden h-screen flex justify-center items-center bg-white">
            <div className="w-full h-full flex justify-center items-center relative">
              <img
                src="/scale.png"
                alt=""
                className="w-full h-full object-cover"
                ref={imgScoll}
              />
             <div className="absolute inset-0">
              <div className="absolute " ref={img1Ref}>
                  <img src="slac1.png" className="h-screen w-full object-cover" alt="" />
              </div>
              <div className="absolute" ref={img2Ref}>
                  <img src="slac2.png" className="h-screen w-full object-cover" alt="" />
              </div>
             </div>
            </div>
          </div>
          <div className="w-screen h-screen bg-blue-200"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
