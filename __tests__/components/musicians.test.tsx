import { render, screen } from "@testing-library/react"
import Musicians from "@/components/musicians"
import "@testing-library/jest-dom"

describe("<Musicians />", () => {
  beforeEach(() => {
    render(<Musicians />)
  })
  it("musicians-section is in the document", () => {
    const musiciansSection = screen.getByTestId("musicians-section")
    expect(musiciansSection).toBeInTheDocument()
  })
  it("'Musicians' title is in the document", () => {
    const title = screen.getByText(/^Musicians$/)
    expect(title).toBeInTheDocument()
  })
  it("general musicians blurb is in the document", () => {
    const bandMusicians = screen.getByTestId("band-musicians")
    expect(bandMusicians).toBeInTheDocument()
    expect(bandMusicians.textContent).toMatch("The Band")
  })
  it("band leader section is in the document", () => {
    const bandLeader = screen.getByTestId("band-leader")
    expect(bandLeader).toBeInTheDocument()
    expect(bandLeader.textContent).toMatch("Eoghan Kelly")
  })
  it("band leader photo is in the document", () => {
    const leaderPhoto = screen.getByAltText("Band leader Eoghan Kelly playing his trombone")
    expect(leaderPhoto).toBeInTheDocument()
  })
  it("band photo is in the document", () => {
    const bandPhoto = screen.getByAltText("The band performing live at the Fox & Firkin")
    expect(bandPhoto).toBeInTheDocument()
  })
})