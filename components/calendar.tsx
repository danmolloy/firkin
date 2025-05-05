import { Event } from "@/app/page"
import EventTile from "./eventTile";

export type CalendarProps = {
  events: Event[]
}

export default function Calendar(props: CalendarProps) {
  const { events } = props;


  return (
    <div id="calendar" data-testid="calendar-section" className="pt-24 px-8 flex flex-col text-black min-h-screen  ">
      <h2 className="text-4xl  font-semibold border-b border-zinc-400 ">Calendar</h2>
      <div className="border-2 rounded border-black p-2 my-4">
        {events.length === 0 
        ? <p className="m-2 text-xl font-medium">No upcoming gigs</p>
        : events.slice(0, 10).map(i => (
          <EventTile key={i.id} event={i} />
        ))}
      </div>
    </div>
  )
}