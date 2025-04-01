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
    <div className="flex flex-col items-center justify-between h-screen w-[100vw] ">
            <Image className=" mt-20 mx-2" alt="The Big Firkin Band: 17-piece jazz big band sensation!" src="/hero-text.png" height={494/2} width={1180/2}/>
            <div className="flex flex-row">
            <p className="font-title w-[50vw] lg:ml-[16vw] text-blue-950 text-2xl md:text-3xl px-2 font-bold  self-center">Live at the Fox & Firkin 2nd Sunday of the month 3:30pm-6pm!</p>
            <div className="flex flex-col">
            {nextGig !== undefined && 
              <Link data-testid="next-gig" href={'/#calendar'} className="border-2 border-blue-950 rounded mx-4 hover:cursor-pointer hover:text-blue-900 text-blue-900 font-announce text-2xl md:text-3xl  lg:mr-[10vw] self-end px-2">
              <h2 className="">Next gig:</h2>
              <p className=" " data-testid="start-time">{DateTime.fromJSDate(new Date(nextGig.start.dateTime)).setZone('Europe/London').toFormat("dd LLL yyyy")}</p>
              <div className="flex flex-row items-center">
              <p data-testid="start-time">{DateTime.fromJSDate(new Date(nextGig.start.dateTime)).setZone('Europe/London').toFormat("h:mm a")} @ {nextGig.location ? nextGig.location.split(",")[0] : "Venue TBC"}</p>
                </div>
              </Link>}
              <div className="flex flex-row  lg:mr-[20vw] mb-1 mt-1 md:mt-2 self-end text-blue-900">
          <Link data-testid="insta-link" href="https://www.instagram.com/thebigfirkinband/" target="_blank"  title="Firkin Band Instagram" className="flex flex-row items-center ">
        <FaInstagram />
        <p className="text-lg mx-2 font-title">Follow us</p>
      </Link>
      </div>
      </div>

          </div>
            <Image className="" src="/band-members.png" alt="The Big Firkin Band" height={298} width={716} />
          </div>
  )
}