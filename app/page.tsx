import About from "@/components/about";
import Calendar from "@/components/calendar";
import ContactForm from "@/components/contactForm";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Musicians from "@/components/musicians";
import { DateTime } from "luxon";
import NewsletterIndex from "./newsletter";
import Image from "next/image";
import Link from "next/link";
import PosterHero from "@/components/posterHero";

async function getData() {
  try {
    const API_KEY = process.env.API_KEY
        const CALENDAR_ID = process.env.CALENDAR_ID
        const res = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`,
          {cache: "no-store"}
        );
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      return {items: []}
      /* throw new Error('Failed to fetch data') */
    }
    console.log(JSON.stringify(res.body));
    return res.json()
  } catch (e) {
    console.log(`Error: ${e}`);
    return {items: []}
  }
 
}

export type Event = {
  id: string
  summary: string
  location?: string
  description: string
  start: {
    dateTime: Date
  }
  end: {
    dateTime: Date
  }
}

export default async function Home() {
  //const [showHeader, setShowHeader] = useState<boolean>(true)
  //const [showMenu, setShowMenu] = useState<boolean>(false)
  const data = await getData()
  const calendar: Event[] = data.items.filter((i: Event) => i.start !== undefined).sort((a:Event, b:Event) => 
    new Date(a.start.dateTime).getTime() - new Date(b.start.dateTime).getTime()).filter((i: Event) => 
      DateTime.fromJSDate(new Date(i.start.dateTime)) >= DateTime.now())

  return (
    <main className="flex flex-col text-black bg-[url(/bg-pattern.png)] bg-repeat font-text" data-testid="main-page">
      <div className="absolute top-0 right-0 w-1/2 h-[93vh] mt-14">
    <div className="relative w-full h-full ">
      <Image alt="Blue background" src={"/teal-splash.png"} fill={true} />
    </div>
  </div>
  <div className="z-10">
      <Header />
      <PosterHero nextGig={calendar[0]} />
      <About />
      <Calendar events={calendar.length > 0 ? calendar : []} />
{/*       <NewsletterIndex />
 */}      <Musicians />
      <ContactForm />
      <Footer />
      </div>
     
    </main>
  );
}


/* 
Sumup link
Calendar Bug
*/