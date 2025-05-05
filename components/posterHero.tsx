import { Event } from "@/app/page";
import { DateTime } from "luxon";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export type HeroProps = {
  nextGig: Event
}

export default function PosterHero(props: HeroProps) {
  const { nextGig } = props;

  return (
    <div className="flex flex-col items-center justify-center h-[100vh] w-[100vw]  font-title  ">
      <div className="relative overflow-hidden bg-[url(/bg-pattern.png)] bg-white bg-repeat shadow border-4 border-black  flex flex-col items-center justify-between mt-16 mb-8  h-full w-[95vw] sm:w-3/4 md:w-3/5 lg:w-2/5">
      <div className=" absolute top-0 z-10 left-0  h-24 w-24 ">
            <Image className="" src="/free-entry.png" fill={true}  alt="Free Entry" />
            </div>
          <div className="h-[85vh]  w-1/2 sm:w-2/5  self-end absolute -z-0"> 
            <Image alt="Blue background" src={"/teal-splash.png"} fill={true} />
          </div>
        <div className="flex flex-col items-start justify-start w-full ">
      <div className=" w-full aspect-[3/1] flex relative">
      <Image className="  mx-2 p-2 " alt="The Big Firkin Band" src="/hero-text.png" fill={true} />
      </div>
      <div className=" w-full h-6 flex relative">
      <Image className="px-2" src="/hero-tagline-black.png" alt="17-piece jazz big band sensation!" fill={true} />
      </div>
      </div>
      <div className="font-title text-center text-black  text-2xl  font-bold  self-center z-10">
                <p>Live at <span className="font-bold">The Fox & Firkin</span></p>
                <p>Lewisham High Street</p>
                <p>Second Sunday of the month</p>
                <p>3.30-6pm</p>

              </div> 
              <div className=" w-full aspect-[9/4] flex relative self-end" >
            <Image className="object-contain " src="/band-members.png" alt="The Big Firkin Band" fill={true}/>
            </div>
            </div>
</div>
  )
}


/* <div className="">
              <div className="absolute top-11 z-10  h-24 w-24 md:h-32  md:w-32">
            <Image className="" src="/free-entry.png" fill={true}  alt="Free Entry" />
            </div>
            <Image className=" mt-20 mx-2 p-2" alt="The Big Firkin Band" src="/hero-text.png" height={206} width={582}/>
            <Image className="px-2" src="/hero-tagline-black.png" alt="17-piece jazz big band sensation!" width={547} height={28} />
            </div>
            <div className="flex flex-row  justify-center">
              {<div className="font-title text-center text-black  text-2xl px-2 font-bold  self-center">
                <p>Live at <span className="font-bold">The Fox & Firkin</span></p>
                <p>Lewisham High Street</p>
                <p>Second Sunday of the month</p>
                <p>3.30-6pm</p>

              </div> }
 


          </div> */