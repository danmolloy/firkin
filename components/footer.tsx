'use client'
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { animateScroll } from "react-scroll";

export default function Footer() {
  return (
    <div data-testid="footer-section" className="h-20 bg-white text-blue-900  border-t border-gray-600 px-4 font-text flex flex-col items-center justify-center">
      <button 
        className="hover:underline p-2"
        onClick={() => animateScroll.scrollToTop({
          smooth: true, duration: 750})}>
            Back to top
      </button>
      <Link href="https://www.instagram.com/thebigfirkinband/" target="_blank" title="Firkin Band Instagram">
        <FaInstagram />
      </Link>
    </div>
  )
}