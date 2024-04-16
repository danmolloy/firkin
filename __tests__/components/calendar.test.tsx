import Calendar, { CalendarProps } from "@/components/calendar"
import { render, screen } from "@testing-library/react"
import { mockEvent } from "./hero.test"

const mockProps: CalendarProps = {
  events: [mockEvent]
}

describe("<Calendar />", () => {
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