'use client'
import { Event } from "@/app/page";
import { DateTime } from "luxon"
import { FaApple, FaGoogle } from "react-icons/fa";


export type EventTileProps = {
  event: Event
}

export default function EventTile(props: EventTileProps) {
  const { event } = props;
  
  const addToAppleCalendar = () => {
    const startDate = new Date(event.start.dateTime);
    const endDate = new Date(event.end.dateTime);
    
    // Format dates for Apple Calendar URL
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };
    
    const startFormatted = formatDate(startDate);
    const endFormatted = formatDate(endDate);
    
    // Create Apple Calendar URL
    const appleCalendarUrl = `data:text/calendar;charset=utf8,BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:${encodeURIComponent(window.location.href)}
DTSTART:${startFormatted}
DTEND:${endFormatted}
SUMMARY:${encodeURIComponent(event.description)}
DESCRIPTION:${encodeURIComponent(event.description)}
LOCATION:${encodeURIComponent(event.location || 'Venue TBC')}
END:VEVENT
END:VCALENDAR`;
    
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = appleCalendarUrl;
    link.download = 'event.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const addToGoogleCalendar = () => {
    const startDate = new Date(event.start.dateTime);
    const endDate = new Date(event.end.dateTime);
    
    // Format dates for Google Calendar URL
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };
    
    const startFormatted = formatDate(startDate);
    const endFormatted = formatDate(endDate);
    
    // Create Google Calendar URL
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.description)}&dates=${startFormatted}/${endFormatted}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location || 'Venue TBC')}`;
    
    // Open Google Calendar in a new tab
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <div data-testid={`${event.id}-tile`} className=" px-4 py-2 my-1 font-text">
      <div>
        <p className=" text-2xl font-bold -ml-2" data-testid="start-time">{DateTime.fromJSDate(new Date(event.start.dateTime)).toFormat("dd LLL yyyy")}</p>
        <p className="text-lg font-medium" data-testid="date">{DateTime.fromJSDate(new Date(event.start.dateTime)).setZone('Europe/London').toFormat("hh:mm a")} - {DateTime.fromJSDate(new Date(event.end.dateTime)).setZone('Europe/London').toFormat("hh:mm a")}</p>
      </div>
      {
        event.location 
        ? <p className="font-normal" data-testid="location">@ <a target="_blank" className=" hover:underline" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.location)}`}>{event.location}</a></p>  
        : <p>Venue TBC</p>
      }
        <p data-testid="desription">{event.description}</p>
        <div className="flex flex-col justify-start text-sm text-gray-400">
            
          <button 
            className="flex flex-row items-center gap-2 hover:text-white px-4 py-1 rounded transition-colors"
            onClick={addToAppleCalendar}
            data-testid="apple-calendar-btn"
          >
            <FaApple className="text-lg" />
            <p>Add to Apple Calendar</p>
          </button>
          <button 
            className="flex flex-row items-center gap-2 hover:text-white px-4 py-1 rounded transition-colors"
            onClick={addToGoogleCalendar}
            data-testid="google-calendar-btn"
          >
            <FaGoogle className="text-lg" />
            <p>Add to Google Calendar</p>
          </button>
        </div>
      </div>
  )
}