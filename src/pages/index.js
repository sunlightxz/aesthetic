import { useEffect } from 'react'
import localFont from "next/font/local";
import { useState } from 'react';
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import HorizontalScroll from "./wrapped-component/HorizontalScroll";
import Lenis from '@studio-freight/lenis'


export default function Home() {
  const [showGif, setShowGif] = useState(false);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])
  return (
    <div className="relative">
    

      <div className="relative z-20 w-screen overflow-hidden">
        <Nav setShowGif={setShowGif} />
        {/*
        
       
        <Projects/>
     


        */}
        <Hero showGif={showGif} />
      <About/>

      <Footer/>

      </div>
    </div>
  );
}
