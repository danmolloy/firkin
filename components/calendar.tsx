import { Event } from "@/app/page"
import EventTile from "./eventTile";

export type CalendarProps = {
  events: Event[]
}

export default function Calendar(props: CalendarProps) {
  const { events } = props;

  return (
    <div data-testid="calendar-section" className="px-8 py-12 flex flex-col bg-white">
      <h2 className="text-2xl font-title pb-4">Calendar</h2>
      <div>
        {events.length === 0 
        ? <p>No upcoming gigs</p>
        : events.map(i => (
          <EventTile key={i.id} event={i} />
        ))}
      </div>
    </div>
  )
}