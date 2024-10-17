import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollWithBgChange = () => {
  const scrollContainerRef = useRef(null);
  const section3Ref = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const sections = gsap.utils.toArray(".section");

    // Horizontal scroll animation
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scrollContainerRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + scrollContainerRef.current.offsetWidth,
        onUpdate: (self) => {
          // Update the scroll progress state based on the scroll progress
          const progress = self.progress.toFixed(2) * 100;
          setScrollProgress(progress);

          // Change background color of section 3 when progress reaches 35%
          if (progress >= 50) {
            section3Ref.current.style.backgroundColor = "yellow";
          } else {
            section3Ref.current.style.backgroundColor = "white";
          }
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      {/* Display the horizontal scroll progress */}
      <div className="fixed top-0 left-0 p-4 z-50 bg-black text-white">
        <h3>Horizontal Scroll Progress: {scrollProgress}%</h3>
      </div>

      <div
        className="horizontal-scroll-container"
        ref={scrollContainerRef}
        style={{ width: "400vw", display: "flex" }}
      >
        <div
          className="section"
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "lightblue",
          }}
        >
          <h1>Element 1</h1>
        </div>
        <div
          className="section"
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "lightgreen",
          }}
        >
          <h1>Element 2</h1>
        </div>
        <div
          className="section"
          ref={section3Ref}
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "white", // Initially white
          }}
        >
          <h1>Element 3</h1>
        </div>
        <div
          className="section"
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "lightcoral",
          }}
        >
          <h1>Element 4</h1>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollWithBgChange;
