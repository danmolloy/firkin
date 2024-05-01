import { Event } from "@/app/page"
import EventTile from "./eventTile";
import Image from "next/image";
import bandHero from '../public/bandHero.jpg'
import { DateTime } from "luxon";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export type HeroProps = {
  nextGig: Event
}

export default function Hero(props: HeroProps) {
  const { nextGig } = props;
  
  return (
    <div>
      
    <div data-testid="hero-section" className="bg-black text-white pt-12 text-lg pb-8 px-4 flex flex-col items-center justify-between h-screen fixed w-screen  z-0">
      <div className="text-center flex flex-col items-center mt-4 md:mt-24 self-center lg:w-1/2">
         <h1 className="font-display text-6xl md:text-7xl my-2 md:mt-12 text-yellow-500">The Big Firkin Band</h1>
         <div className=" p-2 md:p-4">
         <p className="text-xl font-text border-b pb-4 text-gray-300">17-piece jazz big band sensation</p>
         <p className="text-base md:text-xl font-text  pt-2 text-yellow-400">Live at the Fox & Firkin on the second Sunday of the month 3:30pm-6pm!</p>
         </div>
      </div>

        <div className="self-start  md:text-2xl mb-20 px-2 pt-1 md:pt-2 font-text">
        {nextGig !== undefined && 
          <Link href={'/#calendar'} className="hover:cursor-pointer hover:text-gray-200">
          <h3 className="">Next gig:</h3>
          <p className=" md:text-3xl text-xl" data-testid="start-time">{DateTime.fromJSDate(new Date(nextGig.start.dateTime)).setZone('Europe/London').toFormat("dd LLL yyyy")}</p>
          <div className="flex flex-row items-center">
          <p data-testid="start-time">{DateTime.fromJSDate(new Date(nextGig.start.dateTime)).setZone('Europe/London').toFormat("hh:mm a")} @ {nextGig.location.split(",")[0]}</p>
            </div>
          </Link>}
          <div className="flex flex-row mb-2 mt-2 md:mt-4">
          <Link href="https://www.instagram.com/thebigfirkinband/" target="_blank"  title="Firkin Band Instagram" className="text-gray-400 hover:text-yellow-500 flex flex-row items-center ">
        <FaInstagram />
        <p className="text-sm mx-2">Follow us</p>
      </Link>

          </div>
        </div>
    </div>
          <div id="hero" className="z-0  h-screen w-screen">

          </div>
    </div>
  )
}