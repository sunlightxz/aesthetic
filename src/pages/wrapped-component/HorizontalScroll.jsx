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
        <div className="container flex overflow-x-hidden w-screen" data-pin="true">
          <div className="panel flex-shrink-0 w-screen h-screen bg-gray-800 text-gray-200 flex items-center justify-center">
            <h1 className="text-white">Section 1</h1>
            <div className="box box-1 w-24 h-20 text-center leading-20 bg-white rounded-lg text-gray-800 font-bold mx-5 transition-transform">
              Box 1
            </div>
          </div>
          <div data-pin="true" className="panel flex-shrink-0 w-screen h-screen bg-gray-900 text-gray-200 flex items-center justify-center">
            <h1 className="text-white">Section 2</h1>
            <div className="box box-2 w-24 h-20 text-center leading-20 bg-white rounded-lg text-gray-800 font-bold mx-5 transition-transform">
              Box 2
            </div>
          </div>
          <div className="panel flex-shrink-0 w-screen h-screen bg-gray-700 text-gray-200 flex items-center justify-center">
            <h1 className="text-white">Section 3</h1>
            <div className="box box-3 w-24 h-20 text-center leading-20 bg-white rounded-lg text-gray-800 font-bold mx-5 transition-transform">
              Box 3
            </div>
          </div>
          {/* Add more panels and boxes as needed */}
        </div>
      );
    };
    

export default HorizontalScroll;
