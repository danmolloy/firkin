import About from "@/components/about";
import Calendar from "@/components/calendar";
import ContactForm from "@/components/contactForm";
import EventTile from "@/components/eventTile";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Musicians from "@/components/musicians";
import { DateTime } from "luxon";

async function getData() {
  const API_KEY = process.env.API_KEY
      const CALENDAR_ID = process.env.CALENDAR_ID
      const res = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`,
        {cache: "no-store"}
      );
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export type Event = {
  id: string
  summary: string
  location: string
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
  const calendar = data.items.sort((a:Event, b:Event) => 
    new Date(a.start.dateTime).getTime() - new Date(b.start.dateTime).getTime()).filter((i: Event) => 
      DateTime.fromJSDate(new Date(i.start.dateTime)) >= DateTime.now())

  return (
    <main className="flex flex-col text-black bg-slate-50 " data-testid="main-page">
      <Header /* setShowMenu={() => setShowMenu(!showMenu)} setShowHeader={(arg) => setShowHeader(arg)} *//>
      <Hero nextGig={calendar[0]} />
      <div id="light" className="z-10 font-text ">
        <div id="upper" className="flex flex-col">
          <About />
          <Calendar events={calendar.length > 0 ? calendar : []} />
        </div>
        <Musicians />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}
