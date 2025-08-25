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
import PhotoAlbum from "@/components/photoAlbum";
import HeroWrapper from "@/components/appWrap";

async function getData() {
  try {
    const API_KEY = process.env.API_KEY
        const CALENDAR_ID = process.env.CALENDAR_ID
        const res = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&singleEvents=true&orderBy=startTime`,
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
  const now = DateTime.now()
  const threeMonthsFromNow = now.plus({ months: 3 })
  
  const calendar: Event[] = data.items
    .filter((i: Event) => i.start !== undefined)
    .filter((i: Event) => {
      const eventDate = DateTime.fromJSDate(new Date(i.start.dateTime))
      return eventDate >= now && eventDate <= threeMonthsFromNow
    })
    .sort((a: Event, b: Event) => 
      new Date(a.start.dateTime).getTime() - new Date(b.start.dateTime).getTime())

  return (
    <main className="flex flex-col text-black font-text " data-testid="main-page">
      
  <div className=" flex flex-col text-black font-text bg-white">
      <Header />
      {/* <PosterHero /> */}
      <HeroWrapper />
      <About />
      <Calendar events={calendar.length > 0 ? calendar : []} />
{/*       <NewsletterIndex />
 */}      <Musicians />
 <PhotoAlbum />
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