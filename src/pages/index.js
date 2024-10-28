import Image from "next/image";
import localFont from "next/font/local";
import { useState } from 'react';
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import HorizontalScroll from "./wrapped-component/HorizontalScroll";

export default function Home() {
  const [showGif, setShowGif] = useState(false);

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
