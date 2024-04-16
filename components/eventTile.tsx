import { Event } from "@/app/page";
import { DateTime } from "luxon"

export type EventTileProps = {
  event: Event
}

export default function EventTile(props: EventTileProps) {
  const { event } = props;
  return (
    <div data-testid={`${event.id}-tile`} className="border-b-[1.5px] p-1 my-1 font-text">
      <div>
        <p className=" text-2xl" data-testid="start-time">{DateTime.fromJSDate(new Date(event.start.dateTime)).toFormat("dd LLL yyyy")}</p>
        <p data-testid="date">{DateTime.fromJSDate(new Date(event.start.dateTime)).toFormat("hh:mm a")}</p>
      </div>
      <p data-testid="location">@ {event.location}</p>
    </div>
  )
}