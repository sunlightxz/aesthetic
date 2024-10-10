import Image from "next/image";
import localFont from "next/font/local";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Explore from "./components/Explore";

export default function Home() {
  return (
    <div className="relative">
      <div className="
        absolute inset-0 z-0
        bg-[url('/bg.gif')] bg-cover bg-center bg-no-repeat opacity-60
      "></div>
      <div className="absolute inset-0 z-10 bg-black opacity-90"></div>
      <div className="relative z-20">
        <Nav/>
        <Hero/>
        <About/>
        <Projects/>
        <Explore/>
        <Footer/>
      </div>
    </div>
  );
}
