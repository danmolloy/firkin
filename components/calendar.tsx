import { Event } from "@/app/page"
import EventTile from "./eventTile";

export type CalendarProps = {
  events: Event[]
}

export default function Calendar(props: CalendarProps) {
  const { events } = props;


  return (
    <div id="calendar" data-testid="calendar-section" className="py-16 px-12 sm:px-24 flex flex-col bg-black text-white min-h-screen  ">
      <h2 className="text-5xl font-extrabold">CALENDAR</h2>
      <div className=" rounded  p-2 my-4">
        {events.length === 0 
        ? <p className="m-2 text-xl font-medium">No upcoming gigs</p>
        : events.slice(0, 10).map(i => (
          <EventTile key={i.id} event={i} />
        ))}
      </div>
    </div>
  )
}