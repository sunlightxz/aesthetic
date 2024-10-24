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
  const DescripRef = useRef(null);
  const boxHolderRef = useRef(null);
  const boxRef = useRef(null);
  const boxARef =useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [horizontalTl, setHorizontalTl] = useState(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollContainer.current,
        start: "top top",
        end: "300%",
        scrub: true,
        pin: true,
        markers: true,
      },
    });
  
    // Vertical scroll animation for the first section
    tl.to(firstSectionRef.current, {
      y: "-100%",
      ease: "power2.inOut",
      duration: 2, // Duration for the first section animation
    })
      .to(imgHolderRef.current, {
        scale: 1, // Ensure this is the desired final scale
        width: "50%", // Target width
        duration: 1.3, // Duration for scaling and width change
        ease: "power2.inOut",
      })
      .to(horizontalSectionRef.current, {
        x: "-50vw", // Move horizontal section
        ease: "power2.inOut",
        duration: 1, // Duration for horizontal movement
      }, "<") // Start this animation at the same time as the previous one
  
      .to(heroScroll.current, {
        x: "-150vw",
        ease: "power2.inOut",
        duration: 2,
    
      })
      .to(scrollContainer.current, {
        x: "-100vw",
        ease: "power2.inOut",
      })
      .fromTo(
        img1Ref.current,
        { x: "400%" },
        { x: "100%", duration: 1, ease: "power2.inOut" },
         // Start after the previous animations
      )
      .fromTo(
        img2Ref.current,
        { x: "450%" },
        { x: "0%", duration: 1.5, ease: "power2.inOut" },
      )
      .fromTo(
        imgScoll.current,
        { scale: 0.4 },
        { scale: 1, duration: 2, ease: "power2.inOut" },
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
      .fromTo(
        DescripRef.current,
        { y: "180%" },
        { y: "-180%", duration: 3, ease: "power2.inOut" },
         // Start after the previous animations
      )

      const boxRevealTl = gsap.timeline({
        scrollTrigger: {
          trigger: boxHolderRef.current,
          start: "left-=60% 50%", 
          end: "left left",     // Ensures it triggers as you scroll into view
          scrub: 1,    
          containerAnimation: tl ,       // Adjust the scrub value for smoothness
          markers: true,
        },
      });
      boxRevealTl
      .fromTo('.card', {
        rotation: 17,
        y: 50,
      },
      {
        rotation: 0,
        y: 0,
        duration: 1,
        ease: "power2.out",
      })
      .fromTo(boxARef.current, 
        {
          clipPath: "inset(0px 0px 0px 100%)",
        },
        {
          clipPath: "inset(0px 0px 0px 0%)",
          ease: "power2.inOut",
          duration: 1.3,
        }, 0.1
      );
      
    setHorizontalTl(tl);
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
  
            </div>

            {/* Horizontal Scroll Section */}
            <div ref={horizontalSectionRef} className="flex h-screen w-[200vw]">
              <Products />
             

              <div
      data-pin="true"
      ref={boxHolderRef} 
      className={`h-screen w-screen relative flex justify-center items-center flex-shrink-0 bg-black px-[140px]`}
    >
      <div ref={boxRef}  className="min-w-screen h-full relative flex justify-center items-center">
        <h1 className="text-[120px] text-white font-poppins z-20  font-medium">LET’S EXPLORE</h1>
        <div className="card absolute overflow-hidden z-10 left-[13%] bottom-[67%] rounded-lg w-[200px] h-[218px]" id="card-1">
          <img src="/exp1.png" alt="" />
        </div>
        <div className="card absolute overflow-hidden top-[61%] left-[45%] rounded-lg w-[200px] h-[218px]" id="card-2">
          <img src="/exp3.png" alt="" />
        </div>
        <div className="card absolute overflow-hidden left-[80%] bottom-[20%] rounded-lg w-[347px] h-[429px]" id="card-3">
          <img src="/exp2.png" alt="" />
        </div>
      </div>

      <div className="min-w-screen w-full absolute z-30 flex justify-center items-center h-full reveal2 bg-white" ref={boxARef} >
        <h1 className="text-[120px] text-black font-poppins z-40 font-medium">LET’S EXPLORE</h1>
        <div className="card absolute overflow-hidden z-10 left-[24%] bottom-[67.3%] rounded-lg w-[200px] h-[218px]" id="card-1">
          <img src="/exc2.png" alt="" />
        </div>
        <div className="card absolute overflow-hidden top-[61%] left-[45%] rounded-lg w-[200px] h-[218px]" id="card-2">
          <img src="/exc3.png" alt="" />
        </div>
        <div className="card absolute overflow-hidden left-[70%] bottom-[20%] rounded-lg w-[347px] h-[429px]" id="card-3">
          <img src="/exc1.png" alt="" />
        </div>
      </div>
    </div>
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
             <div className="absolute inset-0 overflow-hidden">
              <div className="absolute " ref={img1Ref}>
                  <img src="slac1.png" className="h-screen w-full object-cover" alt="" />
              </div>
              <div className="absolute" ref={img2Ref}>
                  <img src="slac2.png" className="h-screen w-full object-cover" alt="" />
              </div>
              <div className="absolute w-[30%] right-0" ref={DescripRef}>
                <div className="">
                  <h3>How is that going ?</h3>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta eos cumque eius accusamus nesciunt, veniam dignissimos optio facilis id quasi.</p>
                  <img src="/prj3.png" alt="" />
                </div>
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
