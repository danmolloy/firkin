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
  

  return (
    <div data-testid="header-section" className={`fixed w-full font-display border-b border-gray-600 h-14 flex flex-row justify-between items-center px-4 mix-blend-difference backdrop-blur z-20`}>
       <button onClick={() => animateScroll.scrollToTop({duration: 500, smooth: true})} className={` font-display  `}>The Big Firkin Band</button>
      <DonateButton />
    </div>
  )
}