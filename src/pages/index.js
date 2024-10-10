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
    <div
    >
      <Nav/>
      <Hero/>
      <About/>
      <Projects/>
      <Explore/>
      <Footer/>
    </div>
  );
}
