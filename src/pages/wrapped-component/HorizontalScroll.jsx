// components/Panel.jsx
import { useEffect,useRef } from 'react';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const mansonRef = useRef(null);
  const masidnf = useRef(null);
  const imgmanson = useRef(null);
  const darkbox = useRef(null);
  const imgzmanson = useRef(null);
  const endImgRef = useRef(null);
  const endImgctn = useRef(null);
    useEffect(() => {
    
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: masidnf.current,
            start: "top top",
            end: "150% ",
            scrub: true,
            pin: true,
            markers: true,
          },
        });


      tl.fromTo(
        darkbox.current ,{
          x: "-350%",
        }, {
          x: "0px",
          duration : 1.6,
        }
       
      )
      .fromTo(
        imgzmanson.current , 
        { y: "40%" },
        { y:"0", ease: "power2.inOut" ,duration: 1.4}
        , "<"
      )
    .to(mansonRef.current, {
        x: "-100vw",
        ease: "power2.inOut",
        duration: 2,
      })
.fromTo(endImgRef.current, 
        {
          width: "55%",
          x: 926,
          scale: 0.3,
          transformOrigin: "100% 0% "
        },
        {
          width: "100%",
          x: 0,
          scale: 1,
          duration: 1.5,
          ease: "power2.inOut"
        }
      )
      .fromTo(endImgctn.current, {
        width : "25%",
        x: "590px"
      }, {
        width : "100%",
        x: "0"
        ,     duration: 1.5,
          ease: "power2.inOut"
      },"<")
    
        return () => {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
      }, []);
    
      return (
        <div >
          
        </div>
      );
    };
    

export default HorizontalScroll;
