import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Explore = ({ scrollProgress }) => {
  const exploreRef = useRef(null);
  const contpaint = useRef(null);

  useEffect(() => {
    // Set initial state for the clipPath
    gsap.set(contpaint.current, { clipPath: "inset(0 0 0 100%)" });

    // Update clipPath based on scroll progress
    const updateClipPath = () => {
      // Calculate the percentage of scroll progress for the reveal
      const progress = Math.min(Math.max(scrollProgress - 73, 0), 27); // Normalize to 0-27
      const clipValue = 100 - (progress * 100) / 27; // Calculate the clip value

      // Update the clipPath
      gsap.to(contpaint.current, {
        clipPath: `inset(0px 0px 0px ${clipValue}%)`, // Adjust clipPath
        ease: "power2.out",
        duration: 0.5,
        pin :true ,
        scrub :true ,
      });
    };

    // Add a listener for scrollProgress changes
    updateClipPath(); // Call it once initially
  }, [scrollProgress]); // Effect will re-run when scrollProgress changes

  return (
    <div ref={exploreRef} className="h-screen relative flex justify-center items-center flex-shrink-0 bg-black px-[140px]">
      <div className="min-w-screen relative flex justify-center items-center h-full">
        <h1 className="text-[120px] font-poppins z-30 font-medium">LET’S EXPLORE</h1>
        <div className="card absolute overflow-hidden z-10 left-[10%] top-[10%] rounded-lg w-[200px] h-[218px]" id="card-1">
          <img src="/exp1.png" alt="" />
        </div>
        <div className="card absolute overflow-hidden bottom-[15%] left-[17%] rounded-lg w-[200px] h-[218px]" id="card-2">
          <img src="/exp3.png" alt="" />
        </div>
        <div className="card absolute overflow-hidden right-[10%] rounded-lg w-[347px] h-[429px]" id="card-3">
          <img src="/exp2.png" alt="" />
        </div>
      </div>

      {/* Second version of the content (revealed while scrolling) */}
      <div className="min-w-screen w-full absolute flex justify-center items-center bg-white h-full reveal2" ref={contpaint}>
        <h1 className="text-[120px] font-poppins z-30 font-medium">LET’S EXPLORE</h1>
        <div className="card absolute overflow-hidden z-10 left-[10%] top-[10%] rounded-lg w-[200px] h-[218px]" id="card-4">
          <img src="/exp1.png" alt="" />
        </div>
        <div className="card absolute overflow-hidden bottom-[15%] left-[17%] rounded-lg w-[200px] h-[218px]" id="card-5">
          <img src="/exp3.png" alt="" />
        </div>
        <div className="card absolute overflow-hidden right-[10%] rounded-lg w-[347px] h-[429px]" id="card-6">
          <img src="/exp2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Explore;
