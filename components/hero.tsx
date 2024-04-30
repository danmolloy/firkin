import { Event } from "@/app/page"
import EventTile from "./eventTile";
import Image from "next/image";
import bandHero from '../public/bandHero.jpg'
import { DateTime } from "luxon";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

export type HeroProps = {
  nextGig: Event
}

export default function Hero(props: HeroProps) {
  const { nextGig } = props;
  
  return (
    <div>
      
    <div data-testid="hero-section" className="bg-black text-white pt-12 text-lg pb-8 px-4 flex flex-col items-center justify-between h-screen fixed w-screen  z-0">
      <div className="text-center flex flex-col items-center mt-16 md:mt-24 self-center lg:w-1/2">
         <h1 className="font-display text-6xl md:text-7xl my-2 md:mt-12 text-yellow-500">The Big Firkin Band</h1>
         <div className="p-4">
         <p className="text-xl font-text">17-piece jazz big band sensation!</p>
         <p className="text-xl font-text">Live at the Fox & Firkin on the second Sunday of the month 3:30pm-6pm!</p>
         </div>

       {/* <div className=" rounded overflow-hidden my-2">
        <Image data-testid={"band-img"} src={bandHero} alt="Front on short of the band performing outside" title="The Big Firkin Band" className="self-center" width={500}/>
      </div> */}
      </div>
      
      {/* {nextGig !== undefined && 
        <div className="">
          <h3 className="">Next gig:</h3>
          <EventTile event={nextGig} />
        </div>} */}

        <div className="self-start  md:text-2xl mb-16 p-2 font-text">
        {nextGig !== undefined && 
          <div>
          <h3 className="">Next gig:</h3>
          <p className=" md:text-3xl text-2xl" data-testid="start-time">{DateTime.fromJSDate(new Date(nextGig.start.dateTime)).toFormat("dd LLL yyyy")}</p>
          <div className="flex flex-row items-center">
          <p data-testid="start-time">{DateTime.fromJSDate(new Date(nextGig.start.dateTime)).toFormat("hh:mm a")} @ {nextGig.location.split(",")[0]}</p>
            </div>
          </div>}
          <div className="flex flex-row mt-1">
          <button /* href="https://www.instagram.com/thebigfirkinband/" target="_blank" */ title="Firkin Band Instagram" className=" text-2xl flex flex-row items-center">
        <FaInstagram />
        <p className="text-sm ml-2">Follow us</p>
      </button>

          </div>
        </div>
    </div>
          <div id="hero" className="z-0  h-screen w-screen">

          </div>
    </div>
  )
}