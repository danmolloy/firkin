import Calendar, { CalendarProps } from "@/components/calendar"
import { render, screen } from "@testing-library/react"
import { mockEvent } from "./hero.test"


describe("<Calendar />", () => {
  const mockProps: CalendarProps = {
    events: [mockEvent]
  }
  beforeEach(() => {
    render(<Calendar {...mockProps} />)
  })
  it("calendar-section is in the document", () => {
    const calendar = screen.getByTestId('calendar-section')
    expect(calendar).toBeInTheDocument()
  })
  it("'Calendar' title is in the document", () => {
    const title = screen.getByText("Calendar")
    expect(title).toBeInTheDocument()
  })
  it("list of upcoming gigs are in the document", () => {
    for (let i = 0; i < mockProps.events.length; i ++) {
      const event = screen.getByTestId(`${mockProps.events[i].id}-tile`)
      expect(event).toBeInTheDocument()
    }
  })
})

describe("<Calendar />", () => {
  const mockProps: CalendarProps = {
    events: []
  }
  beforeEach(() => {
    render(<Calendar {...mockProps} />)
  })
  it("states if there are no upcoming gigs", () => {
    const calendar = screen.getByTestId('calendar-section')
    expect(calendar.textContent).toMatch("No upcoming gigs")
  })
})
describe("<Calendar />", () => {
  const mockEvent = {
    summary: "mockSummary",
    description: "mockDescription",
    id: "mockId",
    location: "FoxNFirkin",
    start: {
      dateTime: new Date("July 31, 2009 01:43:00")
    },
    end: {
      dateTime: new Date("July 31, 2009 01:44:00")
    }
  }
  const mockProps: CalendarProps = {
    events: [mockEvent]
  }
  beforeEach(() => {
    render(<Calendar {...mockProps} />)
  })

  it("matches snapshot", () => {
    const calendar = screen.getByTestId('calendar-section')
    expect(calendar).toMatchSnapshot()
  })
})


