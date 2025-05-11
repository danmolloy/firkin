'use client'
import { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrInstagram } from "react-icons/gr";
import Link from "next/link";
import Menu from "./menu";



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
  const [showMenu, setShowMenu] = useState(false)
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

   <div
  data-testid="header-section"

  className="fixed w-full z-20 font-display mix-blend-difference  border-gray-600  h-14 flex flex-row justify-between items-center px-4 "
>
  <Image
    src="/header-text.png"
    alt="The Big Firkin Band"
    width={198.3}
    height={23.3}
    className="brightness-200 contrast-200 grayscale invert"
  />

  <div className=" flex flex-row items-center text-2xl ">
    {/* Button with mix-blend-difference */}
    <button
      className="p-1 text-white"
      onClick={() => setShowMenu(!showMenu)}
    >
        <GiHamburgerMenu />
    </button>

    {/* Menu should be outside any blend mode */}
    {showMenu && (
        <Menu setShowMenu={setShowMenu} />
    )}
  </div>
</div>
  )
}
