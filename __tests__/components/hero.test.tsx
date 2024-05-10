import Hero, { HeroProps } from "@/components/hero"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Event } from "@/app/page"
import { DateTime } from "luxon"

export const mockEvent: Event = {
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


const mockProps: HeroProps = {
  nextGig: mockEvent
}

describe("<Hero />", () => {
  beforeEach(() => {
    render(<Hero {...mockProps} />)
  })
  it("hero-section is in the document", () => {
    const heroSection = screen.getByTestId("hero-section")
    expect(heroSection).toBeInTheDocument()
  })
  it("next gig details is in the document", () => {
    const gigTile = screen.getByTestId(`next-gig`)
    expect(gigTile).toBeInTheDocument()
    expect(gigTile.textContent).toMatch("Next gig:")
    expect(gigTile.textContent).toMatch(`${DateTime.fromJSDate(new Date(mockProps.nextGig.start.dateTime)).setZone('Europe/London').toFormat("h:mm a")} @ ${mockProps.nextGig.location.split(",")[0]}`)
    expect(gigTile).toHaveAttribute("href", "/#calendar")
  })
  it("band name is in the document", () => {
    const heroSection = screen.getByTestId("hero-section")
    expect(heroSection.textContent).toMatch("The Big Firkin Band")
  })
  it("tagline or quote is in the document", () => {
    const heroSection = screen.getByTestId("hero-section")
    expect(heroSection.textContent).toMatch("17-piece jazz big band sensation")
    expect(heroSection.textContent).toMatch("Live at the Fox & Firkin on the second Sunday of the month 3:30pm-6pm!")

  })
  it("instagram link is in the document", () => {
    const instaLink = screen.getByTestId("insta-link")
    expect(instaLink).toBeInTheDocument()
    expect(instaLink.textContent).toMatch("Follow us")
    expect(instaLink).toHaveAttribute("href", "https://www.instagram.com/thebigfirkinband/")
    expect(instaLink).toHaveAttribute("target", "_blank")
  })
  it("matches snapshot", () => {
    const heroSection = screen.getByTestId("hero-section")
    expect(heroSection).toMatchSnapshot()
  })
})