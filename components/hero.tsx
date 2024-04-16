import { Event } from "@/app/page"
import EventTile from "./eventTile";
import Image from "next/image";
import bandHero from '../public/bandHero.jpg'
import { DateTime } from "luxon";
import { IoLocationOutline } from "react-icons/io5";

export type HeroProps = {
  nextGig: Event
}

export default function Hero(props: HeroProps) {
  const { nextGig } = props;
  
  return (
    <div>
      
    <div data-testid="hero-section" className="bg-black text-white pt-12 text-lg pb-8 px-4 flex flex-col items-center justify-between h-screen fixed w-screen  z-0">
      <div className="text-center flex flex-col items-center mt-16 md:mt-24 self-center lg:w-1/2">
         <h1 className="font-display text-5xl md:text-7xl my-2 md:mt-12 text-yellow-500">The Big Firkin Band</h1>
       {/* <div className=" rounded overflow-hidden my-2">
        <Image data-testid={"band-img"} src={bandHero} alt="Front on short of the band performing outside" title="The Big Firkin Band" className="self-center" width={500}/>
      </div> */}
      </div>
      
      {/* {nextGig !== undefined && 
        <div className="">
          <h3 className="">Next gig:</h3>
          <EventTile event={nextGig} />
        </div>} */}
        {nextGig !== undefined && 
        <div className="self-start font-title md:text-2xl mb-16">
          <h3 className="">Next gig:</h3>
          <p className=" md:text-3xl text-2xl" data-testid="start-time">{DateTime.fromJSDate(new Date(nextGig.start.dateTime)).toFormat("dd LLL yyyy")}</p>
          <div className="flex flex-row items-center">
          <p data-testid="start-time">{DateTime.fromJSDate(new Date(nextGig.start.dateTime)).toFormat("hh:mm a")} @ {nextGig.location.split(",")[0]}</p>
            </div>

        </div>}
    </div>
          <div id="hero" className="z-0  h-screen w-screen">

          </div>
    </div>
  )
}