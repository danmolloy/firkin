'use client'
import { useEffect, useState } from "react";
import { animateScroll } from "react-scroll";
import DonateButton from "./donateButton";
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

    <div data-testid="header-section" className={`  fixed w-full font-display border-b border-gray-600 h-14 flex flex-row justify-between items-center px-4 bg-white z-20`}>
      <Image src={"/header-text.png"} alt="The Big Firkin Band" width={3966/15} height={466/15} className="" />

{/* <button onClick={() => animateScroll.scrollToTop({duration: 500, smooth: true})} className={`${!isUpperHalf && !isIntersecting ? "text-white": "text-black"} font-display`}>The Big Firkin Band</button>
 */}
{/* <DonateButton />
 */}
 <div className="flex flex-row items-center text-2xl">
 <Link className="mx-2 md:mx-6 hover:text-slate-500" href="https://www.instagram.com/thebigfirkinband/"  target="_blank">
 <GrInstagram />
 </Link>
 <div>
 <button className="p-1 hover:text-slate-500" onClick={() => setShowMenu(!showMenu)}>
  <GiHamburgerMenu />
 </button>
 {showMenu && <Menu setShowMenu={(arg) => setShowMenu(arg)}/>}
 </div></div>
 </div>
  )
}
