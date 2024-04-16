import Hero, { HeroProps } from "@/components/hero"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { Event } from "@/app/page"

export const mockEvent: Event = {
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
  it("next gig tile is in the document", () => {
    const nextGig = screen.getByText("Next gig:")
    expect(nextGig).toBeInTheDocument()
    const gigTile = screen.getByTestId(`${mockProps.nextGig.id}-tile`)
    expect(gigTile).toBeInTheDocument()
  })
  it("band name is in the document", () => {
    const heroSection = screen.getByTestId("hero-section")
    expect(heroSection.textContent).toMatch("The Big Firkin Band")
  })
  it("tagline or quote is in the document", () => {
    const heroSection = screen.getByTestId("hero-section")
    expect(heroSection.textContent).toMatch("17-piece jazz big band sensation!")
  })
  it("schedule summary is in the document", () => {
    //const summary = screen.getByText("Performing live th")
  })
})