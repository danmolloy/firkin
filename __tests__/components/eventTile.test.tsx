import EventTile, { EventTileProps } from "@/components/eventTile"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { DateTime } from "luxon"

const mockProps: EventTileProps = {
  event: {
    summary: "mockSummary",
    description: "mockDescription",
    id: "mockId",
    location: "FoxNFirkin",
    start: {
        dateTime: new Date()
    },
    end: {
        dateTime: new Date()
    }
  }
}

describe("<EventTile />", () => {
  beforeEach(() => {
    render(<EventTile {...mockProps} />)
  })
  it("event-summary is in the document", () => {
    const eventSummary = screen.getByText(mockProps.event.summary)
    expect(eventSummary).toBeInTheDocument()
  })
  it("formatted start time is in the document", () => {
    const formattedTime = DateTime.fromJSDate(new Date(mockProps.event.start.dateTime)).toFormat("hh:mma")
    const startTime = screen.getByText(formattedTime)
    expect(startTime).toBeInTheDocument()
  })
  it("formatted start date is in the document", () => {
    const formattedDate = DateTime.fromJSDate(new Date(mockProps.event.start.dateTime)).toFormat("dd LLL yyyy")
    const startDate = screen.getByText(formattedDate)
    expect(startDate).toBeInTheDocument()
  })
  it("venue is in the document with google maps link", () => {
    const venue = screen.getByText(mockProps.event.location)
    expect(venue).toBeInTheDocument()
  })
  it("gig description info is in the document", () => {
    const description = screen.getByText(mockProps.event.description)
    expect(description).toBeInTheDocument()
  })
})