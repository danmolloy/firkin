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
            <Image className=" mt-20 mx-2 p-2" alt="The Big Firkin Band" src="/hero-text.png" height={206} width={582}/>
            <Image className="px-2" src="/hero-tagline-black.png" alt="17-piece jazz big band sensation!" width={547} height={28} />
            </div>
            <div className="flex flex-row  justify-center">
              {<div className="font-title text-center text-black  text-2xl px-2 font-bold  self-center">
                <p>Live at <span className="font-bold">The Fox & Firkin</span></p>
                <p>Lewisham High Street</p>
                <p>Second Sunday of the month</p>
                <p>3.30-6pm</p>
          {/* <Link data-testid="insta-link" href="https://www.instagram.com/thebigfirkinband/"  target="_blank"  title="Firkin Band Instagram" className="flex flex-row items-center justify-center mt-4 ">
            <FaInstagram />
            <p className="text-lg mx-2 font-title">Follow us</p>
          </Link> */}
              </div> }
            {/* nextGig !== undefined && 
            <div className="flex flex-col ">
              <Link data-testid="next-gig" href={'/#calendar'} className="border shadow border-blue-950 rounded mx-4 hover:cursor-pointer hover:text-blue-900 text-blue-900 font-announce text-2xl   lg:mr-[10vw] self-end px-2">
              <h2 className="">Next gig:</h2>
              <p className=" " data-testid="start-time">{DateTime.fromJSDate(new Date(nextGig.start.dateTime)).setZone('Europe/London').toFormat("dd LLL yyyy")}</p>
              <div className="flex flex-row items-center">
              <p data-testid="start-time">{DateTime.fromJSDate(new Date(nextGig.start.dateTime)).setZone('Europe/London').toFormat("h:mm a")} @ {nextGig.location ? nextGig.location.split(",")[0] : "Venue TBC"}</p>
                </div>
              </Link>
              
      </div> */}
{/*       <Image src="/free-entry.png" width={100} height={100} alt="Free Entry" />
 */}
{/*       <Link data-testid="insta-link" href="https://www.instagram.com/thebigfirkinband/"  target="_blank"  title="Firkin Band Instagram" className="flex flex-row items-center self-end mt-4">
            <FaInstagram />
            <p className="text-lg mx-2 font-title">Follow us</p>
          </Link> */}

          </div>
            <Image className="" src="/band-members.png" alt="The Big Firkin Band" height={298} width={716} />
</div>
  )
}