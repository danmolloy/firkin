import { Event } from "@/app/page";
import { DateTime } from "luxon"

export type EventTileProps = {
  event: Event
}

export default function EventTile(props: EventTileProps) {
  const { event } = props;
  return (
    <div data-testid={`${event.id}-tile`} className="border-b-2 border-white px-1 py-2 my-1 font-text">
      <div>
        <p className=" text-2xl font-bold" data-testid="start-time">{DateTime.fromJSDate(new Date(event.start.dateTime)).toFormat("dd LLL yyyy")}</p>
        <p className="text-lg font-semibold" data-testid="date">{DateTime.fromJSDate(new Date(event.start.dateTime)).setZone('Europe/London').toFormat("hh:mm a")}</p>
      </div>
      {
        event.location 
        ? <p className="font-medium" data-testid="location">@ <a target="_blank" className=" hover:underline" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`}>{event.location}</a></p>  
        : <p>Venue TBC</p>
      }
        <p data-testid="desription">{event.description}</p>
      </div>
  )
}