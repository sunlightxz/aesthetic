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
  const imx1Ref = useRef(null);
  const imx2Ref = useRef(null);
  const mansonRef = useRef(null);
  const imgmanson = useRef(null);
  const darkbox = useRef(null);
  const imgzmanson = useRef(null);
  const endImgRef = useRef(null);
  const endImgctn = useRef(null);
  const endclz = useRef(null);
  const endtxt = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [horizontalTl, setHorizontalTl] = useState(null);

  useEffect(() => {
    const isLargeScreen = window.innerWidth >= 1024;
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollContainer.current,
        start: "top top",
        end: "380%",
        scrub: true,
        pin: true,
        markers: true,
      },
    });

    // Basic animations that run on all screen sizes
    tl.to(firstSectionRef.current, {
      y: "-100%",
      ease: "power2.inOut",
      duration: 2,
    })
    .to(imgHolderRef.current, {
      scale: 1,
      width: "50%",
      duration: 1.3,
      ease: "power2.inOut",
    })
    .to(horizontalSectionRef.current, {
      x: "-50vw",
      ease: "power2.inOut",
      duration: 1,
    }, "<")
    .to(heroScroll.current, {
      x: "-150vw",
      ease: "power2.inOut",
      duration: 2,
    })
    .to(scrollContainer.current, {
      x: "-100vw",
      ease: "power2.inOut",
    });

    // Only run img1Ref and img2Ref related animations on large screens
    if (isLargeScreen) {
      tl.fromTo(
        [img1Ref.current, img2Ref.current],
        { x: "400%" },
        { x: "100%", duration: 1.5, ease: "power2.inOut" },
        "<"
      )
      .fromTo(
        [img1Ref.current, img2Ref.current],
        { x: "100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut",
          stagger: 0.2,
        }
      )
      .fromTo(
        [img1Ref.current, img2Ref.current],
        { scale: 0.4 },
        { scale: 1, duration: 1, ease: "power2.inOut", stagger: 0.2 }
      )
      .to(img2Ref.current, { 
        y: "-20%", 
        duration: 1, 
        ease: "power2.inOut" 
      });
    }

    // Continue with other animations
    tl
    .fromTo(
      imgScoll.current,
      { scale: 0.4 },
      { scale: 1, duration: 1.5, ease: "power2.inOut" },
      "<"
    ).fromTo(
      DescripRef.current,
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1.5, ease: "power2.inOut" }
    )
    .fromTo(
      [imx1Ref.current, imx2Ref.current],
      {
        clipPath: "inset(100% 0px 0px )",
      },
      {
        clipPath: "inset(0% 0px 0px )",
        ease: "power2.inOut",
      }
    )
    .to(mansonRef.current, {
      y: "-100%",
      duration: 2,
      ease: "power2.inOut",
    })
    .to(
      [img1Ref.current, img2Ref.current, DescripRef.current],
      {
        y: "-950px",
        duration: 1.5,
        ease: "power2.inOut",
        stagger: 0.2,
      },
      "<"
    )
    .fromTo(
      darkbox.current,
      {
        x:isMobile ? "0%" : "-350%",
      },
      {
        x: "0px",
        duration: 1.6,
      }
    )
    .fromTo(
      imgzmanson.current,
      { y: "40%" },
      { y: "0", ease: "power2.inOut" },
      "<"
    )
    .to(mansonRef.current, {
      x: "-100vw",
      ease: "power2.inOut",
      duration: 2,
    })
    .to(
      imgScoll.current,
      {
        opacity: isMobile ? 1 : 0,
      },
      17.2
    );

    const updateAnimations = () => {

      if (isLargeScreen) {
      tl.fromTo(
        endImgRef.current,
        {
          width: isMobile ? "75%" : "55%",
          x: isMobile ? 300 : isTablet ? 600 : 926,
          scale: 0.4,
          transformOrigin: "100% 0% ",
        },
        {
          width: "100%",
          x: 0,
          scale: 1,
          duration: 1.5,
          ease: "power2.inOut",
        }
      ).fromTo(
        endImgctn.current,
        {
          width: "25%" ,
          x: isMobile ? 130 : isTablet ? 250 : 580,
        },
        {
          width: "100%",
          x: "0",
          duration: 1.5,
          ease: "power2.inOut",
        },
        "<"
      )
      .fromTo(
        endclz.current, { 
          y: "1100px"
        } ,
        {
       y: "0px"
       , duration : 1.5
        })
        .fromTo(
          endtxt.current, { 
            x: "0px"
          } ,
          {
     x: "-800px" ,
     duration : 1.2 ,
          }
          ,"<"
      )
    }
    }
    setHorizontalTl(tl);
    window.addEventListener('resize', updateAnimations);
    updateAnimations();
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={scrollContainer}
        className="w-[450vw] flex relative overflow-hidden"
      >
        <div className="h-screen w-screen relative">
          <div className="flex w-[300vw]" ref={heroScroll}>
            <div className="w-screen h-screen relative overflow-hidden">
              <section
                ref={firstSectionRef}
                className="h-[70vh] absolute left-0 top-0 z-10 first-section w-screen border-b border-[#C7BCBC]"
              >
                <div className="absolute inset-0 bg-[url('/bg.gif')] bg-cover bg-center bg-no-repeat z-0 opacity-60"></div>
                <div className="md:flex-row flex flex-col md:gap-0 gap-8  h-full bg-black opacity-90 z-10 md:justify-between justify-center items-center px-[2.5em]">
                  <span className="text-[1.5em] md:basis-1/2  text-[#8a8474] font-poppins font-light">
                    (Introduction)
                  </span>
                  <p className="text-[1.5em] text-[#F3F3F3] font-poppins font-light md:basis-1/2">
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

        <div className="flex h-[200vh]  flex-col overflow-hidden relative bgbglue">
          <div className="w-screen h-screen flex justify-center items-center bg-white">
            <div className="w-full h-full flex justify-center items-center relative">
              <img
                src="/scale.png"
                alt=""
                className="w-full h-full object-cover"
                ref={imgScoll}
              />
              <div className="absolute inset-0 flex">
                <div
                  className="flex-1 lg:flex hidden justify-center items-center relative"
                  ref={img1Ref}
                >
                  <img
                    src="slac1.png"
                    className="h-full w-full object-cover"
                    alt=""
                  />
                  <div
                    className="absolute w-full h-full overflow-hidden flex justify-center"
                    ref={imx1Ref}
                  >
                    <img
                      src="/imx1.png"
                      className="h-full absolute bottom-0 w-full object-cover"
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="flex-1 lg:flex hidden justify-center items-center relative"
                  ref={img2Ref}
                >
                  <img
                    src="slac2.png"
                    className="h-full w-full object-cover"
                    alt=""
                  />
                  <div
                    className="absolute w-full h-full overflow-hidden flex justify-center"
                    ref={imx2Ref}
                  >
                    <img
                      src="/imx2.png"
                      className="h-full absolute bottom-0 w-full object-cover"
                      alt=""
                    />
                  </div>
                </div>

                <div
                  className="md:w-[30%] w-full flex flex-col justify-center"
                  ref={DescripRef}
                >
                  <div className="p-4">
                    <h3 className="text-2xl font-bold mb-2">
                      How is it going?
                    </h3>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Soluta eos cumque eius accusamus nesciunt, veniam
                      dignissimos optio facilis id quasi.
                    </p>
                    <img src="/sinjab.png" alt="" className="w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className=" w-[200vw] h-screen flex relative overflow-hidden"
            ref={mansonRef}
          >
            <div className="flex w-screen md:pr-5 px-5 justify-center items-center h-full relative border-gray-400 border-x">
              <div className="md:w-[35%] w-0 flex flex-col  h-full">
                <img className=" w-full h-[50%]" src="/manso1.png" alt="" />
                <img
                  className="manso2 w-full h-[50%]"
                  src="/manso2.png"
                  alt=""
                  ref={imgzmanson}
                />
              </div>
              <div className="md:w-[35%] w-0 flex justify-center items-center">
                <img
                  src="/manso3.png"
                  alt=""
                  className="w-[75%]"
                  ref={imgmanson}
                />
              </div>
              <div className="md:w-[30%] w-full">
                <div
                  className="flex rounded-lg p-8 gap-6 justify-center flex-col md:items-start items-center bg-black text-white min-h-[150px] overflow-hidden"
                  ref={darkbox}
                >
                  <button className="border border-[#8A8472] rounded-xl text-lg text-[#8A8472] px-5 py-1">
                    Our Vision
                  </button>
                  <p className="md:text-[25px] text-xl text-white font-poppins">
                    We’ve worked extensively in terms of geography and sector,
                    developing a variety of work — products, services, and
                    experiences — that has taught us that a well-defined visual
                    strategy is key to bring visibility, credibility, and funds
                    to any organization.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-screen flex h-full relative  ed">
              <div className="h-full  relative items-stretch justify-stretch md:w-[52%] w-full">
               
                <div className="relative md:h-[50vh] h-0 w-full overflow-hidden"ref={endImgRef}>
                  <img
                    // Add this ref
                    src="/end.png"
                    alt=""
                    className=" object-cover w-full"
                  />
                </div>

                <div className="h-full absolute top-0 left-0 md:w-full " ref={endclz}>
                  <img src="/endclz.png" alt="" className="w-full h-full"/>
                </div>

                <div className="flex md:h-[50vh] md:p-0 p-4 h-full z-20 flex-end relative md:justify-end justify-center flex-col w-full pb-10 text-black" ref={endtxt}>
                  <div className="flex rounded-lg md:p-8 p-2 gap-6 justify-center flex-col items-start  text-black min-h-[150px] md:bg-transparent bg-white overflow-hidden">
                    <button className="border border-[#8A8472] rounded-xl text-lg text-[#8A8472] px-5 py-1">
                      Our Vision
                    </button>
                    <p className="md:text-[25px] text-xl font-poppins">
                      We’ve worked extensively in terms of geography and sector,
                      developing a variety of work — products, services, and
                      experiences — that has taught us that a well-defined
                      visual strategy is key to bring visibility, credibility,
                      and funds to any organization.
                    </p>
                  </div>
                </div>

              </div>
              <div className="h-full relative items-stretch justify-stretch md:w-[48%] w-0">
                <div className="w-full h-full" ref={endImgctn}>
                  <img
                    src="/endctn.png"
                    alt=""
                    className="h-full object-cover w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
