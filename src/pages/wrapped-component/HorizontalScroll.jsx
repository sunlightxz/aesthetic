// components/Panel.jsx
import { useEffect } from 'react';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
    useEffect(() => {
        const sections = gsap.utils.toArray('.panel');
    
        const scrollTween = gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: '.container',
            pin: true,
            scrub: 0.1,
            end: () => `+=${sections.length * window.innerWidth}`, // Adjust based on section count
          },
        });
    
        // Initial positions for the boxes
        gsap.set('.box-1, .box-2', { y: 100 });
    
        // Box 1 Animation
        gsap.to('.box-1', {
          y: -130,
          duration: 2,
          ease: 'elastic',
          scrollTrigger: {
            trigger: '.box-1',
            containerAnimation: scrollTween,
            start: 'left center',
            toggleActions: 'play none none reset',
          },
        });
    
        // Box 2 Animation
        gsap.to('.box-2', {
          y: -120,
          backgroundColor: '#1e90ff',
          ease: 'none',
          scrollTrigger: {
            trigger: '.box-2',
            containerAnimation: scrollTween,
            start: 'center 80%',
            end: 'center 20%',
            scrub: true,
          },
        });
    
        return () => {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
      }, []);
    
      return (
        <div className=" flex translate-y-[-100%] h-screen  w-screen bg-black" >
            <div className="h-[200vh] bg-blue-100 w-full "></div>
          {/* Add more panels and boxes as needed */}
        </div>
      );
    };
    

export default HorizontalScroll;
