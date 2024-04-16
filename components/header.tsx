'use client'
import { useEffect, useState } from "react";
import { Link, animateScroll } from "react-scroll";
import { IoMdMenu } from "react-icons/io";
import DonateButton from "./donateButton";


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

  /* useEffect(() => {
    function handleScroll() {
      const currentPosition = window.scrollY;
      if (currentPosition > scrollPosition + 100) {
        setScrollPosition(currentPosition);
        setShowHeader(false)
      } else if (currentPosition < scrollPosition - 5) {
        setScrollPosition(currentPosition);
        setShowHeader(true)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]); */

  return (
    <div data-testid="header-section" className={`${/* scrollPosition > 600 */ isIntersecting || (!isIntersecting && !isUpperHalf) ? "text-white" : "text-black"} transition-colors duration-300 fixed w-full font-display border-b border-gray-600 h-14 flex flex-row justify-between items-center px-4 backdrop-blur z-20`}>
       <button onClick={() => animateScroll.scrollToTop({duration: 500, smooth: true})} className={`${!isUpperHalf && !isIntersecting ? "text-white": "text-black"} font-display`}>The Big Firkin Band</button>
      <DonateButton />
    </div>
  )
}