'use client'
import { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import DonateButton from "./donateButton";
import Image from "next/image";


export const menuItems: {title: string}[] = [
  {
    title: "About",
  },
  {
    title: "Calendar",
  },
  {
    title: "Musicians",
  },
  {
    title: "Contact",
  },
]

export default function Header() {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const [isUpperHalf, setIsUpperHalf] = useState<boolean>(true)

  useEffect(() => {
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        } else {
          setIsIntersecting(false);
        }
      });
    },
    { threshold: .05 } 
  );
  const upperObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting ) {
        setIsUpperHalf(true);
      } else {
        setIsUpperHalf(false);
      }
    });
  },
  { threshold: .05 } 
);
  /* Wrap hero and light section in a div */

  const heroSection = document.querySelector('#hero')
  const upperHalf = document.querySelector("#upper")
  
  heroSection && heroObserver.observe(heroSection);
  upperHalf && upperObserver.observe(upperHalf);

    return () => {
      heroSection && heroObserver.unobserve(heroSection);
      upperHalf && upperObserver.unobserve(upperHalf);
    };
  }, []);



  return (

    <div data-testid="header-section" className={`  fixed w-full font-display border-b border-gray-600 h-14 flex flex-row justify-between items-center px-4 bg-white z-20`}>
      <Image src={"/header-text.png"} alt="The Big Firkin Band" width={3966/15} height={466/15} className="" />

{/* <button onClick={() => animateScroll.scrollToTop({duration: 500, smooth: true})} className={`${!isUpperHalf && !isIntersecting ? "text-white": "text-black"} font-display`}>The Big Firkin Band</button>
 */}
{/* <DonateButton />
 */}</div>
  )
}
