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
    <div className="flex flex-col items-center justify-between h-[100dvh] w-[100vw] font-title">
            <div>
              <div className="absolute top-11 z-10  h-24 w-24 md:h-32  md:w-32">
            <Image className="" src="/free-entry.png" fill={true} /* width={140} height={140} */ alt="Free Entry" />
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
 


          </div>
            <Image className="" src="/band-members.png" alt="The Big Firkin Band" height={298} width={716} />
</div>
  )
}